const { el } = require("date-fns/locale");

// 26. Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// Time: O(n) | space () ??? not actually using any variables, what is space comp. is this scenario?
function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    // check if target would be first element
    if (i === 0 && nums[i] > target) {
      return 0;
    }
    // check if target would be last element
    if (i === nums.length - 1 && nums[i] < target) {
      return nums.length;
    }
    // check if target exists between element
    if (nums[i] < target && nums[i + 1] > target && i + 1 < nums.length) {
      return i + 1;
    }
  }
}

// 27. Remove Element
// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.
function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
}

// 53. Maximum Subarray
// Given an integer array nums, find the contiguous
// subarray (containing at least one number) which has the largest sum and return its sum.
function maxSubArray(nums) {
  // have a leftIdx and a rightIdx.
  // store sum in an array, check each subarray and iterate right til end.
  // then increment leftIdx.
  // I believe this works, but doesn't reliably run in LeetCode(time restraint)
  //   let leftIdx = 0;
  //   let rightIdx = 0;
  //   let maxSum = -Infinity;
  //   while (rightIdx < nums.length) {
  //     let sli = nums.slice(leftIdx, rightIdx + 1);
  //     console.log(sli);
  //     let sum = sli.reduce((acc, el) => acc + el, 0);
  //     if (sum > maxSum) maxSum = sum;

  //     // need condition for when at the end of right side of nums
  //     if (rightIdx === nums.length - 1) {
  //       leftIdx++;
  //       rightIdx = leftIdx;
  //       continue;
  //     }
  //     rightIdx++;
  //   }
  //   return maxSum;
  // ********************
  //   From LeetCode:
  //   let maxSum = nums[0];
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i - 1] > 0) {
  //       nums[i] += nums[i - 1];
  //     }
  //     maxSum = Math.max(maxSum, nums[i]);
  //   }
  //   return maxSum;
  // ***********************
  // from : https://www.youtube.com/watch?v=gwUGDXO5gHU&ab_channel=TerribleWhiteboard
  // Time: O(n)
  //          [-2,   1,    -3,  4,   -1,   2,   1,  -5,   4]
  // current: -2     1     -2,  4, >  3, >  5   6    1,   5
  // global:  -2     1      1   4     4    5    6     6   6
  // this is Kadane's algorithm
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
}

// 88. Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2,
// merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has a size equal to m + n such
// that it has enough space to hold additional elements from nums2.
function mergeArrs(nums1, m, nums2, _) {
  // Time: O(n) | Space: O(1)
  let nums2Idx = 0;
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[nums2Idx];
    nums2Idx++;
  }
  return nums1.sort((a, b) => a - b);
}

// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price
// of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.
function maxProfit(prices) {
  // Time: O(n) | Space: O(1)
  let currentMin = prices[0];
  let maxProf = 0;

  for (let i = 1; i < prices.length; i++) {
    let currDiff = prices[i] - currentMin;

    if (currDiff > maxProf) maxProf = currDiff;
    if (prices[i] < currentMin) currentMin = prices[i];
  }
  return maxProf;
}

// 122. Best Time to Buy and Sell Stock II
// You are given an array prices where prices[i]
// is the price of a given stock on the ith day.
// Find the maximum profit you can achieve.
// You may complete as many transactions as you like
// (i.e., buy one and sell one share of the stock multiple times).
// Note: You may not engage in multiple transactions simultaneously
// (i.e., you must sell the stock before you buy again).
function maxProfit2(prices) {
  // Time: O(n) | Space: O(1)
  let currentPrice = prices[0];
  let totProf = 0;

  for (let i = 1; i < prices.length; i++) {
    let currDiff = prices[i] - currentPrice;
    if (currDiff > 0) {
      totProf += currDiff;
    }
    currentPrice = prices[i];
  }
  return totProf;
}

// 167. Two Sum II - Input array is sorted
// Given an array of integers numbers that is already sorted
// in ascending order, find two numbers such that they
// add up to a specific target number.

// Return the indices of the two numbers (1-indexed)
// as an integer array answer of size 2,
// where 1 <= answer[0] < answer[1] <= numbers.length.

// You may assume that each input would have exactly one
// solution and you may not use the same element twice.

function twoSum(numbers, target) {
  // Time: O(n) | Space: O(n)
  let lookTab = {};
  for (let i = 0; i < numbers.length; i++) {
    if (target - numbers[i] in lookTab) {
      return [lookTab[target - numbers[i]] + 1, i + 1];
    } else {
      lookTab[numbers[i]] = i;
    }
  }
}

// 169. Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.
function majorityElement(nums) {
  // Time: O(2n) | Space: O(n)
  let lookTab = {};
  let threshold = nums.length / 2;

  for (num of nums) {
    lookTab[num] ? lookTab[num]++ : (lookTab[num] = 1);
  }
  for (num in lookTab) {
    if (lookTab[num] > threshold) return parseInt(num);
  }
}

// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.
function containsDuplicate(nums) {
  // Time: O(1n) => simplified to O(n)
  // Space: O(n)
  let numMap = {};

  for (let num of nums) {
    if (numMap[num]) return true;

    numMap[num] = 1;
  }

  return false;
}

// 219. Contains Duplicate II
// Given an integer array nums and an integer k,
// return true if there are two distinct indices i and j in the array
// such that nums[i] == nums[j] and abs(i - j) <= k.
function containsNearbyDuplicate(nums, k) {
  // Time: O(n)
  // Space: O(n)
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (i - numMap[nums[i]] <= k) return true;
    numMap[nums[i]] = i;
  }
  return false;
}

// 228. Summary Ranges
// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all
// the numbers in the array exactly. That is, each element of nums is covered by
// exactly one of the ranges, and there is no integer x such that x is in one of the
// ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
function summaryRanges(nums) {
  // Time: O(n)
  // Space: O(n)
  let r = [];
  let currIdx = 0;
  let strtStrkIdx = 0;

  while (currIdx < nums.length) {
    if (nums[currIdx] !== nums[currIdx + 1] - 1) {
      if (nums[strtStrkIdx] === nums[currIdx]) {
        r.push(`${nums[strtStrkIdx]}`);
      } else {
        r.push(`${nums[strtStrkIdx]}->${nums[currIdx]}`);
      }
      currIdx++;
      strtStrkIdx = currIdx;
      continue;
    }

    currIdx++;
  }

  return r;
}

// 268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.
function missingNumber(nums) {
  // Time: O(2n) => Simplified to O(n)
  // But still slow (better than 38.35%) only.
  // Space: O(n)
  // let numMap = {};

  // for (let num of nums) {
  //   numMap[num] = true;
  // }

  // for (let i = 0; i < nums.length + 1; i++) {
  //   if (!(i in numMap)) return i;
  // }
  // ************************
  // This solution avoids 2 loop situation.
  // adapted from: https://leetcode.com/problems/missing-number/discuss/1112071/Java-simple-0(n)-0(1)-solution.-Faster-than-100-of-submissions

  let n = nums.length;
  let expectedSum = ((n + 1) * (0 + n)) / 2;
  let actualSum = 0;

  for (let num of nums) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
function moveZeroes(nums) {
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx++] = nums[i];
    }
  }

  for (let i = idx; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

// 1480. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array
// as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
function runningSum(nums) {
  // Time: O(n)
  // Space: O(n)
  let runSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let prevRunSum = runSum;
    runSum += nums[i];
    nums[i] = nums[i] + prevRunSum;
  }

  return nums;
}

function maximumWealth(accounts) {
  // Time: O(n^2)
  // Space: O(n^2)
  // let currMax = -Infinity;

  // for (let acc of accounts) {
  //   console.log(acc);
  //   let currAccMax = 0;
  //   for (let amt of acc) {
  //     currAccMax += amt;
  //   }
  //   if (currAccMax > currMax) currMax = currAccMax;
  // }
  // return currMax;
  // ***********************
  // Is there a way to do it quicker?
  // This is much faster, but why???
  // return Math.max(...accounts.map(account => account.reduce((acc, cur) => acc += cur)))
  // ************************
  // Try writing my first solution but with regular for loops.
  let currMax = 0;

  for (let i = 0; i < accounts.length; i++) {
    let currAccMax = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      currAccMax += accounts[i][j];
    }
    if (currAccMax > currMax) currMax = currAccMax;
  }
  return currMax;
  // THis is much faster, how costly is it to run for of loops?
}

// 1512. Number of Good Pairs
// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.
function numIdenticalPairs(nums) {
  // Time: O(n^2) (might be O(nlogn)?)
  // Space: O(1)
  // let numPairs = 0;

  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] === nums[j]) numPairs++;
  //   }
  // }

  // return numPairs;
  // Works, but can we do it without nested loop?
  //******************** */
  // TIme: O(n),
  // Space: O(n)
  let counterObj = {};
  let counter = 0;
  nums.forEach((n, _) => {
    if (counterObj[n]) {
      counter += counterObj[n]++;
    } else {
      counterObj[n] = 1;
    }
  });
  return counter;
}

// 1313. Decompress Run-Length Encoded List
// We are given a list nums of integers representing a list compressed
// with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]]
// (with i >= 0).  For each such pair, there are freq elements with value val
// concatenated in a sublist. Concatenate all the sublists from left to right to
// generate the decompressed list.
// Return the decompressed list.
function decompressRLElist(nums) {
  // Time: O(n^2)
  // Space: O(n)
  // let r = [];

  // for (let i = 0; i < nums.length; i += 2) {
  //   for (let j = 1; j <= nums[i]; j++) r.push(nums[i + 1]);
  // }
  // return r;
  // Can we do O(n)?
  //*************** */
  // Time: O(n)
  // Space: O(n)
  let result = [];
  for (let i = 0; i < nums.length; i += 2) {
    const frequency = nums[i];
    const value = nums[i + 1];

    result.push(...new Array(frequency).fill(value));
  }
  return result;
}

// 1773. Count Items Matching a Rule
// You are given an array items, where each items[i] = [typei, colori, namei]
// describes the type, color, and name of the ith item. You are also given a rule
// represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.
function countMatches(items, ruleKey, ruleValue) {
  // Time O(n)
  // Space O(1)
  let rCount = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === "type" && items[i][0] === ruleValue) {
      rCount++;
      continue;
    }
    if (ruleKey === "color" && items[i][1] === ruleValue) {
      rCount++;
      continue;
    }
    if (ruleKey === "name" && items[i][2] === ruleValue) {
      rCount++;
      continue;
    }
  }

  return rCount;
}

// 1389. Create Target Array in the Given Order
// Given two arrays of integers nums and index.
// Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i],
// insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.
function createTargetArray(nums, index) {
  // Time: O(n)
  // Space: O(n)
  let r = [];

  for (let i = 0; i < nums.length; i++) {
    r.splice(index[i], 0, nums[i]);
  }
  return r;
}

// 1732. Find the Highest Altitude
// There is a biker going on a road trip.
// The road trip consists of n + 1 points at different altitudes.
// The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n
// where gain[i] is the net gain in altitude between points
// i​​​​​​ and i + 1 for all (0 <= i < n).
// Return the highest altitude of a point.
/**
 * @param {array} gain An array of gains in altitude.
 * @returns {number} Highest altitude achieved.
 */
function largestAltitude(gain) {
  // Time: O(n) | Space O(1)
  let currAlt = 0;
  let highestAlt = 0;

  for (let i = 0; i < gain.length; i++) {
    currAlt += gain[i];
    if (currAlt > highestAlt) highestAlt = currAlt;
  }
  return highestAlt;
}

// 1295. Find Numbers with Even Number of Digits
// Given an array nums of integers,
// return how many of them contain an even number of digits.
/**
 *
 * @param {array} nums An array of numbers
 * @returns {number} Amount of numbers in nums that have even no. of digits.
 */
function findNumbers(nums) {
  // Time: O(n) | Space: O(1)
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let str = String(nums[i]);
    if (str.length % 2 === 0) count++;
  }

  return count;
}

// 1464. Maximum Product of Two Elements in an Array
// Given the array of integers nums,
// you will choose two different indices i and j of that array.
// Return the maximum value of (nums[i]-1)*(nums[j]-1).
/**
 *
 * @param {array[nums]} nums
 * @returns {number} Highest product of 2 nums.
 */
function maxProduct(nums) {
  // Time: O(n^2) | Space: O(1)
  let maxProd = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let prod = (nums[i] - 1) * (nums[j] - 1);
      if (prod > maxProd) maxProd = prod;
    }
  }

  return maxProd;
  // *** Very clever solution using only one loop:
  // let maxOne = nums[0]
  // let maxTwo = null

  // for (let i = 1; i < nums.length; i++) {
  //   if (maxOne < nums[i]) {
  //     maxTwo = maxOne
  //     maxOne = nums[i]
  //   } else if (maxTwo < nums[i]) {
  //     maxTwo = nums[i]
  //   }
  // }

  // return (maxOne - 1) * (maxTwo - 1)
}

// 1572. Matrix Diagonal Sum
// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal
// and all the elements on the secondary diagonal that are not part
// of the primary diagonal.
/**
 *
 * @param {array[number]} mat Array of arrays forming a matrix
 * @returns {number} Sum of diagonal elements
 */
function diagonalSum(mat) {
  // Time: O(n) | Space: O(1)
  let leftIdx = 0;
  let rightIdx = mat.length - 1;

  let finalSum = 0;

  for (let i = 0; i < mat.length; i++) {
    // If left and righIdx are the same
    // only aggregate the one number.
    if (leftIdx === rightIdx) {
      finalSum += mat[i][leftIdx];
      leftIdx++;
      rightIdx--;
      continue;
    }

    finalSum += mat[i][leftIdx];
    finalSum += mat[i][rightIdx];

    leftIdx++;
    rightIdx--;
  }
  return finalSum;
}

// 1450. Number of Students Doing Homework at a Given Time
// Given two integer arrays startTime and endTime and given an
// integer queryTime.

// The ith student started doing their homework at the time startTime[i]
// and finished it at time endTime[i].

// Return the number of students doing their homework at time queryTime.
// More formally, return the number of students where queryTime lays in
// the interval [startTime[i], endTime[i]] inclusive.
/**
 *
 * @param {array[number]} startTime Array of start times
 * @param {array[number]} endTime Array of end times
 * @param {number} queryTime Time we are querying
 * @returns {number} Number of students studying at that time
 */
function busyStudent(startTime, endTime, queryTime) {
  // Time O(n) | Space: O(1)
  let numStudentsStudying = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      numStudentsStudying++;
    }
  }

  return numStudentsStudying;
}

// 1742. Maximum Number of Balls in a Box
// You are working in a ball factory where you have n balls numbered
// from lowLimit up to highLimit inclusive
// (i.e., n == highLimit - lowLimit + 1), and an infinite
// number of boxes numbered from 1 to infinity.

// Your job at this factory is to put each ball in the box
// with a number equal to the sum of digits of the ball's number.
// For example, the ball number 321 will be put in the
// box number 3 + 2 + 1 = 6 and the ball number 10 will be put
// in the box number 1 + 0 = 1.

// Given two integers lowLimit and highLimit,
// return the number of balls in the box with the most balls.
/**
 *
 * @param {*} lowLimit Start of range of balls
 * @param {*} highLimit End of range of balls
 * @returns {number} Number of balls in the most filled box
 */
function countBalls(lowLimit, highLimit) {
  // Time: O(n) | Space: O(n)
  let boxMap = {};
  let currMax = 0;
  for (let i = lowLimit; i <= highLimit; i++) {
    boxMap[sumDigits(i)] ? boxMap[sumDigits(i)]++ : (boxMap[sumDigits(i)] = 1);

    if (boxMap[sumDigits(i)] > currMax) currMax = boxMap[sumDigits(i)];
  }

  return currMax;
}

// Source: https://stackoverflow.com/questions/38334652/sum-all-the-digits-of-a-number-javascript
function sumDigits(n) {
  let sum = 0;
  while (n) {
    digit = n % 10;
    sum += digit;
    n = (n - digit) / 10;
  }
  return sum;
}

// 1748. Sum of Unique Elements
// You are given an integer array nums.
// The unique elements of an array are the elements
// that appear exactly once in the array.

// Return the sum of all the unique elements of nums.
/**
 *
 * @param {array[Int16Array]} nums Array of numbers
 * @returns {number} Sum of unique elements in nums
 */
function sumOfUnique(nums) {
  // Time: O(2n) => O(n) | Space: O(n)
  const numMap = {};

  let sumUniques = 0;

  for (let i = 0; i < nums.length; i++) {
    numMap[nums[i]] ? numMap[nums[i]]++ : (numMap[nums[i]] = 1);
  }

  for (const [key, value] of Object.entries(numMap)) {
    if (value === 1) {
      sumUniques += parseInt(key);
    }
  }

  return sumUniques;
  // *** Very clever O(n) solution.
  // let isUnique = {};
  // let sum = 0;
  // for(let n of nums) {
  //   if(isUnique[n] === undefined) { //Encountering first time, add to sum
  //     sum += n;
  //     isUnique[n] = true;
  //   } else if(isUnique[n]) { //Encountering second time, subtract from sum
  //     sum -= n;
  //     isUnique[n] = false; //Set to false so third or more occurrences will not get added to sum
  //   }
  // }
  // return sum;
}

// 1051. Height Checker
// A school is trying to take an annual photo of all the students.
// The students are asked to stand in a single file line in
// non-decreasing order by height. Let this ordering be represented
// by the integer array expected where expected[i] is the expected height
// of the ith student in line.

// You are given an integer array heights representing the current order that the
// students are standing in. Each heights[i] is the height of the ith student
// in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].
/**
 *
 * @param {array[Int16Array]} heights
 * @returns {number} number of students not in correct place.
 */
function heightChecker(heights) {
  // Time: O(n) + O(nLogn) => O(n) | Space: O(n)
  let numDiff = 0;
  // sort the array in asc order first.
  // the spread operator used like this creates a new array
  // (doesnt mutate original heights array)
  let sorted = [...heights].sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) numDiff++;
  }

  return numDiff;
}

// 1002. Find Common Characters
// Given an array A of strings made only from lowercase letters,
// return a list of all characters that show up in all strings within the list (including duplicates).
// For example, if a character occurs 3 times in all strings but not 4 times,
// you need to include that character three times in the final answer.
// You may return the answer in any order.
/**
 *
 * @param {Array[strings]} words Array of strings to check
 * @returns {Array[chars]} Array of chars in the amt that they appear
 */
function commonChars(A) {
  // Time: O(m * 2n) (Approx)
  // where m is length of first word,
  // n is length of A
  const result = [];
  // make array from first word.
  const firstWordArr = [...A[0]];

  // loop through every letter in firstWordArr
  for (const letter of firstWordArr) {
    // Check every single word includes letter.
    if (A.every((word) => word.includes(letter))) {
      // if yes, push to r.
      result.push(letter);
      // replace the letter in every word with space(ie, splice it out)
      A = A.map((word) => word.replace(letter, ""));
    }
  }

  return result;
}

// 985. Sum of Even Numbers After Queries
// We have an array A of integers, and an array queries of queries.

// For the i-th query val = queries[i][0], index = queries[i][1],
// we add val to A[index].
// Then, the answer to the i-th query is the sum of the even values of A.

// (Here, the given index = queries[i][1] is a 0-based index,
// and each query permanently modifies the array A.)

// Return the answer to all queries.
// Your answer array should have answer[i] as the answer to the i-th query.
/**
 *
 * @param {Array[numbers]} A Array of integers
 * @param {Array[Arrays]} queries Array of array of queries.
 */
function sumEvenAfterQueries(A, queries) {
  // Time: O(n^2)
  // Space: O(n)

  // make placeholder array of length === A.lenth
  // let r = new Array(A.length);
  let r = [];

  // loop through each query
  for (let i = 0; i < queries.length; i++) {
    // console.log(queries[i]);
    A[queries[i][1]] += queries[i][0];
    // console.log(A);
    r.push(sumOfEvens(A));
  }

  return r;

  // subfunction to give sum of even items
  function sumOfEvens(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) sum += arr[i];
    }

    return sum;
  }
}

// 1394. Find Lucky Integer in an Array
// Given an array of integers arr, a lucky integer is an integer
// which has a frequency in the array equal to its value.

// Return a lucky integer in the array. If there are multiple
// lucky integers return the largest of them.
// If there is no lucky integer return -1.
/**
 *
 * @param {number[]} arr array of numbers
 * @returns {number} max of "lucky" numbers
 */
function findLucky(arr) {
  // Time: O(2n) => O(n)
  // Space: O(n)
  let luckyNums = [-1];

  let numMap = {};

  for (let i = 0; i < arr.length; i++) {
    numMap[arr[i]] ? numMap[arr[i]]++ : (numMap[arr[i]] = 1);
  }

  for (const [key, value] of Object.entries(numMap)) {
    if (parseInt(key) === value) luckyNums.push(value);
  }

  return Math.max(...luckyNums);
}

// 485. Max Consecutive Ones
// Given a binary array nums, return the maximum
// number of consecutive 1's in the array.
function findMaxConsecutiveOnes(nums) {
  // Works but very slow.
  let ones = nums
    .join("")
    .split("0")
    .sort((a, b) => a.length - b.length);
  return ones[ones.length - 1].length;
  // *********************************
}

// 1351. Count Negative Numbers in a Sorted Matrix
// Given a m x n matrix grid which is sorted in non-increasing
// order both row-wise and column-wise, return the number
// of negative numbers in grid.
/**
 * @param {number[][]} grid
 * @returns {number}
 */
function countNegatives(grid) {
  let r = 0;

  for (let gri of grid) {
    for (let i = gri.length; i >= 0; i--) {
      if (gri[i] < 0) r++;
      if (gri[i] >= 0) break;
    }
  }

  return r;
}

// 1460. Make Two Arrays Equal by Reversing Sub-arrays
// Given two integer arrays of equal length target and arr.

// In one step, you can select any non-empty sub-array
// of arr and reverse it. You are allowed to make any number of steps.

// Return True if you can make arr equal to target, or False otherwise.
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @returns {boolean} whether or not target can be changed to make arr
 */
function canBeEqual(target, arr) {
  return target.sort().toString() == arr.sort().toString();
}

// 1588. Sum of All Odd Length Subarrays
// Given an array of positive integers arr,
// calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.
/**
 * @param {number[]} arr
 * @returns {number} sum of all odd-length arrays.
 */
function sumOddLengthSubarrays(arr) {
  // have a leftIdx and a rightIdx
  // increment the rightIdx by 2 to keep it gully.
  // increment leftIdx by one each time, and reset rightIdx = leftIdx.
  let leftIdx = 0;
  let rightIdx = 0;
  let sum = 0;

  while (leftIdx < arr.length) {
    sum += sumArr(arr, leftIdx, rightIdx);
    while (rightIdx < arr.length - 2) {
      rightIdx += 2;
      sum += sumArr(arr, leftIdx, rightIdx);
    }

    leftIdx++;
    rightIdx = leftIdx;
  }

  return sum;

  function sumArr(arr, start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
      sum += arr[i];
    }
    return sum;
  }
}

// 1827. Minimum Operations to Make the Array Increasing
// You are given an integer array nums (0-indexed).
// In one operation, you can choose an element of the array
// and increment it by 1.

// For example, if nums = [1,2,3], you can choose to increment
// nums[1] to make nums = [1,3,3].
// Return the minimum number of operations needed to make nums strictly increasing.

// An array nums is strictly increasing if nums[i] < nums[i+1]
// for all 0 <= i < nums.length - 1. An array of length 1 is trivially
// strictly increasing.
/**
 * @param {number[]} nums
 * @returns {number} steps required to make strictly increasing.
 */
function minOperations(nums) {
  // Time: O(n) | Space: O(1)
  let operations = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      operations += nums[i - 1] + 1 - nums[i];
      nums[i] = nums[i - 1] + 1;
    }
  }

  return operations;
}

// 561. Array Partition I
// Given an integer array nums of 2n integers,
// group these integers into n pairs (a1, b1), (a2, b2),
// ..., (an, bn) such that the sum of min(ai, bi) for all i is
// maximized. Return the maximized sum.
/**
 * @param {number[]} nums array of nums
 * @returns {number} max output
 */
function arrayPairSum(nums) {
  // lets not overcomplicate this and just sort asc.
  // then return sum of products of each pair.
  nums.sort((a, b) => a - b);

  let pairSum = 0;
  for (let i = 0; i < nums.length - 1; i += 2) {
    pairSum += Math.min(nums[i], nums[i + 1]);
  }

  return pairSum;
}

// 1299. Replace Elements with Greatest Element on Right Side
// Given an array arr, replace every element in that array with
// the greatest element among the elements to its right, and replace
// the last element with -1.

// After doing so, return the array.
/**
 * @param {number[]} arr
 * @returns {number[]} returns arr of nums
 */
function replaceElements(arr) {
  // loop through backwards and hold an updated array of the currMax
  arr.splice(0, 1);
  arr.push(-1);
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; --i) {
    max = Math.max(arr[i], max);
    arr[i] = max;
  }
  return arr;
}

// 136. Single Number
// Given a non-empty array of integers nums,
// every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime
// complexity and without using extra memory?
/**
 * @param {number[]} nums
 * @returns {number} number which only appears once in arr.
 */
function singleNumber(nums) {
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    numMap[nums[i]] ? numMap[nums[i]]++ : (numMap[nums[i]] = 1);
  }

  for (const [key, value] of Object.entries(numMap)) {
    if (value === 1) return parseInt(key);
  }
  // slight better:
  // const seen = {};
  // for (let n of nums) {
  //   if (seen[n]) delete seen[n];
  //   else seen[n] = true;
  // }
  // return Object.keys(seen)[0];
}

// 1534. Count Good Triplets
// Given an array of integers arr, and three integers a, b and c.
// You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.
/**
 * @param {} arr
 * @param {} a
 * @param {} b
 * @param {} c
 * @returns {number} integer of the number of good pairs
 */
function countGoodTriplets(arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          count++;
        }
      }
    }
  }
  return count;
}

// 1252. Cells with Odd Values in a Matrix
// There is an m x n matrix that is initialized to all 0's.
// There is also a 2D array indices where each indices[i] = [ri, ci]
// represents a 0-indexed location to perform some increment
// operations on the matrix.

// For each location indices[i], do both of the following:

// Increment all the cells on row ri.
// Increment all the cells on column ci.
// Given m, n, and indices, return the number of odd-valued
// cells in the matrix after applying the increment to all locations in indices.
function oddCells(m, n, indices) {
  let r = 0;
  let matrix = new Array(m);

  for (let i = 0; i < m; i++) {
    matrix[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j === indices[i][0]) {
        matrix[j] = matrix[j].map((el) => (el += 1));
      }
      matrix[j] = matrix[j].map((el, idx) =>
        idx === indices[i][1] ? (el += 1) : el
      );
    }
  }

  return matrix.flat().filter((el) => el % 2 !== 0).length;
}

// 1725. Number Of Rectangles That Can Form The Largest Square
// You are given an array rectangles where rectangles[i] = [li, wi]
// represents the ith rectangle of length li and width wi.

// You can cut the ith rectangle to form a square with a side length
// of k if both k <= li and k <= wi. For example,
// if you have a rectangle [4,6], you can cut it to get a square
// with a side length of at most 4.

// Let maxLen be the side length of the largest square you can
// obtain from any of the given rectangles.

// Return the number of rectangles that can make a square with a
// side length of maxLen.
/**
 * @param {number[][]} rectangles
 * @returns {number} total number of max size squares you can make from rects.
 */
function countGoodRectangles(rectangles) {
  let largestSq = 0;
  let sqCount = 0;

  for (let i = 0; i < rectangles.length; i++) {
    let maxSqSize = Math.min(...rectangles[i]);

    if (maxSqSize === largestSq) {
      sqCount++;
      continue;
    }
    if (maxSqSize > largestSq) {
      largestSq = maxSqSize;
      sqCount = 1;
    }
  }

  return sqCount;
}

// 922. Sort Array By Parity II
// Given an array of integers nums, half of the integers in nums are odd,
// and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd,
// and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.
/**
 * @param {number[]} nums array of nums to be sorted
 * @returns {number[]} array of nums in order
 */
function sortArrayByParityII(nums) {
  //naive way is to split into 2 arrays of odds and evens.
  // then merge them

  // Time: O(2n) | Space O(n)

  // space += 1n;
  let evens = [];
  let odds = [];

  // time += 1n
  nums.forEach((num) => {
    num % 2 === 0 ? evens.push(num) : odds.push(num);
  });

  // time += 1n
  for (let i = 0; i < nums.length; i++) {
    i % 2 === 0 ? (nums[i] = evens.pop()) : (nums[i] = odds.pop());
  }

  // return [evens, odds];
  return nums;
}

// 1920. Build Array from Permutation
// Given a zero-based permutation nums (0-indexed),
// build an array ans of the same length where ans[i] = nums[nums[i]]
// for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to
// nums.length - 1 (inclusive).
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function (nums) {
  let r = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    r[i] = nums[nums[i]];
  }
  return r;
};

// 1913. Maximum Product Difference Between Two Pairs
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference = (nums) => {
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};

// 1266. Minimum Time Visiting All Points
/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = (points) => {
  let seconds = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let xDiff = Math.abs(points[i][0] - points[i + 1][0]);
    let yDiff = Math.abs(points[i][1] - points[i + 1][1]);
    seconds += Math.max(xDiff, yDiff);
  }
  return seconds;
};

// 1356. Sort Integers by The Number of 1 Bits
// Given an integer array arr. You have to sort the integers
// in the array in ascending order by the number of 1's in their
// binary representation and in case of two or more integers have the same number
// of 1's you have to sort them in ascending order.

// Return the sorted array.
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = (arr) => {
  const getBitCount = (num) => {
    let count = 0;

    for (let i = 0; i < 32; i++) {
      if ((num >>> i) & 1) {
        count++;
      }
    }

    return count;
  };
  return arr.sort((a, b) => {
    const bitsA = getBitCount(a);
    const bitsB = getBitCount(b);

    if (bitsA === bitsB) {
      return a - b;
    }

    return bitsA - bitsB;
  });
};

// 1859. Sorting the Sentence
// A sentence is a list of words that are separated by a single space
// with no leading or trailing spaces. Each word consists of lowercase
// and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position
// to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as
// "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".

// Given a shuffled sentence s containing no more than 9 words,
// reconstruct and return the original sentence.

function sortSentence(s) {
  // Successfull, but slow:
  //   Runtime: 152 ms, faster than 5.06% of
  // JavaScript online submissions for Sorting the Sentence.
  // Memory Usage: 38.2 MB, less than 94.24% of
  // JavaScript online submissions for Sorting the Sentence.
  let words = s.split(" ");
  const r = new Array(words.length);

  words.forEach((word) => {
    r[Number.parseInt(word[word.length - 1])] = word.slice(0, word.length - 1);
  });

  return r.join(" ").trim();
  // nice solution from answers:
  // let arr = Array.from({ length: s.split(" ").length }, () => "");
  // let temp = "";

  // for (let i = 0; i < s.length; i++) {
  //   // if not number add to temp string
  //   if (isNaN(s[i])) {
  //     temp += s[i];
  // // if number add to array with index = last number - 1
  //   } else if (!isNaN(s[i])) {
  //     arr[+s[i] - 1] = temp;
  //     temp = "";

  //   // next char after number is space so jump to next letter
  //     ++i;
  //   }
  // }
  // return arr.join(' ');
}

// 1941. Check if All Characters Have Equal Number of Occurrences
// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same
// number of occurrences (i.e., the same frequency).
function areOccurrencesEqual(s) {
  // Time: O(2n)-ish;
  // Space: O(n)
  let charMap = {};

  s.split("").forEach((char) => {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  });

  return new Set(Object.values(charMap)).size === 1;
}

// 1967. Number of Strings That Appear as Substrings in Word
// Given an array of strings patterns and a string word,
// return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.
function numOfStrings(patterns, word) {
  // Time: O(n)
  // Space: O(1)
  let r = 0;

  patterns.forEach((pattern) => {
    if (word.includes(pattern)) r++;
  });

  return r;
}

// Reverse Only Letters
// Given a string s, reverse the string according to the following rules:

//     All the characters that are not English letters remain in the same position.
//     All the English letters (lowercase or uppercase) should be reversed.

// Return s after reversing it.
function reverseOnlyLetters(s) {
  // Time: O(n)
  // Space: O(n)
  let arrS = s.split("");
  let leftIdx = 0;
  let rightIdx = s.length - 1;

  while (leftIdx < rightIdx) {
    if (!arrS[leftIdx].match(/[a-z]/i)) {
      leftIdx++;
    }

    if (!arrS[rightIdx].match(/[a-z]/i)) {
      rightIdx--;
    }

    if (arrS[leftIdx].match(/[a-z]/i) && arrS[rightIdx].match(/[a-z]/i)) {
      let leftTemp = arrS[leftIdx];
      arrS[leftIdx] = arrS[rightIdx];

      arrS[rightIdx] = leftTemp;

      leftIdx++;
      rightIdx--;
    }
  }

  return arrS.join("");
}

// 1979. Find Greatest Common Divisor of Array
// Given an integer array nums, return the greatest common divisor of
// the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer
// that evenly divides both numbers.
function findGCD(nums) {
  nums.sort((a, b) => a - b);
  return gcd(nums[0], nums[nums.length - 1]);

  function gcd(a, b) {
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
  }
}

// 1337. The K Weakest Rows in a Matrix
// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's
// (representing civilians). The soldiers are positioned in front of the civilians.
// That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

//     The number of soldiers in row i is less than the number of soldiers in row j.
//     Both rows have the same number of soldiers and i < j.

// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.
function kWeakestRows(mat, k) {
  // Time: O(2n) => O(n)
  // Space: O(n)
  return mat
    .map((el, i) => {
      return [el.reduce((acc, el) => acc + el, 0), i];
    })
    .sort((a, b) => a[0] - b[0])
    .map((el) => el[1])
    .slice(0, k);
}

// 1475. Final Prices With a Special Discount in a Shop
// Given the array prices where prices[i] is the price of the ith item in a shop.
// There is a special discount for items in the shop, if you buy the ith item,
// then you will receive a discount equivalent to prices[j] where j is the minimum index such that
// j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

// Return an array where the ith element is the final price you will pay for the ith item
// of the shop considering the special discount.
function finalPrices(prices) {
  // Time: O(n^2) :( :(
  // Space: O(n)
  let r = [];

  for (let i = 0; i < prices.length; i++) {
    let discount = false;
    if (i === prices.length - 1) {
      r.push(prices[i]);
      continue;
    }
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        r.push(prices[i] - prices[j]);
        discount = true;
        break;
      }
    }
    !discount && r.push(prices[i]);
  }
  return r;
}

// 1710. Maximum Units on a Truck
// You are assigned to put some amount of boxes onto one truck.
// You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.

// You are also given an integer truckSize, which is the maximum number of
// boxes that can be put on the truck. You can choose any boxes to put on the
// truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.
function maximumUnits(boxTypes, truckSize) {
  // Time: O(n)-ish, (has a sort in there)
  // Space: O(n)
  let r = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);

  boxTypes.forEach((box) => {
    if (box[0] <= truckSize) {
      r += box[0] * box[1];
      truckSize -= box[0];
    } else {
      r += truckSize * box[1];
      truckSize = 0;
    }
  });

  return r;
}

// 852. Peak Index in a Mountain Array
// Let's call an array arr a mountain if the following properties hold:

//     arr.length >= 3
//     There exists some i with 0 < i < arr.length - 1 such that:
//         arr[0] < arr[1] < ... arr[i-1] < arr[i]
//         arr[i] > arr[i+1] > ... > arr[arr.length - 1]

// Given an integer array arr that is guaranteed to be a mountain,
// return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] >
// ... > arr[arr.length - 1].
function peakIndexInMountainArray(arr) {
  let highestPoint = 0;
  let peakIdx = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1] && arr[i] > highestPoint) {
      highestPoint = arr[i];
      peakIdx = i;
    }
  }

  return peakIdx;
}

// 2006. Count Number of Pairs With Absolute Difference K
// Given an integer array nums and an integer k,
// return the number of pairs (i, j) where i < j
// such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

//     x if x >= 0.
//     -x if x < 0.
function countKDifference(nums, k) {
  // Time: O(n) ranked well, many answers were technically O(2n)
  // Space: O(n) note: memory usage ranked poorly on LeetCode, is
  // there a way to do it without storing a map?
  let r = 0;
  let numMap = {};

  nums.forEach((num, i) => {
    if (numMap[num + k]) r += numMap[num + k].length;
    if (numMap[num - k]) r += numMap[num - k].length;
    numMap[num] ? numMap[num].push(i) : (numMap[num] = [i]);
  });

  return r;
}

// 2057. Smallest Index With Equal Value
// Given a 0-indexed integer array nums, return the smallest
// index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist.

// x mod y denotes the remainder when x is divided by y.
function smallestEqual(nums) {
  // Time: O(n)
  // Space:
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) return i;
  }

  return -1;
}

// 2053. Kth Distinct String in an Array
// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k,
// return the kth distinct string present in arr. If there are fewer than k distinct strings,
// return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.
function kthDistinct(arr, k) {
  // Time: O(2n) => O(n)
  // Space: O(n)
  const strMap = {};
  let currIdx = 0;

  arr.forEach((str) => {
    if (strMap[str]) {
      strMap[str]++;
    } else {
      strMap[str] = 1;
    }
  });

  arr.forEach((str) => {});

  for (let i = 0; i < arr.length; i++) {
    if (strMap[arr[i]] === 1) {
      currIdx++;
      if (currIdx === k) return arr[i];
    }
  }

  return "";
}

function mostWordsFound(sentences) {
  // Time: O(n);
  // Space: O(1)
  let max = 0;

  sentences.forEach((el) => {
    let sentenceLength = el.split(" ").length;
    if (sentenceLength > max) max = sentenceLength;
  });

  return max;

  // clever usage of reduce:
  // return sentences.map(el =>  el.split(" ").length).reduce((max, val) => max > val ? max : val)
}

// 2160. Minimum Sum of Four Digit Number After Splitting Digits
// You are given a positive integer num consisting of exactly four digits.
// Split num into two new integers new1 and new2 by using the digits found in num.
// Leading zeros are allowed in new1 and new2,
// and all the digits found in num must be used.
function minimumSum(num) {
  let numStr = num + "";
  numStr = numStr.split("").map((el) => +el);
  numStr = numStr.sort((a, b) => a - b);

  const firstNum = numStr[0] + "" + numStr[2] + "";
  const secondNum = numStr[1] + "" + numStr[3] + "";

  return +firstNum + +secondNum;
}

// 2089. Find Target Indices After Sorting Array
// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums
// in non-decreasing order. If there are no target indices,
// return an empty list. The returned list must be sorted in increasing order.
function targetIndices(nums, target) {
  // Time: O(2n) => O(n)
  // Space: ???
  let sortedNums = nums.sort((a, b) => a - b);

  return sortedNums
    .map((el, i) => {
      return el === target && i;
    })
    .filter((el) => el !== false);
}

// 2108. Find First Palindromic String in the Array
// Given an array of strings words, return the first palindromic
// string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.
function firstPalindrome(words) {
  // Time: O(nm) (ish)
  // Space: ???

  // works but bad time/space ranking in LC.
  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").reverse().join("") === words[i]) return words[i];
  }

  return "";
}

// 1287. Element Appearing More Than 25% In Sorted Array
// Given an integer array sorted in non-decreasing order, there
// is exactly one integer in the array that occurs more than 25% of the time,
// return that integer.
function findSpecialInteger(arr) {
  const oneQuarter = arr.length / 4;

  const numMap = {};

  for (let i = 0; i < arr.length; i++) {
    numMap[arr[i]] ? numMap[arr[i]]++ : (numMap[arr[i]] = 1);
    if (numMap[arr[i]] > oneQuarter) return arr[i];
  }
}

// 414. Third Maximum Number
// Given an integer array nums, return the third
// distinct maximum number in this array.
// If the third maximum does not exist, return the maximum number.
function thirdMax(nums) {
  nums.sort((a, b) => b - a);

  const uniques = [...new Set(nums)];

  return uniques.length >= 3 ? uniques[2] : Math.max(...uniques);
}

// 349. Intersection of Two Arrays
// Given two integer arrays nums1 and nums2,
// return an array of their intersection.
// Each element in the result must be unique and you may
// return the result in any order.
function intersection(nums1, nums2) {
  return [...new Set(nums1.filter((el) => nums2.includes(el)))];
}

// 605. Can Place Flowers
// You have a long flowerbed in which some of the plots are planted,
// and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's,
// where 0 means empty and 1 means not empty, and an integer n,
// return if n new flowers can be planted in the flowerbed
// without violating the no-adjacent-flowers rule.
function canPlaceFlowers(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i - 1] === 0 || i === 0) &&
      (flowerbed[i + 1] === 0 || i === flowerbed.length - 1)
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
}

// 1491. Average Salary Excluding the Minimum and Maximum Salary
// You are given an array of unique integers salary where salary[i]
// is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
function average(salary) {
  const max = Math.max(...salary);
  const min = Math.min(...salary);

  const sumOfNewSals = salary
    .filter((el) => el !== max && el !== min)
    .reduce((acc, el) => acc + el, 0);

  return sumOfNewSals / (salary.length - 2) || 0;
}

// 2085. Count Common Words With One Occurrence
// Given two string arrays words1 and words2, return the number of
// strings that appear exactly once in each of the two arrays.
function countWords(words1, words2) {
  const makeWordMap = (words) => {
    const map = {};

    words.forEach((el) => {
      map[el] ? map[el]++ : (map[el] = 1);
    });

    return map;
  };

  const wordMap1 = makeWordMap(words1);
  const wordMap2 = makeWordMap(words2);

  let r = 0;

  for (let [k, v] of Object.entries(wordMap1)) {
    if (v === 1 && wordMap2[k] === 1) r++;
  }

  return r;
}

// 2078. Two Furthest Houses With Different Colors
// There are n houses evenly lined up on the street, and each house is
// beautifully painted. You are given a 0-indexed integer array colors
// of length n, where colors[i] represents the color of the ith house.

// Return the maximum distance between two houses with different colors.

// The distance between the ith and jth houses is abs(i - j),
// where abs(x) is the absolute value of x.
function maxDistance(colors) {
  let maxDist = 0;

  let leftIdx = 0;
  let rightIdx = colors.length - 1;

  while (leftIdx < rightIdx) {
    for (let i = leftIdx; i < rightIdx; rightIdx--) {
      if (colors[i] !== colors[rightIdx]) {
        let difference = rightIdx - i;
        if (difference > maxDist) {
          maxDist = difference;
        }
      }
    }
    rightIdx = colors.length - 1;
    leftIdx++;
  }

  return maxDist;
}

// 575. Distribute Candies
// Alice has n candies, where the ith candy is of type candyType[i].
// Alice noticed that she started to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she
// has (n is always even). Alice likes her candies very much,
// and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

// Given the integer array candyType of length n, return
// the maximum number of different types of candies she can
// eat if she only eats n / 2 of them.
function distributeCandies(candyType) {
  const maxEdible = candyType.length / 2;

  const uniqueCandiesCount = new Set(candyType).size;

  return uniqueCandiesCount > maxEdible ? maxEdible : uniqueCandiesCount;
}

// 506. Relative Ranks
// You are given an integer array score of size n, where score[i]
// is the score of the ith athlete in a competition.
// All the scores are guaranteed to be unique.

// The athletes are placed based on their scores,
// where the 1st place athlete has the highest score,
// the 2nd place athlete has the 2nd highest score, and so on.
// The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank
// is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i]
// is the rank of the ith athlete.
function findRelativeRanks(score) {
  let newScore = [...score].sort((a, b) => b - a);
  const scoreMap = {};

  newScore.forEach((el, i) => {
    if (i === 0) {
      return (scoreMap[el] = "Gold Medal");
    }
    if (i === 1) {
      return (scoreMap[el] = "Silver Medal");
    }
    if (i === 2) {
      return (scoreMap[el] = "Bronze Medal");
    }
    return (scoreMap[el] = i + 1 + "");
  });

  return score.map((el) => scoreMap[el]);
}

// 2148. Count Elements With Strictly Smaller and Greater Elements
// Given an integer array nums, return the number of elements that
// have both a strictly smaller and a strictly greater element appear in nums.
function countElements(nums) {
  let r = 0;
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  nums.forEach((el) => {
    if (el > min && el < max) r++;
  });

  return r;
}

// 2032. Two Out of Three
// Given three integer arrays nums1, nums2, and nums3,
// return a distinct array containing all the values that are present
// in at least two out of the three arrays. You may return the values in any order.
function twoOutOfThree(nums1, nums2, nums3) {
  const numMap = {};

  const uniqueArrs = getUniqueVals([nums1, nums2, nums3]);

  uniqueArrs.forEach((arr) => {
    arr.forEach((num) => {
      return numMap[num] ? numMap[num]++ : (numMap[num] = 1);
    });
  });

  return Object.entries(numMap)
    .filter((el) => el[1] >= 2)
    .map((el) => +el[0]);

  function getUniqueVals(arrOfArrs) {
    return arrOfArrs.map((arr) => [...new Set(arr)]);
  }
}

// 643. Maximum Average Subarray I
// You are given an integer array nums consisting of n elements,
// and an integer k.

// Find a contiguous subarray whose length is equal to k that has
// the maximum average value and return this value.
// Any answer with a calculation error less than
// 10-5 will be accepted.
function findMaxAverage(nums, k) {
  let s = 0;
  // getting intial sum
  for (let i = 0; i < k; i++) {
    s += nums[i];
  }
  // if theres only k amount of nums, thats the answer
  if (nums.length === k) {
    return s / k;
  }
  // else we need to calc.
  // let s = 0;
  let i = 0;
  let j = k;
  let max = -Infinity;
  max = Math.max(max, s / k);
  while (j < nums.length) {
    s -= nums[i];
    s += nums[j];
    i++;
    j++;
    max = Math.max(max, s / k);
  }
  return max;
}

// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
function reverseVowels(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelArr = [];
  const holdingArr = [...s.split("")];

  for (let i = 0; i < holdingArr.length; i++) {
    if (vowels.includes(holdingArr[i].toLowerCase())) {
      vowelArr.push(holdingArr[i]);
      holdingArr[i] = "";
    }
  }

  return holdingArr
    .map((el) => {
      if (el === "") {
        return vowelArr.pop();
      }
      return el;
    })
    .join("");
}

// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into
// lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters
// include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
function isPalindrome(s) {
  // strip non alpha-numeric chars from string.
  const strippedWord = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  return strippedWord === strippedWord.split("").reverse().join("");
}

// 2248. Intersection of Multiple Arrays
// Given a 2D integer array nums where nums[i] is a non-empty array
// of distinct positive integers, return the list of integers that are
// present in each array of nums sorted in ascending order.
function intersection(nums) {
  const numMap = {};

  nums.forEach((numArr) => {
    numArr.forEach((num) => {
      numMap[num] ? numMap[num]++ : (numMap[num] = 1);
    });
  });

  return Object.entries(numMap)
    .filter((el) => el[1] === nums.length)
    .map((el) => +el[0]);
}

// 2239. Find Closest Number to Zero
// Given an integer array nums of size n,
// return the number with the value closest to 0 in nums. If there are multiple
// answers, return the number with the largest value.
function findClosestNumber(nums) {
  let closest = Infinity;

  nums.forEach((el) => {
    let diff = Math.abs(el) - 0;
    if (diff < Math.abs(closest)) closest = el;
    if (diff === Math.abs(closest)) closest = Math.max(el, closest);
  });

  return closest;
}

// 2273. Find Resultant Array After Removing Anagrams
// You are given a 0-indexed string array words, where words[i] consists
// of lowercase English letters.

// In one operation, select any index i such that 0 < i < words.length and
// words[i - 1] and words[i] are anagrams, and delete words[i] from words.
// Keep performing this operation as long as you can select an index that
// satisfies the conditions.

// Return words after performing all operations. It can be shown that selecting
// the indices for each operation in any arbitrary order will lead to the same result.

// An Anagram is a word or phrase formed by rearranging the letters of a different
// word or phrase using all the original letters exactly once. For example,
// "dacb" is an anagram of "abdc".
function removeAnagrams(words) {
  const areAnagrams = (word1, word2) => {
    return word1.split("").sort().join("") === word2.split("").sort().join("");
  };

  let currIdx = 1;
  while (currIdx < words.length) {
    if (areAnagrams(words[currIdx - 1], words[currIdx])) {
      words.splice(currIdx, 1);
      continue;
    }

    currIdx++;
  }

  return words;
}

// 2215. Find the Difference of Two Arrays
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.
function findDifference(nums1, nums2) {
  const r1 = new Set();
  const r2 = new Set();

  nums1.forEach((el) => {
    if (!nums2.includes(el)) {
      r1.add(el);
    }
  });
  nums2.forEach((el) => {
    if (!nums1.includes(el)) {
      r2.add(el);
    }
  });

  return [[...r1], [...r2]];
}

// 2176. Count Equal and Divisible Pairs in an Array
// Given a 0-indexed integer array nums of length n and an integer k,
// return the number of pairs (i, j) where 0 <= i < j < n,
// such that nums[i] == nums[j] and (i * j) is divisible by k.
function countPairs(nums, k) {
  let r = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        r++;
      }
    }
  }

  return r;
}

// 2190. Most Frequent Number Following Key In an Array
// You are given a 0-indexed integer array nums. You are also given an integer key,
// which is present in nums.

// For every unique integer target in nums, count the number of times
// target immediately follows an occurrence of key in nums. In other words,
// count the number of indices i such that:

// 0 <= i <= nums.length - 2,
// nums[i] == key and,
// nums[i + 1] == target.
// Return the target with the maximum count. The test cases will be
// generated such that the target with maximum count is unique.
function mostFrequent(nums, key) {
  const keyMap = {};
  let maxAmount = 0;
  let maxTargetNum;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      keyMap[nums[i + 1]] ? keyMap[nums[i + 1]]++ : (keyMap[nums[i + 1]] = 1);
      if (keyMap[nums[i + 1]] > maxAmount) {
        maxAmount = keyMap[nums[i + 1]];
        maxTargetNum = +nums[i + 1];
      }
    }
  }

  return maxTargetNum;
}

// 2206. Divide Array Into Equal Pairs
// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.
function divideArray(nums) {
  const sortedNums = nums.sort();

  for (let i = 0; i < sortedNums.length; i += 2) {
    const currElement = sortedNums[i];
    const forwardElement = sortedNums[i + 1];
    if (currElement !== forwardElement) return false;
  }

  return true;
}

// 1550. Three Consecutive Odds
// Given an integer array arr, return true if there are three consecutive
// odd numbers in the array. Otherwise, return false.
function threeConsecutiveOdds(arr) {
  //
  for (let i = 0; i < arr.length - 2; i++) {
    if (allThreeAreOdd(arr[i], arr[i + 1], arr[i + 2])) return true;
  }

  return false;

  function isOdd(num) {
    return num % 2 !== 0;
  }

  function allThreeAreOdd(num1, num2, num3) {
    return isOdd(num1) && isOdd(num2) && isOdd(num3);
  }
}

// 2164. Sort Even and Odd Indices Independently
// You are given a 0-indexed integer array nums. Rearrange the values
// of nums according to the following rules:

// Sort the values at odd indices of nums in non-increasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after.
// The values at odd indices 1 and 3 are sorted in non-increasing order.
// Sort the values at even indices of nums in non-decreasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after.
// The values at even indices 0 and 2 are sorted in non-decreasing order.
// Return the array formed after rearranging the values of nums.
function sortEvenOdd(nums) {
  const odds = nums.filter((_, i) => i % 2 !== 0);
  const evens = nums.filter((_, i) => i % 2 === 0);

  odds.sort((a, b) => b - a);
  evens.sort((a, b) => a - b);

  const r = [];

  for (let i = 0; i < evens.length; i++) {
    r.push(evens[i]);
    if (odds[i] !== undefined) r.push(odds[i]);
  }

  return r;
}

// 14. Longest Common Prefix
// Write a function to find the longest common prefix string
// amongst an array of strings.

// If there is no common prefix, return an empty string "".
function longestCommonPrefix(strs) {
  if (strs.length === 1) return strs[0];

  let r = "";

  for (let i = 0; i < strs[0].length; i++) {
    const checkingChar = strs[0][i];
    const res = strs.every((el) => el[i] === checkingChar);
    if (res) {
      r += checkingChar;
    } else {
      break;
    }
  }

  return r;
}

// 350. Intersection of Two Arrays II
// Given two integer arrays nums1 and nums2, return an array of
// their intersection. Each element in the result must appear as
// many times as it shows in both arrays and you may return the
// result in any order.
function intersect(nums1, nums2) {
  const numMap1 = makeNumFreqMap(nums1);
  const numMap2 = makeNumFreqMap(nums2);

  const r = [];

  for (const k in numMap1) {
    if (!numMap2[k]) continue;
    else {
      const val = +k;
      const numTimes = Math.min(numMap1[k], numMap2[k]);
      for (let i = 0; i < numTimes; i++) r.push(val);
    }
  }

  return r;

  function makeNumFreqMap(numArr) {
    const retMap = {};

    numArr.forEach((num) => {
      retMap[num] ? retMap[num]++ : (retMap[num] = 1);
    });

    return retMap;
  }
}

console.log(
  // ***********************
  intersect([4, 9, 5], [9, 4, 9, 8, 4])
  // ***********************
);
