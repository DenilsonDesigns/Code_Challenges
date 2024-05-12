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
