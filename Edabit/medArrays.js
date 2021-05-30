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

console.log(
  //*********************
  duplicateNums([1, 2, 6, 2, 6, 1])
  // **********************
);
