// 2634. Filter Elements from Array
var filter = function (arr, fn) {
  const r = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (fn(element, i)) r.push(element);
  }

  return r;
};

// 2620. Counter
var createCounter = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};

// 2626. Array Reduce Transformation
var reduce = function (nums, fn, init) {
  let r = init;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    r = fn(r, element);
  }

  return r;
};

// 2621. Sleep
async function sleep(millis) {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res();
    }, millis)
  );
}

// 2665. Counter II
var createCounter = function (init) {
  let val = init;

  return {
    increment: () => {
      return ++val;
    },
    decrement: () => {
      return --val;
    },
    reset: () => {
      return (val = init);
    },
  };
};

// 2666. Allow One Function Call
var once = function (fn) {
  let calls = 0;
  return function (...args) {
    if (calls) return undefined;
    calls++;
    return fn(...args);
  };
};

console.log(
  // ***
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  )
  // ***
);
