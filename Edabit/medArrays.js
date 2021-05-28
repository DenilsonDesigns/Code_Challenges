// How Much is True?
/**
 *
 * @param {Boolean[]} arr
 * @returns {Number} nuber of true elements
 */
function countTrue(arr) {
  return arr.filter((el) => el).length;
}

// Array of Multiples
/**
 *
 * @param {Number} num
 * @param {Number} length
 * @returns {Number[]} array of nums
 */
function arrayOfMultiples(num, length) {
  let r = [];
  for (let i = 1; i < length + 1; i++) {
    r.push(num * i);
  }

  return r;
}

// Concatenate Variable Number of Input Arrays
/**
 *
 * @param  {...any} args
 * @returns {Number[]} array of numbers
 */
function concat(...args) {
  return [...args].flat();
}

// Converting Objects to Arrays
/**
 *
 * @param {*} obj
 * @returns {Array[]}
 */
function toArray(obj) {
  let r = [];
  for (const [key, value] of Object.entries(obj)) {
    r.push([key, value]);
  }

  return r;
}

// Convenience Store
/**
 *
 * @param {*} change
 * @param {*} amountDue
 * @returns {Boolean}
 */
function changeEnough(change, amountDue) {
  // 	quarter: 25 cents / $0.25
  // dime: 10 cents / $0.10
  // nickel: 5 cents / $0.05
  // penny: 1 cent / $0.01
  let currMap = {
    0: 0.25,
    1: 0.1,
    2: 0.05,
    3: 0.01,
  };

  // just loop through from quarter -> penny to see if we can get to nada.

  for (let coinType in change) {
    console.log(coinType);
    for (let curr = change[coinType]; curr > 0; curr--) {
      //   console.log(curr);
      if (amountDue > currMap[coinType] && amountDue - currMap[coinType] > 0)
        amountDue -= currMap[coinType];
      console.log(amountDue);
    }
  }

  return amountDue < 0.1 ? true : false;
}

// Find the Second Largest Number
/**
 *
 * @param {Number[]} arr
 * @returns {Number}
 */
function secondLargest(arr) {
  return arr.sort((a, b) => b - a)[1];
}

// Check if All Values Are True
/**
 *
 * @param  {...any} args
 */
function allTruthy(...args) {
  return args.flat(Infinity).every((el) => el);
}

// Instant JAZZ
/**
 *
 * @param {String[]} arr
 */
function jazzify(arr) {
  return arr.map((el) => {
    return el[el.length - 1] === "7" ? el : el + "7";
  });
}

// Hitting the Jackpot
/**
 *
 * @param {String[]} result
 * @return {Boolean}
 */
function testJackpot(result) {
  let asSet = new Set(result);
  return asSet.size === 1;
}

// Trace That Matrix
/**
 *
 * @param {Array[]} arr
 * @return {Number}
 */
function trace(arr) {
  // Naive solution is O(n^2)
  // -> i.e., nested for loops and to incrementors.
  // Below solution is O(n), we can safely do this as:
  // -> arr.length === arr[i].length
  // Space: O(1)
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }

  return sum;
}

// Total Volume of All Boxes
/**
 *
 * @param {...any} boxes
 * @return
 */
function totalVolume(...boxes) {
  return boxes.reduce((boxAcc, boxEl) => {
    return boxEl.reduce((acc, el) => (acc *= el), 1) + boxAcc;
  }, 0);
}

console.log(
  //
  totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])
); // 2
