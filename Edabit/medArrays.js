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

// Special Arrays
/**
 *
 * @param {Number[]} arr
 * @returns {Boolean}
 */
function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0 && arr[i] % 2 === 0) {
      return false;
    }
    if (i % 2 === 0 && arr[i] % 2 !== 0) {
      return false;
    }
  }

  return true;
}

// Remove Duplicates from an Array
function removeDups(arr) {
  let r = [];

  for (let i = 0; i < arr.length; i++) {
    if (!r.includes(arr[i])) {
      r.push(arr[i]);
    }
  }

  return r;
}

// Match the Last Item
/**
 *
 * @param {...any} arr
 * @returns {Boolean}
 */
function matchLastItem(arr) {
  let actualLastItem = arr.pop();
  let shouldBeLastItem = "";

  for (let i = 0; i < arr.length; i++) {
    shouldBeLastItem += arr[i] + "";
  }

  return actualLastItem === shouldBeLastItem;
  // *** easier:
  // return arr.pop() === arr.join('');
}

// Capitalize the Names
/**
 *
 * @param {String[]} arr
 * @returns {String[]}
 */
function capMe(arr) {
  return arr.map((word) => {
    return word
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");
  });
}

// H4ck3r Sp34k
/**
 *
 * @param {String} str
 * @return {String}
 */
function hackerSpeak(str) {
  const hackerMap = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5",
  };

  return str
    .split("")
    .map((char) => {
      if (["a", "e", "i", "o", "s"].includes(char)) {
        return hackerMap[char];
      } else {
        return char;
      }
    })
    .join("");
}

// Find Unique Number in Array
function findSingleNumber(numbers) {
  if (numbers.length === 0) return null;

  let freqMap = {};

  for (num of numbers) {
    freqMap[num] ? freqMap[num]++ : (freqMap[num] = 1);
  }

  for (let [k, v] of Object.entries(freqMap)) {
    if (v === 1) return Number(k);
  }
}

// Finding Nemo
function findNemo(sentence) {
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i] === "Nemo") {
      return `I found Nemo at ${i + 1}!`;
    }
  }

  return "I can't find Nemo :(";
}

// Is Johnny Making Progress?
/**
 *
 * @param {Number[]} runs
 * @returns {Number}
 */
function progressDays(runs) {
  let r = 0;

  for (let i = 1; i < runs.length; i++) {
    if (runs[i - 1] < runs[i]) r++;
  }

  return r;
}

// Factor Chain
/**
 *
 * @param {Number[]} arr
 * @returns {Boolean}
 */
function factorChain(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % arr[i - 1] !== 0) return false;
  }

  return true;
}

// Return the Sum of the Two Smallest Numbers
/**
 *
 * @param {Number[]} arr
 * @returns {Number}
 */
function sumTwoSmallestNums(arr) {
  let posNums = arr.filter((num) => num > 0);
  posNums.sort((a, b) => a - b);
  return posNums[0] + posNums[1];
}

// Even Index Elements in Array
/**
 *
 * @param {Number[]} arr
 * @returns {Number}
 */
function evenLast(arr) {
  if (arr.length === 0) return 0;

  let finalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) finalSum += arr[i];
  }

  return finalSum * arr[arr.length - 1];
}

// Number to Reversed Array
/**
 *
 * @param {Number} num
 * @returns {Number[]}
 */
function reverseArr(num) {
  return (num + "")
    .split("")
    .reverse()
    .map((n) => Number(n));
}

// Negative Image
/**
 *
 * @param {Number[Number[]]} image
 * @returns {Number[Number[]]}
 */
function reverseImage(image) {
  let r = [];

  for (let i = 0; i < image.length; i++) {
    let newArr = [];
    for (let j = 0; j < image[i].length; j++) {
      image[i][j] ? newArr.push(0) : newArr.push(1);
    }
    r.push(newArr);
  }
  return r;
  // *** Like this solution with the double map.
  // return image.map(v => v.map(x => +!x));
}

// Return Duplicate Numbers
/**
 *
 * @param {Number[]} nums
 * @returns {Number[]}
 */
function duplicateNums(nums) {
  let numMap = {};
  let rArr = [];

  for (let i = 0; i < nums.length; i++) {
    numMap[nums[i]] ? rArr.push(nums[i]) : (numMap[nums[i]] = true);
  }

  return rArr.length > 0 ? rArr.sort((a, b) => a - b) : null;
}

// Find NaN in an Array
/**
 *
 * @param {Number[]} numbers
 * @returns {Number}
 */
function findNaN(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (Number.isNaN(numbers[i])) return i;
  }

  return -1;
}

// Inclusive Array Ranges
/**
 *
 * @param {Number} startNum
 * @param {Number} endNum
 * @returns {Number[]}
 */
function inclusiveArray(startNum, endNum) {
  // This is the first time in my career I've found a use
  // for a 'do while' loop. I'm quite pleased.
  const r = [];

  do {
    r.push(startNum);
    startNum++;
  } while (startNum <= endNum);
  return r;
}

// Number of Arrays in an Array
/**
 *
 * @param {Array[]} arr
 * @returns {Number}
 */
function numOfSubbarrays(arr) {
  let r = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) r++;
  }
  return r;
}

// Sum of the Items in an Array
/**
 *
 * @param {Number[]} arr
 * @returns {Number}
 */
function sumArray(arr) {
  return arr.flat(Infinity).reduce((acc, el) => acc + el, 0);
}

// Filter Repeating Character Strings
/**
 *
 * @param {String[]} arr
 * @returns {String[]}
 */
function identicalFilter(arr) {
  const rArr = [];

  arr.forEach((el) => {
    if (new Set(el.split("")).size === 1) {
      rArr.push(el);
    }
  });

  return rArr;
}

// Index Multiplier
/**
 *
 * @param {Number[]} arr
 * @returns {Number}
 */
function indexMultiplier(arr) {
  return arr.reduce((acc, el, i) => acc + el * i, 0);
}

// Learn Lodash (2): Compact
// According to the lodash documentation, _.compact creates an array with all falsey values removed.
// The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash.
// You will write a function that receives an array and removes all falsey values.
function compact(arr) {
  return arr.filter((el) => el);
}

// Odd Up, Even Down — N Times
// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

//     Adds two (+2) to each odd integer.
//     Subtracts two (-2) from each even integer.
function evenOddTransform(arr, n) {
  let r = arr;
  for (let i = 0; i < n; i++) {
    r = r.map((el) => (el % 2 === 0 ? el - 2 : el + 2));
  }
  return r;
}

// Find Unique Character Strings
// Create a function that returns only strings with unique characters.
function filterUnique(arr) {
  const r = [];

  arr.forEach((word) => {
    if (new Set(word.split("")).size === word.length) r.push(word);
  });
  return r;
}

// War of Numbers
// There's a great war between the even and odd numbers.
// Many numbers already lost their life in this war and it's your task to end this.
// You have to determine which group sums larger: the even, or the odd.
// The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately,
// then returns the difference between sum of even and odd numbers.
function warOfNumbers(arr) {
  let evens = arr.filter((x) => x % 2 === 0).reduce((acc, el) => acc + el, 0);
  let odds = arr.filter((x) => x % 2 !== 0).reduce((acc, el) => acc + el, 0);
  return Math.max(odds, evens) - Math.min(odds, evens);
}

// Find Unique Positive Numbers from Array
// Write a function that takes an array and returns a
// new array with unique positive (more than 0) numbers.
function uniqueArr(arr) {
  return [...new Set(arr.filter((el) => el > 0))];
}

// Likes vs. Dislikes
// YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.

// There are two other interesting rules to be noted about the interface:

//     Pressing a button, which is already active, will undo your press.
//     If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.

// Create a function that takes an array of button inputs and returns the final state.
function likeOrDislike(arr) {
  let like = false;
  let dislike = false;
  arr.forEach((vote) => {
    if (vote === "Like") {
      like = !like;
      dislike = false;
    } else {
      dislike = !dislike;
      like = false;
    }
  });
  return like ? "Like" : dislike ? "Dislike" : "Nothing";
}
// Positive Count / Negative Sum
// Create a function that takes an array of positive and negative numbers.
// Return an array where the first element is the count of positive numbers
// and the second element is the sum of negative numbers.
function countPosSumNeg(arr) {
  if (arr.length === 0) return [];
  let posCount = arr.filter((el) => el > 0).length;
  let negSum = arr.filter((el) => el <= 0).reduce((acc, el) => acc + el, 0);
  return [posCount, negSum];
}

// // Spin Around, Touch The Ground
// Given a list of directions to spin, "left" or "right",
// return an integer of how many full 360° rotations were made.
// Note that each word in the array counts as a 90° rotation in that direction.
function spinAround(r) {
  let degrees = 0;
  r.forEach((el) => {
    el === "right" ? (degrees += 90) : (degrees -= 90);
  });
  return Math.floor(Math.abs(degrees / 360));
}

// Sum of Found Indexes
// Create a function which takes in an array of numbers and a number to find.
// Return the sum of every index in the array which matches the chosen number.
function sumFoundIndexes(arr, n) {
  return arr.reduce((acc, el, i) => (el === n ? acc + i : acc), 0);
}

// String Match by Two Letters
// Create a function that takes two strings, a and b.
// Return the number of times the two strings contain the same two letters at the same index.
// The two letters must appear at consecutive indices.

// For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3,
// since the "bb", "ii", and "iz" appear at the same place in both strings.
function strMatchBy2char(a, b) {
  let r = 0;
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] === b[i] && a[i + 1] === b[i + 1]) r++;
  }
  return r;
}

// Increment to Top
// Create a function that returns the total number of steps it takes
// to transform each element to the maximal element in the array.
// Each step consists of incrementing a digit by one.
// Time: O(n)
// Space: O(1)
function incrementToTop(arr) {
  let steps = 0;
  let roof = Math.max(...arr);

  arr.forEach((el) => {
    steps += roof - el;
  });

  return steps;
}

// Sum of all Evens in a Matrix
// Create a function that returns the sum of all even elements in a 2D matrix.
function sumOfEvens(arr) {
  return arr.reduce((acc, el) => {
    const sum = el
      .filter((el) => el % 2 === 0)
      .reduce((acc2, el2) => {
        return acc2 + el2;
      }, 0);
    return acc + sum;
  }, 0);
}

// No Hidden Fees
// Given an array of prices prices and a "supposed" total t, return
// true if there is a hidden fee added to the total
// (i.e. the total is greater than the sum of prices), otherwise return false.
// Time: O(n)
function hasHiddenFee(prices, t) {
  let sum = prices.reduce((acc, el) => Number(el.split("$")[1]) + acc, 0);
  return Number(t.split("$")[1]) > sum;
}

// Chocolate Dilemma
// Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].
// Write a function that returns true if the total area of chocolate is the same for each sister.
function testFairness(agatha, bertha) {
  let agSum = agatha.reduce((acc, el) => el[0] * el[1] + acc, 0);
  let berSum = bertha.reduce((acc, el) => el[0] * el[1] + acc, 0);
  return agSum === berSum;
}

console.log(
  //*********************
  testFairness(
    [
      [1, 5], // 5
      [6, 3], // 18
      [1, 1], // 1
    ],
    [
      [7, 1],
      [2, 2],
      [1, 1],
    ]
  )
  // ********************
);
