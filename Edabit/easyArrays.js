// Numbers to Objects
/**
 * @param {Number[]} arr
 * @returns {Object[]} array of objects with k, v: num, letter
 */
function numObj(arr) {
  let r = [];

  for (let i = 0; i < arr.length; i++) {
    let obj = {};
    obj[arr[i]] = String.fromCharCode(arr[i]);
    r.push(obj);
  }

  return r;
}

// Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array
// According to the lodash documentation,
// _.dropRight Creates a slice of an array
// with n elements dropped from the end.

// This challenge requires you to write your own version
// of this function without using lodash so that you can
// better understand it works.
/**
 *
 * @param {Number[]} arr
 * @param {Number} num
 * @returns {Number[]} array of remainder of arr after num elements dropped
 */
function dropRight(arr, num = 1) {
  for (let i = 0; i < num; i++) {
    arr.pop();
  }

  return arr;
}

// Sum of Resistance in Parallel Circuits
// If two or more resistors are connected in parallel,
// the overall resistance of the circuit reduces.
// It is possible to calculate the total resistance of
// a parallel circuit by using this formula:
/**
 *
 * @param {Number[]} arr
 * @returns {Number}
 */
function parallelResistance(arr) {
  sum = 0;
  for (const element of arr) {
    sum += 1 / element;
  }
  result = 1 / sum;
  result = +result.toFixed(1);
  return result;
}

console.log(parallelResistance([1, 2, 3], 5));
