This project shows how multiple threads mutating the same variable can "lose" operations in a race condition to write a variable. Shown here in a simple for loop increment.

In Run 1, there is no lock applied to the increment of the counter, Task1 and Task2 would be assigned different threads and therefore different cores. As they both try to read/modify/write the same variable in memory, that operation is not inherently atomic in the .Net runtime, meaning both could read the incremented variable as the exact time, create a modify operation (to add 1 to the existing number) and send the updated value to be stored in memory.

In Run 1 we see basically half of the operations where "lost" in this way.

In Run 2, we used Interlocked.Increment to increment the variable, meaning that variable will be locked from being modified by other processes until it has finished (making it atomic). And we therefore had 0 "lost" operations in Run 2.

However you can see from the Time Taken field in Run 2, this comes with a performance penalty.

```
--- RUN 1: Unsafe Increments ---
Actual Value:   10,630,794 (Expected: 20,000,000)
Lost Updates:   9,369,206
Time Taken:     106 ms

--- RUN 2: Safe Increments (Interlocked) ---
Actual Value:   20,000,000 (Expected: 20,000,000)
Lost Updates:   0
Time Taken:     416 ms
```
