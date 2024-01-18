// Seven Boom!
/**
 *
 * @param {Number[]} arr
 * @returns {String}
 */
function sevenBoom(arr) {
  for (num of arr) {
    if ((num + "").split("").includes("7")) return "Boom!";
  }

  return "there is no 7 in the array";
}

// Number of Boomerangs
/**
 *
 * @param {} arr
 * @returns
 */
function countBoomerangs(arr) {
  let boomers = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) boomers++;
  }
  return boomers;
}

// Longest Word in a 7 Segment Display
/**
 *
 * @param {String[]} arr
 * @return {String}
 */
function longest7SegmentWord(arr) {
  const noDice = ["k", "m", "v", "w", "x"];

  let longestWord = "";

  for (const word of arr) {
    let acceptable = true;
    for (const letter of word) {
      if (noDice.includes(letter)) acceptable = false;
    }
    if (word.length > longestWord.length && acceptable) longestWord = word;
  }

  return longestWord;
}

// Numbers in Strings
/**
 *
 * @param {String[]} arr
 * @returns {String[]}
 */
function numInStr(arr) {
  const r = new Set();

  for (const str of arr) {
    for (const letter of str) {
      if (Number(letter)) {
        r.add(str);
      }
    }
  }

  return [...r];
}

// Who Left the Array?
// You are given two arrays. The elements in arr1 threw a party and started to mix around.
// However, one of the elements got lost! Your task is to return the element which was lost.
function missing(arr1, arr2) {
  // Time: O(n)
  // Space: O(1)

  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) return arr1[i];
  }

  return arr1[arr1.length - 1];
}

// Pluralize!
// Given a list of words in the singular form,
// return a set of those words in the plural form if they appear more than once in the list.
function pluralize(arr) {
  // Time: O(2n) => O(n)
  // Space: O(n)
  let wordMap = {};

  arr.forEach((word) => {
    wordMap[word] ? wordMap[word]++ : (wordMap[word] = 1);
  });

  const r = [];

  for (let [k, v] of Object.entries(wordMap)) {
    v > 1 ? r.push(k + "s") : r.push(k);
  }

  return r;
}

// Finding Common Elements
// Create a function that takes two "sorted" arrays of
// numbers and returns an array of numbers which are common to both the input arrays.
function commonElements(arr1, arr2) {
  const commEls = [];

  let numMap = {};

  for (let i = 0; i < arr1.length; i++) {
    numMap[arr1[i]] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (numMap[arr2[i]]) commEls.push(arr2[i]);
  }

  return commEls;
}

// Scoring a Field Goal
// In (American) Football, a team can score if they manage to kick
// a ball through the goal (i.e. above the crossbar and between the uprights).

// Create a function that returns true if the ball 0 goes through the goal.
// You will be given an array of arrays.
function isGoalScored(goal) {
  for (let i = 0; i < goal.length; i++) {
    let row = goal[i][0].replace(/ /g, "");
    if (row === "#0#") return true;
  }

  return false;
}

// Larger than All Numbers to Their Right
function largerThanRight(arr) {
  const r = [];

  let currHighest = 0;

  r.push(arr[arr.length - 1]);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > arr[i + 1] && arr[i] > currHighest) r.unshift(arr[i]);
    if (arr[i] > currHighest) currHighest = arr[i];
  }

  return r;
}

// Positive Dominant
// An array is positive dominant if it contains strictly more unique positive
// values than unique negative values.
// Write a function that returns true if an array is positive dominant.
function isPositiveDominant(a) {
  let posDom = 0;

  let newSet = new Set(a);
  newSet.forEach((el) => {
    el > 0 ? posDom++ : el < 0 ? posDom-- : (posDom = posDom);
  });
  return posDom > 0;
}

// Broken Keyboard
// Given what is supposed to be typed and what is actually typed,
// write a function that returns the broken key(s). The function looks like:
function findBrokenKeys(str1, str2) {
  const rArr = [];

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) rArr.push(str1[i]);
  }

  return Array.from(new Set(rArr));
}

// Concatenate to Form Target Array
// Create a function that returns true if smaller arrays can
// concatenate to form the target array and false otherwise.
function canConcatenate(arr, target) {
  let arr1 = arr.flat().sort((a, b) => a - b);
  let arr2 = target.sort((a, b) => a - b);
  if (arr2.length !== arr1.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// Rock, Paper, Scissors!
// Abigail and Benson are playing Rock, Paper, Scissors.

// Each game is represented by an array of length 2, where
// the first element represents what Abigail played and the second
// element represents what Benson played.

// Given a sequence of games, determine who wins the most number of matches.
// If they tie, output "Tie".

//     R stands for Rock
//     P stands for Paper
//     S stands for Scissors
function calculateScore(games) {
  let aPoints = 0;
  let bPoints = 0;

  games.forEach((gayme) => {
    if (gayme[0] === "R") {
      if (gayme[1] === "S") aPoints++;
      if (gayme[1] === "P") bPoints++;
    } else if (gayme[0] === "P") {
      if (gayme[1] === "S") bPoints++;
      if (gayme[1] === "R") aPoints++;
    } else {
      // gayme0 === S
      if (gayme[1] === "P") aPoints++;
      if (gayme[1] === "R") bPoints++;
    }
  });

  return aPoints > bPoints ? "Abigail" : aPoints < bPoints ? "Benson" : "Tie";
}

// Two Distinct Elements
// In each input array, every number repeats at least once, except for two.
// Write a function that returns the two unique numbers.
function returnUnique(arr) {
  // Time: O(2n) => O(n)
  // Space: O(n)
  let arrMap = {};

  arr.forEach((num) => {
    arrMap[num] ? arrMap[num]++ : (arrMap[num] = 1);
  });

  const r = [];

  arr.forEach((num) => {
    if (arrMap[num] === 1) r.push(num);
  });

  return r;
}

// Leader in an Array
// Create a function that finds each number in the given array
// that is greater than every number that comes after it.
// Your solution should return an array of the number(s) that meet these criteria.
function leader(arr) {
  let r = [];
  let currMax = -Infinity;

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] > currMax) {
      r.unshift(arr[i]);
      currMax = arr[i];
    }
  }
  return r;
}

// Unfair Hurdles
// Unfair hurdles are hurdles which are either too high,
// or way too close together.

// Create a function which takes in an array of strings, representing hurdles,
// and returns whether or not they are unfair. For the purposes of this challenge, unfair hurdles are:

//     At least 4 characters tall.
//     Strictly less than 4 spaces apart.
function isUnfairHurdle(hurdles) {
  if (hurdles.length >= 4) return true;
  for (let i = 0; i < hurdles.length; i++) {
    let spaces = hurdles[i].split("#");

    for (let j = 0; j < spaces.length; j++) {
      if (spaces[j].length < 4 && spaces[j].length > 0) return true;
    }
  }

  return false;
}

// Sum of Missing Numbers
// Create a function that returns the sum of missing numbers from the given array.
function sumMissingNumbers(arr) {
  // Time: O(2n) => O(n)
  // Space: O(n)
  let numMap = {};
  arr.forEach((num) => {
    numMap[num] = true;
  });

  let r = 0;

  for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
    if (!numMap[i]) r += i;
  }

  return r;
}

// Pages and Chapters
// Write a function that returns the closest chapter to the current page
// you are at. If two chapters are similarly close, return whichever
// has the higher page.
function closestToPage(chapters, page) {
  let r = "";
  let diff = Infinity;

  for (let [k, v] of Object.entries(chapters)) {
    let currDiff = Math.abs(page - v);
    if (currDiff <= diff) {
      r = k;
      diff = currDiff;
    }
  }

  return r;
}

// East or West
// You will be given an array of string "east" formatted differently every time.
// Create a function that returns "west" wherever there is "east".
// Format the string according to the input. Check the examples below to better understand the question.
function direction(arr) {
  const convTab = {
    e: "w",
    E: "W",
    a: "e",
    A: "E",
  };

  const r = [];

  for (let word of arr) {
    r.push(
      word
        .split("")
        .map((char) => {
          return Object.keys(convTab).includes(char) ? convTab[char] : char;
        })
        .join("")
    );
  }
  return r;
}

// Beginning and End Pairs
// Write a function that pairs the first number in an array with the last,
// the second number with the second to last, etc.
function pairs(arr) {
  const r = [];

  while (arr.length > 0) {
    if (arr.length === 1) {
      r.push([arr[0], arr[0]]);
      arr.pop();
    } else {
      r.push([arr.shift(), arr.pop()]);
    }
  }

  return r;
}

// Stock Picker
// Create a function that takes an array of integers that represent the
// amount in dollars that a single stock is worth,
// and return the maximum profit that could have been made by
// buying stock on day x and selling stock on day y where y>x.
function stockPicker(arr) {
  // Time: O(n)
  let currMin = Infinity;
  let currMaxProf = -Infinity;

  arr.forEach((price) => {
    if (price < currMin) {
      currMin = price;
    }

    let currDiff = price - currMin;

    if (currDiff > currMaxProf) {
      currMaxProf = currDiff;
    }
  });

  return currMaxProf > 0 ? currMaxProf : -1;
}

// Expand a Number I
// Create a function that expands a number into a string as shown below:

// 25 ➞ "20 + 5"
// 70701 ➞ "70000 + 700 + 1"
// 685 ➞ "600 + 80 + 5"
function expandedForm(num) {
  let rStr = [];
  let currNum = num;

  while (currNum) {
    let tail = (currNum + "").slice(1);
    rStr.push(currNum - +tail + "");
    currNum -= currNum - +tail;
  }

  return rStr.join(" + ");
}

// Reorder Digits
// Create a function that reorders the digits of each numerical
// element in an array based on ascending (asc) or descending (desc) order.
function reorderDigits(arr, direction) {
  const sortByDir = (num, dir) => {
    return dir === "asc"
      ? (num + "").split("").sort((a, b) => a - b)
      : (num + "").split("").sort((a, b) => b - a);
  };

  const r = [];

  arr.forEach((num) => {
    r.push(+sortByDir(num, direction).join(""));
  });

  return r;
}

// Multiplication Table
// Create a function that takes an integer n and returns
// multiplication table of 1 to n numbers up to nth multiple.
function multTable(n) {
  let r = [];

  for (let i = 1; i <= n; i++) {
    let pusher = [];
    for (let j = 0; j < n; j++) {
      pusher.length === 0
        ? pusher.push(i)
        : pusher.push(pusher[pusher.length - 1] + pusher[0]);
    }
    r.push(pusher);
  }

  return r;
}

// Switching Between Pencils
// When coloring a striped pattern, you may start by coloring each
// square sequentially, meaning you spend time needing to
// switch coloring pencils.

// Create a function where given an array of colors cols,
// return how long it takes to color the whole pattern.
//  Note the following times:

// It takes 1 second to switch between pencils.
// It takes 2 seconds to color a square.
// See the example below for clarification.
function colorPatternTimes(cols) {
  let runTotal = 2;
  let numChanges = 0;

  for (let i = 1; i < cols.length; i++) {
    runTotal += 2;
    if (cols[i - 1] !== cols[i]) numChanges++;
  }

  return runTotal + numChanges;
}

// Weekly Salary
// Write a function that takes a list of hours and returns the total weekly salary.

// The input list hours is listed sequentially, ordered from Monday to Sunday.
// A worker earns $10 an hour for the first 8 hours.
// For every overtime hour, he earns $15.
// On weekends, the employer pays double the usual rate,
// regardless how many hours were worked previously that week.
// For instance, 10 hours worked on a weekday would pay 80+30 = $110,
// but on a weekend it would pay 160+60 = $220.
function weeklySalary(hours) {
  let totSal = 0;

  hours.forEach((daysHours, i) => {
    return (totSal += calcDaysPay(daysHours, [10, 15], i));
  });

  function calcDaysPay(hours, rates, dayIdx) {
    let r = 0;

    if (hours > 0) {
      r += Math.min(hours, 8) * rates[0];
    }

    if (hours > 8) {
      r += (hours - 8) * rates[1];
    }

    if (dayIdx > 4) {
      r *= 2;
    }

    return r;
  }

  return totSal;
}

// Building a Staircase
// Create a function that builds a staircase given the height and the type of building block.
function buildStaircase(height, block) {
  const r = Array(height).fill(Array(height).fill("-"));

  return r.map((arr, i) => arr.map((_, j) => (j <= i ? block : "_")));
}

// Letter Occurrences Per Word
// Create a function that takes in a sentence and a character to find.
// Return an object of each word in the sentence, with the count of the
// specified character as the value.
function findOccurrences(str, char) {
  const wordMap = {};

  const getCharOccurrences = (word, char) => {
    return word.split("").filter((el) => el === char).length;
  };

  str.split(" ").forEach((word) => {
    const wordLower = word.toLowerCase();
    wordMap[wordLower] = getCharOccurrences(wordLower, char.toLowerCase());
  });

  return wordMap;
}

// Spaces Apart
// Create a function that takes an arr and returns the sum of the numbers between two "1"s.
function spaceApart(arr) {
  let r = 0;
  let counting = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      counting = !counting;
      continue;
    }

    if (counting) {
      if (Number.isInteger(arr[i])) r += arr[i];
    }
  }

  return r > 0 ? r : "invalid";
}

function textToNumberBinary(str) {
  let r = "";

  const words = str.split(" ");

  const convertedNums = getBinaryConversionOfChunk(words);

  const chunks = getChunkBySize(convertedNums, 8);

  chunks.forEach((chunk) => {
    if (chunk.length !== 8) return;
    r += chunk;
  });

  return r;

  function getChunkBySize(arr, chunkSize) {
    const rChunks = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      rChunks.push(chunk);
    }

    return rChunks;
  }

  function getBinaryConversionOfChunk(chunk) {
    let rBin = "";

    chunk.forEach((number) => {
      number.toLowerCase() === "zero"
        ? (rBin += "0")
        : number.toLowerCase() === "one"
        ? (rBin += "1")
        : null;
    });

    return rBin;
  }
}

// Gold Distribution
// https://edabit.com/challenge/XayqZJQQ5oJJGZSqc
function goldDistribution(gold) {
  let mubashirsPile = 0;
  let mattsPile = 0;

  let leftIdx = 0;
  let rightIdx = gold.length - 1;

  let mubashirsTurn = true;
  while (leftIdx <= rightIdx) {
    if (gold[leftIdx] >= gold[rightIdx]) {
      if (mubashirsTurn) {
        mubashirsPile += gold[leftIdx];
      } else {
        mattsPile += gold[leftIdx];
      }
      mubashirsTurn = !mubashirsTurn;
      leftIdx++;
      continue;
    } else {
      if (mubashirsTurn) {
        mubashirsPile += gold[rightIdx];
      } else {
        mattsPile += gold[rightIdx];
      }
      mubashirsTurn = !mubashirsTurn;
      rightIdx--;
      continue;
    }
  }

  return [mubashirsPile, mattsPile];
}

// Positives and Negatives
// https://edabit.com/challenge/SZnDZpQeBwhGXMBPW
function alternatePosNeg(arr) {
  function areSameSign(num1, num2) {
    return (num1 >= 0 && num2 >= 0) || (num1 < 0 && num2 < 0);
  }

  for (let i = 1; i < arr.length; i++) {
    const currElement = arr[i];
    const prevElement = arr[i - 1];
    if (currElement === 0) return false;
    if (areSameSign(currElement, prevElement)) return false;
  }

  return true;
}

// Layers in a Rug
// https://edabit.com/challenge/8khL2WEhZ6M9onHL4
function countLayers(rug) {
  const middleIndex = Math.floor(rug.length / 2);
  const middleLayer = rug[middleIndex];

  let r = 1;

  for (let i = 1; i < middleLayer.length; i++) {
    if (middleLayer[i] !== middleLayer[i - 1]) r++;
  }

  return Math.ceil(r / 2);
}

// An Ordered Matrix
function orderedMatrix(a, b) {
  const r = [];

  let currCounter = 1;

  for (let i = 0; i < a; i++) {
    const arr = [];
    for (let j = currCounter; j < currCounter + b; j++) {
      arr.push(j);
    }
    currCounter += b;
    r.push(arr);
  }

  return r;
}

function doubleSwap(str, c1, c2) {
  let r = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === c1) {
      r += c2;
      continue;
    }
    if (char === c2) {
      r += c1;
      continue;
    }
    r += char;
  }

  return r;
}

function reverseOdd(str) {
  return str
    .split(" ")
    .map((word) => {
      if (isOddLength(word)) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");

  function isOddLength(word) {
    return word.length % 2 !== 0;
  }
}

// A Capital Challenge
function selectLetters(s1, s2) {
  let r1 = "";
  let r2 = "";

  const longestStrLen = Math.max(s1.length, s2.length);

  for (let i = 0; i < longestStrLen; i++) {
    const s1Char = s1[i];
    const s2Char = s2[i];
    console.log(s2Char);

    if (isUpperCase(s2Char) && s1Char) {
      r1 += s1Char;
    }
    if (isUpperCase(s1Char) && s2Char) {
      r2 += s2Char;
    }
  }

  return r1 + r2;

  function isUpperCase(char) {
    if (!char) return false;
    return char === char.toUpperCase();
  }
}

console.log(
  // ***
  selectLetters("heLLO", "GUlp") // "help"
  // ***
);
