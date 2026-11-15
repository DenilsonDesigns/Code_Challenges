using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Threading;
using System.Threading.Tasks;

public class Program
{
    public static async Task Main(string[] args)
    {
        const int totalItemsToSend = 100_000_000;

        // Force baseline cleanup
        GC.Collect(2, GCCollectionMode.Aggressive, true, true);
        GC.WaitForPendingFinalizers();

        // ==========================================
        // 1. Ultra-Optimized SPSC Ring Buffer Benchmark
        // ==========================================
        Console.WriteLine($"=== 1. Optimized SPSC Ring Buffer Benchmark ({totalItemsToSend:N0} items) ===");
        const int capacity = 1024 * 1024;
        var ringBuffer = new SpscRingBuffer<long>(capacity);
        
        long startGen0 = GC.CollectionCount(0);
        long startGen1 = GC.CollectionCount(1);
        long startGen2 = GC.CollectionCount(2);
        long startBytesAllocated = GC.GetTotalAllocatedBytes(true);

        var ringStopwatch = Stopwatch.StartNew();

        var ringProducer = Task.Run(() =>
        {
            for (long i = 1; i <= totalItemsToSend; i++)
            {
                while (!ringBuffer.TryWrite(i))
                {
                    Thread.SpinWait(1);
                }
            }
        });

        var ringConsumer = Task.Run(() =>
        {
            long localReceived = 0;
            long checksum = 0;
            while (localReceived < totalItemsToSend)
            {
                if (ringBuffer.TryRead(out long item))
                {
                    checksum += item ^ 0xFF;
                    localReceived++;
                }
                else
                {
                    Thread.SpinWait(1);
                }
            }
            if (checksum == -1) Console.WriteLine("");
        });

        await Task.WhenAll(ringProducer, ringConsumer);
        ringStopwatch.Stop();

        long ringBytesAllocated = GC.GetTotalAllocatedBytes(true) - startBytesAllocated;
        long ringGen0 = GC.CollectionCount(0) - startGen0;
        long ringGen1 = GC.CollectionCount(1) - startGen1;
        long ringGen2 = GC.CollectionCount(2) - startGen2;

        Console.WriteLine($"Total Time: {ringStopwatch.Elapsed.TotalSeconds:F3} seconds");
        Console.WriteLine($"Optimized SPSC Throughput: {totalItemsToSend / ringStopwatch.Elapsed.TotalSeconds:N0} ops/sec.");
        Console.WriteLine($"Allocated Bytes: {ringBytesAllocated:N0} bytes");
        Console.WriteLine($"GC Collections -> Gen 0: {ringGen0}, Gen 1: {ringGen1}, Gen 2: {ringGen2}\n");

        // Clean slate again
        GC.Collect(2, GCCollectionMode.Aggressive, true, true);
        GC.WaitForPendingFinalizers();

        // ==========================================
        // 2. Locked Standard Queue Benchmark (100M Items)
        // ==========================================
        Console.WriteLine($"=== 2. Locked Queue<T> Benchmark ({totalItemsToSend:N0} items) ===");
        var standardQueue = new Queue<long>();
        var lockObj = new object();

        startGen0 = GC.CollectionCount(0);
        startGen1 = GC.CollectionCount(1);
        startGen2 = GC.CollectionCount(2);
        startBytesAllocated = GC.GetTotalAllocatedBytes(true);

        var queueStopwatch = Stopwatch.StartNew();

        var queueProducer = Task.Run(() =>
        {
            for (long i = 1; i <= totalItemsToSend; i++)
            {
                lock (lockObj)
                {
                    standardQueue.Enqueue(i);
                }
            }
        });

        var queueConsumer = Task.Run(() =>
        {
            long localReceivedCount = 0;
            long checksum = 0;
            while (localReceivedCount < totalItemsToSend)
            {
                bool success = false;
                long item = 0;
                lock (lockObj)
                {
                    if (standardQueue.Count > 0)
                    {
                        item = standardQueue.Dequeue();
                        success = true;
                    }
                }

                if (success)
                {
                    checksum += item ^ 0xFF;
                    localReceivedCount++;
                }
                else
                {
                    Thread.SpinWait(1);
                }
            }
            if (checksum == -1) Console.WriteLine("");
        });

        await Task.WhenAll(queueProducer, queueConsumer);
        queueStopwatch.Stop();

        long queueBytesAllocated = GC.GetTotalAllocatedBytes(true) - startBytesAllocated;
        long queueGen0 = GC.CollectionCount(0) - startGen0;
        long queueGen1 = GC.CollectionCount(1) - startGen1;
        long queueGen2 = GC.CollectionCount(2) - startGen2;

        Console.WriteLine($"Total Time: {queueStopwatch.Elapsed.TotalSeconds:F3} seconds");
        Console.WriteLine($"Locked Queue Throughput: {totalItemsToSend / queueStopwatch.Elapsed.TotalSeconds:N0} ops/sec.");
        Console.WriteLine($"Allocated Bytes: {queueBytesAllocated:N0} bytes");
        Console.WriteLine($"GC Collections -> Gen 0: {queueGen0}, Gen 1: {queueGen1}, Gen 2: {queueGen2}");
    }
}

[StructLayout(LayoutKind.Explicit, Size = 128)]
public struct PaddedCounter
{
    [FieldOffset(0)]
    public long Value;
}

public sealed class SpscRingBuffer<T>
{
    private readonly T[] _buffer;
    private readonly int _mask;
    private readonly int _capacity;

    private PaddedCounter _tail;
    private PaddedCounter _head;

    // Cached pointers to reduce cross-core volatile reads during high-speed bursts
    private long _cachedHead;
    private long _cachedTail;

    public SpscRingBuffer(int capacity)
    {
        if ((capacity & (capacity - 1)) != 0)
            throw new ArgumentException("Capacity must be a power of 2.");

        _capacity = capacity;
        _buffer = new T[capacity];
        _mask = capacity - 1;
    }

    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    public bool TryWrite(T item)
    {
        long tail = _tail.Value; // Producer owns tail, no volatile read needed for local value

        if (tail - _cachedHead >= _capacity)
        {
            _cachedHead = Volatile.Read(ref _head.Value); // Refresh only when full
            if (tail - _cachedHead >= _capacity)
                return false;
        }

        Unsafe.Add(ref MemoryMarshal.GetArrayDataReference(_buffer), (nint)(tail & _mask)) = item;
        Volatile.Write(ref _tail.Value, tail + 1); // Publish new tail to consumer
        return true;
    }

[MethodImpl(MethodImplOptions.AggressiveInlining)]
    public bool TryRead(out T item)
    {
        long head = _head.Value; // Consumer owns head, no volatile read needed for local value

        if (head == _cachedTail)
        {
            _cachedTail = Volatile.Read(ref _tail.Value); // Refresh only when empty
            if (head == _cachedTail)
            {
                item = default!;
                return false;
            }
        }

        ref T slot = ref Unsafe.Add(ref MemoryMarshal.GetArrayDataReference(_buffer), (nint)(head & _mask));
        item = slot;
        slot = default!;
        Volatile.Write(ref _head.Value, head + 1); // Publish new head to producer
        return true;
    }
}