using System;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        int iterations = 10_000_000;
        var sw = new Stopwatch();

        // ==========================================
        // RUN 1: Unsafe (Race Condition)
        // ==========================================
        int unsafeCounter = 0;
        Console.WriteLine("--- RUN 1: Unsafe Increments ---");
        sw.Start();

        var task1 = Task.Run(() => {
            for (int i = 0; i < iterations; i++) {
                unsafeCounter++;
            }
        });

        var task2 = Task.Run(() => {
            for (int i = 0; i < iterations; i++) {
                unsafeCounter++;
            }
        });

        await Task.WhenAll(task1, task2);
        sw.Stop();

        long expected = (long)iterations * 2;
        Console.WriteLine($"Actual Value:   {unsafeCounter:N0} (Expected: {expected:N0})");
        Console.WriteLine($"Lost Updates:   {expected - unsafeCounter:N0}");
        Console.WriteLine($"Time Taken:     {sw.ElapsedMilliseconds} ms\n");

        // ==========================================
        // RUN 2: Safe (Interlocked / Atomic)
        // ==========================================
        int safeCounter = 0;
        Console.WriteLine("--- RUN 2: Safe Increments (Interlocked) ---");
        sw.Restart();

        var task3 = Task.Run(() => {
            for (int i = 0; i < iterations; i++) {
                Interlocked.Increment(ref safeCounter);
            }
        });

        var task4 = Task.Run(() => {
            for (int i = 0; i < iterations; i++) {
                Interlocked.Increment(ref safeCounter);
            }
        });

        await Task.WhenAll(task3, task4);
        sw.Stop();

        Console.WriteLine($"Actual Value:   {safeCounter:N0} (Expected: {expected:N0})");
        Console.WriteLine($"Lost Updates:   0");
        Console.WriteLine($"Time Taken:     {sw.ElapsedMilliseconds} ms");
    }
}