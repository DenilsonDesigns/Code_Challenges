using System;
using System.Diagnostics;

class Program
{
    class OrderClass
    {
        public long OrderId;
        public decimal Price;
        public int Quantity;
    }

    static void Main(string[] args)
    {
        int iterations = 10_000_000;
        var sw = new Stopwatch();

        // ==========================================
        // TEST 1: Standard Heap Allocation (new every time)
        // ==========================================
        GC.Collect();
        GC.WaitForPendingFinalizers();
        int initialGcCount = GC.CollectionCount(0);

        Console.WriteLine("--- TEST 1: Standard `new` Allocation ---");
        sw.Start();

        long classSum = 0;
        for (int i = 0; i < iterations; i++)
        {
            var order = new OrderClass { OrderId = i, Price = 100.50m, Quantity = 10 };
            classSum += order.Quantity;
        }

        sw.Stop();
        int finalGcCount = GC.CollectionCount(0) - initialGcCount;

        Console.WriteLine($"Time Taken:     {sw.ElapsedMilliseconds} ms");
        Console.WriteLine($"Gen 0 GC Runs:  {finalGcCount}\n");

        // ==========================================
        // TEST 2: Object Pooling / Reuse Pattern
        // ==========================================
        GC.Collect();
        GC.WaitForPendingFinalizers();
        initialGcCount = GC.CollectionCount(0);

        Console.WriteLine("--- TEST 2: Object Reuse (Zero Allocation) ---");
        sw.Restart();

        long poolSum = 0;
        // Allocate once outside the hot path
        var pooledOrder = new OrderClass();

        for (int i = 0; i < iterations; i++)
        {
            // Mutate the existing instance instead of creating a new one
            pooledOrder.OrderId = i;
            pooledOrder.Price = 100.50m;
            pooledOrder.Quantity = 10;
            poolSum += pooledOrder.Quantity;
        }

        sw.Stop();
        finalGcCount = GC.CollectionCount(0) - initialGcCount;

        Console.WriteLine($"Time Taken:     {sw.ElapsedMilliseconds} ms");
        Console.WriteLine($"Gen 0 GC Runs:  {finalGcCount}");
    }
}