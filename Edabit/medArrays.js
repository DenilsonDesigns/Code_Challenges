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

// Count Letters in a Word Search
// Create a function that counts the number
// of times a particular letter shows up in the word search.
function letterCounter(arr, letter) {
  // Works, but may be cleaner to use .reduce
  // as we want to return a single number.
  // let count = 0;
  // arr.forEach((innerArr) => {
  //   count += innerArr.filter((char) => char === letter).length;
  // });
  // return count;
  // ***
  return arr.reduce((acc, el) => {
    return el.filter((char) => char === letter).length + acc;
  }, 0);
}

// Return an Array of Subarrays
// Write a function that takes three arguments (x, y, z) and returns an array containing
// x subarrays (e.g. [[], [], []]), each containing y number of item z.

//     x Number of subarrays contained within the main array.
//     y Number of items contained within each subarray.
//     z Item contained within each subarray.
function matrix(x, y, z) {
  return Array(x)
    .fill(z)
    .map(() => Array(y).fill(z));
  // cooler:
  // return Array(x).fill(Array(y).fill(z));
}

// Number of Two or More Consecutive Ones
// Create a function that counts the number of blocks of two or more adjacent 1s in an array.
function countOnes(arr) {
  return arr
    .join("")
    .split("0")
    .filter((ones) => ones.length > 1).length;
}

// Which Number Is Not like the Others?
// Create a function that takes an array of numbers and return the number that's unique.
function unique(arr) {
  // Time: O(n)
  // Space: O(n)
  let rMap = {};

  arr.forEach((num) => {
    rMap[num] ? rMap[num]++ : (rMap[num] = 1);
  });

  for ([k, v] of Object.entries(rMap)) {
    if (v === 1) return Number(k);
  }
}

function nextInLine(arr, num) {
  if (arr.length === 0 || typeof arr === "number") {
    return "No array has been selected";
  }
  arr.shift();
  arr.push(num);
  return arr;
  // Cleaner:
  // arr.slice(1).concat(num)
}

// Flatten the Curve
// Given an array of integers, replace every number with the mean of all numbers.
function flattenCurve(arr) {
  const mean = arr.reduce((sum, n) => sum + n, 0) / arr.length;
  return arr.fill(Math.round(mean * 10, 1) / 10);
}

// Is There an Upward Trend?
// Create a function that determines if there is an upward trend.
function upwardTrend(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Strings not permitted!";
    }
    if (arr[i] <= arr[i - 1]) return false;
  }
  return true;
}

// Scalable Mountain?
// Given an array of numbers, representing the height of a mountain in certain intervals,
// return whether this mountain is scalable.

// A mountain can be considered scalable if each number is within 5 units
// of the next number in either direction.
function isScalable(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    let leftDiff = Math.max(arr[i - 1], arr[i]) - Math.min(arr[i - 1], arr[i]);
    let rightDiff = Math.max(arr[i + 1], arr[i]) - Math.min(arr[i + 1], arr[i]);
    if (leftDiff > 5 || rightDiff > 5) return false;
  }

  return true;
}

// Tidy Title and Author Strings
// You have an array of strings, each consisting of a book title and an author's name.
function tidyBooks(arr) {
  const rBooks = [];
  arr.forEach((book) => {
    let parts = book.split("-");
    rBooks.push([parts[0].trim(), parts[1].trim()]);
  });
  return rBooks;
}

// Sum of Odd and Even Numbers
// Write a function that takes an array of numbers and returns an array with two elements:

//     The first element should be the sum of all even numbers in the array.
//     The second element should be the sum of all odd numbers in the array.
function sumOddAndEven(arr) {
  let evenSum = arr
    .filter((el) => el % 2 === 0)
    .reduce((acc, el) => acc + el, 0);
  let oddSum = arr
    .filter((el) => el % 2 !== 0)
    .reduce((acc, el) => acc + el, 0);
  return [evenSum, oddSum];
}

// All Numbers in Array Are Prime
// Create a function thats takes an array of integers and returns true if every number is prime.
// Otherwise, return false.
function allPrime(nums) {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  return nums.every((num) => isPrime(num));
}

// Removing Enemies
// Remove enemies from the array of people, even if the enemy shows up twice.
function removeEnemies(names, enemies) {
  return names.filter((name) => !enemies.includes(name));
}

// Integer Digits Count
// Create a function that counts the integer's number of digits.
function countNumLength(n) {
  return (Math.abs(n) + "").length;
}

// Accumulating Product
// Create a function that takes an array and returns an array of the accumulating product.
function accumulatingProduct(arr) {
  // Time: O(n^2)
  const r = [];

  arr.forEach((_, i) => {
    let currArr = arr.slice(0, i + 1);
    r.push(currArr.reduce((acc, el) => acc * el, 1));
  });

  return r;
}

// N-Sized Parts
// Create a function that divides a string into parts of size n.
function partition(str, n) {
  const r = [];

  let upper = str.length;
  let curr = 0;

  while (upper > curr) {
    r.push(str.slice(curr, curr + n));
    curr += n;
  }
  return r;
}

// Mini Peaks
// Write a function that returns all the elements in an
// array that are strictly greater than their adjacent
// left and right neighbors.
function miniPeaks(arr) {
  // Time: O(n)
  // Space: O(n)
  const r = [];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) r.push(arr[i]);
  }

  return r;
}

// Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a
// number n. Return true if the sum of any two elements is equal
// to the given number. Otherwise, return false.
function checkSum(arr, n) {
  // Time: O(n)
  // Space: O(n)
  let numMap = {};

  for (let i = 0; i < arr.length; i++) {
    if (numMap[n - arr[i]]) return true;
    numMap[arr[i]] = true;
  }

  return false;
}

// Check if One Array is a Subset of Another
// Array A is contained inside array B if each element in A also exists in B.

// The number of times a number is present doesn't matter.
// In other words, if we transformed both arrays into sets, A would be a subset of B.
function subset(arr1, arr2) {
  // Time: O(n+m) => Where n = num of els in arr2 and m = num of els in arr1
  // Space: O(n) => Where n = num of els in arr2
  let arr2Map = {};
  arr2.forEach((el) => {
    arr2Map[el] = true;
  });

  return arr1.every((num) => arr2Map[num]);
}

// Simon Says
// Create a function that takes in two arrays and
// returns true if the second array follows the first array by one element,
// and false otherwise. In other words,
// determine if the second array is the first array shifted to the right by 1.
function simonSays(arr1, arr2) {
  // Time: O(n)
  for (let i = 1; i < arr2.length; i++) {
    if (arr1[i - 1] !== arr2[i]) return false;
  }

  return true;
}

// Moving to the End
// Write a function that moves all elements of one type to the end of the array.
function moveToEnd(arr, el) {
  // Time: O(2n) => O(n)
  // const newArr = [];
  // let adders = 0;

  // arr.forEach((ell) => {
  //   if (ell === el) adders++;
  //   else newArr.push(ell);
  // });

  // for (let i = 0; i < adders; i++) {
  //   newArr.push(el);
  // }
  // return newArr;
  // *** way cooler:
  return arr.sort((a) => (a === el ? 1 : -1));
}

// Superheroes
// Create a function that takes an array of superheroes /
// superheroines names and returns an array of only superheroe names ending in "man".
// Return the names in alphabetical order.
function superheroes(heroes) {
  const r = [];

  heroes.forEach((heroe) => {
    if (
      heroe.toLowerCase().indexOf("woman") < 1 &&
      heroe.toLowerCase().indexOf("man") > -1
    ) {
      r.push(heroe);
    }
  });

  return r.sort((a, b) => a.localeCompare(b));
}

// Sum of Every Nth Number
// Given an array of numbers and a positive value for n,
// return the sum of every nth number in the array.
function sumEveryNth(numbers, n) {
  let rSum = 0;

  for (let i = n - 1; i < numbers.length; i += n) {
    rSum += numbers[i];
  }
  return rSum;
}

// Sales by Match
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.
// For example, there are 7 socks with colors [1, 2, 1, 2, 1, 3, 2].
// There is one pair of color 1 and one of color 2. There are three odd socks left,
// one of each color. The number of pairs is 2.

// Create a function that returns an integer representing the number of
// matching pairs of socks that are available.
function sockMerchant(arr) {
  let sockMap = {};
  let pairs = 0;

  arr.forEach((sock) => {
    if (sockMap[sock]) {
      pairs++;
      sockMap[sock] = false;
    } else {
      sockMap[sock] = true;
    }
  });
  return pairs;
}

// Largest Gap
// Given an array of integers, return the largest gap between elements
// of the sorted version of that array.
function largestGap(arr) {
  arr.sort((a, b) => a - b);

  let largest = 0;

  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];
    if (diff > largest) largest = diff;
  }

  return largest;
}

// Sort By Index of Character
// Write a function that sorts an array of characters alphabetically
// in ascending order (a-z) by the character at the n-th character.
function sortByCharacter(arr, n) {
  return arr.sort((a, b) => a.charCodeAt(n - 1) - b.charCodeAt(n - 1));
}

// Perfect Square Patch
// Create a function that takes an integer and outputs an n x n square solely
// consisting of the integer n.
function squarePatch(n) {
  let row = new Array(n).fill(n);
  return new Array(n).fill(row);
}

// Letters Shared between Two Words
// Create a function that returns the number of characters shared between two words.
function sharedLetters(str1, str2) {
  let str2Map = {};
  let shared = 0;

  for (let i = 0; i < str2.length; i++) {
    str2Map[str2[i]] ? (str2Map[str2[i]] += 1) : (str2Map[str2[i]] = 1);
  }

  for (let i = 0; i < str1.length; i++) {
    if (str2Map[str1[i]]) {
      shared++;
      str2Map[str1[i]]--;
    }
  }
  return shared;
}

// Count the Towers
// Create a function that counts the number of towers.
function countTowers(towers) {
  return towers[towers.length - 1][0].split(" ").filter((el) => el === "##")
    .length;
}

// @TODO:
// Potential Friend?
// Given two arrays of two people's different interests,
// return whether both people have at least two things in common or have exact interests.
// Return true if there's a potential friend!
function isPotentialFriend(set1, set2) {
  if (checkExact(set1, set2)) return true;

  let sharedInts = 0;
  set1.forEach((int) => {
    if (set2.includes(int)) sharedInts++;
  });

  if (sharedInts > 2) return true;

  return false;

  function checkExact(set1, set2) {
    return set1.sort().join("") === set2.sort().join("");
  }
}

// Numbered Cards
// You have a pack of 5 randomly numbered cards, which can range from 0-9.
// You can win if you can produce a higher two-digit number from
// your cards than your opponent. Return true if your cards win that round.
function winRound(you, opp) {
  let youHigh = you
    .sort((a, b) => b - a)
    .slice(0, 2)
    .join("");
  let oppHigh = opp
    .sort((a, b) => b - a)
    .slice(0, 2)
    .join("");
  return youHigh > oppHigh;
}

// Balancing Scales
// Given an array with an odd number of elements,
// return whether the scale will tip "left" or "right" based on the sum of the numbers.
// The scale will tip on the direction of the largest total.
// If both sides are equal, return "balanced".
function scaleTip(arr) {
  let total = 0;
  let middle = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    if (i === middle) continue;
    if (i < middle) total += arr[i];
    else total -= arr[i];
  }

  return total > 0 ? "left" : total < 0 ? "right" : "balanced";
}

console.log(
  //*********************
  scaleTip([0, 0, 0, "I", 1, 1, 1])
  // ********************
);
