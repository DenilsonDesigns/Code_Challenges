This project shows an example of how much performance can improve by reusing an class object, instead of creating a new one
in each iteration of a large loop.

By doing this, we remove the need to have GC run, and we see a significant performance boost.

```
--- TEST 1: Standard `new` Allocation ---
Time Taken:     129 ms
Gen 0 GC Runs:  57

--- TEST 2: Object Reuse (Zero Allocation) ---
Time Taken:     65 ms
Gen 0 GC Runs:  0
```
