This project shows an example of how much latency is introduced in multi-threadded operations if both threads are
attempting to write to a value in the same L1 cache line.

In UnpaddedSharedState, the 2 int's will be less than 64 bytes (4 bytes each in C# (32 bits)), and be stored together in the same L1 cache line
in the Cores RAM. Two different cores trying to update two different variables in the same L1 cache line will constantly invalidate the other's L1 cache, meaning it needs to re-fetch those values from global RAM.

This introduces a large amount of latency.

In the second run using PaddedSharedState, the two variables are padded out so they will not exist in the same
64 byte cache line.

An example run of this project shows the large difference in performance:

```
Running False Sharing Benchmark...

Unpadded Time: 7629 ms (Cache line bouncing)
Padded Time:   644 ms (Zero contention)
```
