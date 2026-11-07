using System.Diagnostics;
using System.Runtime.InteropServices;

class Program
{
    private const int Iterations = 500_000_000;

    static async Task Main(string[] args)
    {
        Console.WriteLine("Running False Sharing Benchmark...\n");

        // 1. Test Unpadded (Contention)
        var unpadded = new UnpaddedSharedState();
        var sw = Stopwatch.StartNew();
        
        var t1 = Task.Run(() => {
            for (int i = 0; i < Iterations; i++) unpadded.Value1++;
        });
        var t2 = Task.Run(() => {
            for (int i = 0; i < Iterations; i++) unpadded.Value2++;
        });
        
        await Task.WhenAll(t1, t2);
        sw.Stop();
        Console.WriteLine($"Unpadded Time: {sw.ElapsedMilliseconds} ms (Cache line bouncing)");

        // 2. Test Padded (Isolated cache lines)
        var padded = new PaddedSharedState();
        sw.Restart();

        t1 = Task.Run(() => {
            for (int i = 0; i < Iterations; i++) padded.Value1++;
        });
        t2 = Task.Run(() => {
            for (int i = 0; i < Iterations; i++) padded.Value2++;
        });

        await Task.WhenAll(t1, t2);
        sw.Stop();
        Console.WriteLine($"Padded Time:   {sw.ElapsedMilliseconds} ms (Zero contention)");
    }
}

// Unpadded: Value1 (offset 8) and Value2 (offset 16) share the same 64-byte L1 cache line
public class UnpaddedSharedState
{
    public volatile int Value1;
    public volatile int Value2;
}

// Padded: Explicit layout forces Value2 onto a separate 64-byte cache line
[StructLayout(LayoutKind.Explicit, Size = 128)]
public class PaddedSharedState
{
    [FieldOffset(0)]
    public volatile int Value1;

    // 56 bytes of padding space between offset 8 and offset 64
    [FieldOffset(64)]
    public volatile int Value2;
}