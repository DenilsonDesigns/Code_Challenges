using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;

public class Program
{
    public static async Task Main(string[] args)
    {
        const int totalItemsToSend = 20_000_000; // Reduced slightly for faster feedback loop

        // Force a full garbage collection and compaction before starting to ensure a clean baseline
        GC.Collect(2, GCCollectionMode.Aggressive, true, true);
        GC.WaitForPendingFinalizers();

        // ==========================================
        // 1. SPSC Ring Buffer Benchmark
        // ==========================================
        Console.WriteLine("=== 1. SPSC Ring Buffer Benchmark ===");
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
            while (localReceived < totalItemsToSend)
            {
                if (ringBuffer.TryRead(out _))
                {
                    localReceived++;
                }
                else
                {
                    Thread.SpinWait(1);
                }
            }
        });

        await Task.WhenAll(ringProducer, ringConsumer);
        ringStopwatch.Stop();

        long ringBytesAllocated = GC.GetTotalAllocatedBytes(true) - startBytesAllocated;
        long ringGen0 = GC.CollectionCount(0) - startGen0;
        long ringGen1 = GC.CollectionCount(1) - startGen1;
        long ringGen2 = GC.CollectionCount(2) - startGen2;

        Console.WriteLine($"SPSC Ring Buffer Throughput: {totalItemsToSend / ringStopwatch.Elapsed.TotalSeconds:N0} ops/sec.");
        Console.WriteLine($"Allocated Bytes: {ringBytesAllocated:N0} bytes");
        Console.WriteLine($"GC Collections -> Gen 0: {ringGen0}, Gen 1: {ringGen1}, Gen 2: {ringGen2}\n");

        // Clean slate again
        GC.Collect(2, GCCollectionMode.Aggressive, true, true);
        GC.WaitForPendingFinalizers();

        // ==========================================
        // 2. Locked Standard Queue Benchmark
        // ==========================================
        Console.WriteLine("=== 2. Locked Queue<T> Benchmark ===");
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
            while (localReceivedCount < totalItemsToSend)
            {
                bool success = false;
                lock (lockObj)
                {
                    if (standardQueue.Count > 0)
                    {
                        standardQueue.Dequeue();
                        success = true;
                    }
                }

                if (success)
                {
                    localReceivedCount++;
                }
                else
                {
                    Thread.SpinWait(1);
                }
            }
        });

        await Task.WhenAll(queueProducer, queueConsumer);
        queueStopwatch.Stop();

        long queueBytesAllocated = GC.GetTotalAllocatedBytes(true) - startBytesAllocated;
        long queueGen0 = GC.CollectionCount(0) - startGen0;
        long queueGen1 = GC.CollectionCount(1) - startGen1;
        long queueGen2 = GC.CollectionCount(2) - startGen2;

        Console.WriteLine($"Locked Queue<T> Throughput: {totalItemsToSend / queueStopwatch.Elapsed.TotalSeconds:N0} ops/sec.");
        Console.WriteLine($"Allocated Bytes: {queueBytesAllocated:N0} bytes");
        Console.WriteLine($"GC Collections -> Gen 0: {queueGen0}, Gen 1: {queueGen1}, Gen 2: {queueGen2}");
    }
}

public sealed class SpscRingBuffer<T>
{
    private readonly T[] _buffer;
    private readonly int _mask;
    private long _head;
    private long _tail;

    public SpscRingBuffer(int capacity)
    {
        if ((capacity & (capacity - 1)) != 0)
            throw new ArgumentException("Capacity must be a power of 2.");

        _buffer = new T[capacity];
        _mask = capacity - 1;
    }

    public bool TryWrite(T item)
    {
        long tail = Volatile.Read(ref _tail);
        long head = Volatile.Read(ref _head);

        if (tail - head >= _buffer.Length) return false;

        _buffer[tail & _mask] = item;
        Volatile.Write(ref _tail, tail + 1);
        return true;
    }

    public bool TryRead(out T item)
    {
        long head = Volatile.Read(ref _head);
        long tail = Volatile.Read(ref _tail);

        if (head == tail)
        {
            item = default!;
            return false;
        }

        item = _buffer[head & _mask];
        _buffer[head & _mask] = default!;
        Volatile.Write(ref _head, head + 1);
        return true;
    }
}