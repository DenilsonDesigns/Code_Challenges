// 1833. Maximum Ice Cream Bars

// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars. You are given an array costs
// of length n, where costs[i] is the price of the ith ice cream bar in coins.
// The boy initially has coins coins to spend,
// and he wants to buy as many ice cream bars as possible.

// Return the maximum number of ice cream bars the boy can buy with coins coins.

// Note: The boy can buy the ice cream bars in any order.
/**
 * @param {number[]} costs costs of each ice cream
 * @param {number} coins number of coin day boy got
 * @returns {number} number of ice cream he can got
 */
function maxIceCream(costs, coins) {
  let r = 0;
  // first, sort the costs thing.
  costs.sort((a, b) => a - b);

  for (let i = 0; i < costs.length; i++) {
    if (costs[i] <= coins) {
      r++;
      coins -= costs[i];
    } else {
      // if we dont have money, no point to keep looping.
      break;
    }
  }

  return r;
}

// 2150. Find All Lonely Numbers in the Array
// You are given an integer array nums. A number x is lonely when
// it appears only once, and no adjacent numbers (i.e. x + 1 and x - 1)
// appear in the array.

// Return all lonely numbers in nums. You may return the answer in any order.
function findLonely(nums) {
  const numMap = {};

  nums.forEach((el) => {
    numMap[el] ? numMap[el]++ : (numMap[el] = 1);
  });

  return nums.filter((el) => {
    return numMap[el] === 1 && !numMap[el - 1] && !numMap[el + 1];
  });
}

// 2284. Sender With Largest Word Count
// You have a chat log of n messages. You are given two string arrays messages and
// senders where messages[i] is a message sent by senders[i].

// A message is list of words that are separated by a single space with no leading
// or trailing spaces. The word count of a sender is the total number of words sent
// by the sender. Note that a sender may send more than one message.

// Return the sender with the largest word count. If there is more than one sender
// with the largest word count, return the one with the lexicographically largest name.
function largestWordCount(messages, senders) {
  const userWordCount = {};
  let currWinningUser = "";
  let currWinningCount = 0;

  for (let i = 0; i < messages.length; i++) {
    const messageWordCount = messages[i].split(" ").length;
    const sender = senders[i];

    userWordCount[sender]
      ? (userWordCount[sender] += messageWordCount)
      : (userWordCount[sender] = messageWordCount);
  }

  for (const [k, v] of Object.entries(userWordCount)) {
    if (v > currWinningCount) {
      currWinningUser = k;
      currWinningCount = v;
      continue;
    }

    if (v === currWinningCount && k > currWinningUser) {
      currWinningUser = k;
    }
  }

  return currWinningUser;
}

// 442. Find All Duplicates in an Array

// Given an integer array nums of length n where all the integers of nums are in the range [1, n]
// and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.
function findDuplicates(nums) {
  const r = [];

  const numMap = {};

  nums.forEach((num) => {
    if (numMap[num] === 1) {
      r.push(num);
      numMap[num] = 2;
    }

    if (!numMap[num]) {
      numMap[num] = 1;
    }
  });

  return r;
}

// 2149. Rearrange Array Elements by Sign
// https://leetcode.com/problems/rearrange-array-elements-by-sign/
var rearrangeArray = function (nums) {
  let i = 0;
  let j = 1;
  let res = [];

  for (let n of nums) {
    if (n > 0) {
      // number is positive:
      res[i] = n;
      i += 2;
    } else {
      // number is negative:
      res[j] = n;
      j += 2;
    }
  }
  return res;
};

// 1561. Maximum Number of Coins You Can Get
var maxCoins = function (piles) {
  piles.sort((a, b) => b - a);

  let r = 0;

  for (let i = 1; i < piles.length - piles.length / 3; i += 2) {
    const element = piles[i];
    r += element;
  }

  return r;
};

// 890. Find and Replace Pattern
var findAndReplacePattern = function (words, pattern) {
  // perm pattern:
  // go thru each letter of the pattern string,
  // if it exists, then push the KV key to the output.
  // if it doesn't exist,

  const r = [];

  // *** NEEDLE PATTERN;
  const needlePattern = getPatternFromString(pattern);

  words.forEach((word) => {
    const localWordPattern = getPatternFromString(word);

    if (areArraysEqual(localWordPattern, needlePattern)) {
      r.push(word);
    }
  });

  return r;

  // *** HELPERS ***
  function getPatternFromString(patternStr) {
    const charMap = new Map();
    let key = 1;

    const rPattern = [];

    for (let i = 0; i < patternStr.length; i++) {
      const char = patternStr[i];

      // check for value
      const foundKey = getKeyByValue(charMap, char);
      if (foundKey !== null) {
        rPattern.push(foundKey);
      } else {
        rPattern.push(key);
        charMap.set(key, char);
        key++;
      }
    }

    return rPattern;
  }

  function getKeyByValue(map, searchValue) {
    let foundKey = null;

    map.forEach((value, key) => {
      if (value === searchValue) {
        foundKey = key;
        return;
      }
    });

    return foundKey;
  }

  function areArraysEqual(array1, array2) {
    // Check if both arrays have the same length
    if (array1.length !== array2.length) {
      return false;
    }

    // Iterate through each element and compare
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

    // If all elements are equal, return true
    return true;
  }
};

// really elegant way to do it:
var findAndReplacePattern = function (words, pattern) {
  var patt = patternarr(pattern); // 010
  return words.filter((e) => patternarr(e) == patt);
};

const patternarr = function (str) {
  var result = "";

  for (let i = 0; i < str.length; i++) {
    //finding the first index
    result += str.indexOf(str[i]);
  }
  return result;
};

console.log(
  // ***
  findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb") // 1, 2, 2
  // ***
  // ["mee","aqq"]
);
