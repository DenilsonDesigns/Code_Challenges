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
// 2695. Array Wrapper
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((acc, el) => acc + el, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.join(", ")}]`;
};

// 2715. Timeout Cancellation
var cancellable = function (fn, args, t) {
  let timeOutId = setTimeout(() => {
    fn(args);
  }, t);

  return function () {
    return clearTimeout(timeOutId);
  };
};

// 2635. Apply Transform Over Each Element in Array
var map = function (arr, fn) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = fn(arr[i], i);
    newArr.push(element);
  }

  return newArr;
};

class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.value += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.value -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.value *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    this.value /= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.value **= value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.value;
  }
}

// 2677. Chunk Array
var chunk = function (arr, size) {
  const r = [];

  for (let i = 0; i < arr.length; i += size) {
    r.push(arr.slice(i, size + i));
  }

  return r;
};

// 2727. Is Object Empty
var isEmpty = function (obj) {
  if (obj instanceof Array) {
    return obj.length === 0;
  }
  if (obj instanceof Object) {
    return Object.keys(obj).length === 0;
  }
};

// 2619. Array Prototype Last
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }

  return this[this.length - 1];
};

console.log(
  // ***
  ["asdf", "asdffff"].last()
  // ***
);
