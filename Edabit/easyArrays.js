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

// Omnipresent Value
// A value is omnipresent if it exists in every subarray inside the main array.
function isOmnipresent(arr, val) {
  return arr.filter((el) => el.includes(val)).length === arr.length;
}

// Summing a Slice
// Given an array and an integer n, return the sum of the first n numbers in the array.
function sliceSum(arr, n) {
  return [...arr.slice(0, n)].reduce((acc, el) => acc + el, 0);
}

// Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.
function countOnes(matrix) {
  return matrix.flat().reduce((acc, el) => (el === 1 ? (acc += 1) : acc), 0);
}

// Array Operation
// Create a function that takes three parameters where:

//     x is the start of the range (inclusive).
//     y is the end of the range (inclusive).
//     n is the divisor to be checked against.

// Return an ordered array with numbers in the range that are divisible by the third parameter n.
// Return an empty array if there are no numbers that are divisible by n.
function arrayOperation(x, y, n) {
  const r = [];
  for (let i = x; i <= y; i++) {
    if (i % n === 0) r.push(i);
  }
  return r;
}

function isSubset(arr1, arr2) {
  return arr1.every((el) => arr2.includes(el));
}

// First and Last Index
// Given a word, write a function that returns the first index and the last index of a character.
function charIndex(word, char) {
  let r = [null, null];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      r[0] === null ? ((r[0] = i), (r[1] = i)) : (r[1] = i);
    }
  }
  return r[0] === null ? undefined : r;
}

// Spelling it Out
// Create a function which takes in a word and spells it out,
// by consecutively adding letters until the full word is completed.
function spelling(str) {
  const r = [];
  for (let i = 1; i <= str.length; i++) {
    r.push(str.slice(0, i));
  }
  return r;
}

// Chat Room Status
function chatroomStatus(users) {
  if (users.length === 0) {
    return "no one online";
  } else if (users.length === 1) {
    return `${users[0]} online`;
  } else if (users.length === 2) {
    return `${users[0]} and ${users[1]} online`;
  } else if (users.length > 2) {
    return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
  }
}

// Snail Race
// Steve and Maurice have racing snails. They each have three, a slow s,
// medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's,
// Maurice has a trick up his sleeve.
function mauriceWins(mSnails, sSnails) {
  let wins = 0;
  if (mSnails[0] > sSnails[2]) wins++;
  if (mSnails[1] > sSnails[0]) wins++;
  if (mSnails[2] > sSnails[1]) wins++;
  return wins >= 2;
}

// Record Temperatures
// You are given two arrays that each contain data that represents the min
// and max weather temperatures for each day of the week.

// The records array contains the all-time record low/high temperatures for that day of the week.
function recordTemps(records, currentWeek) {
  const r = [];

  for (let i = 0; i < currentWeek.length; i++) {
    let curr = [records[i][0], records[i][1]];
    if (currentWeek[i][0] < curr[0]) curr[0] = currentWeek[i][0];
    if (currentWeek[i][1] > curr[1]) curr[1] = currentWeek[i][1];
    r.push(curr);
  }
  return r;
}

console.log(
  //
  recordTemps(
    [
      [34, 82],
      [24, 82],
      [20, 89],
      [5, 88],
      [9, 88],
      [26, 89],
      [27, 83],
    ],
    [
      [44, 72],
      [19, 70],
      [40, 69],
      [39, 68],
      [33, 64],
      [36, 70],
      [38, 69],
    ]
  )
  //
);
