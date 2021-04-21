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
  let operations = 0;
  // loop through, if nums[i] is not greater than nums[-1]
  // changes nums[i] in place to be nums[i-1] +1 and
  // add to operations: (nums[i-1] +1) - nums[i]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      operations += nums[i - 1] + 1 - nums[i];
      nums[i] = nums[i - 1] + 1;
    }
  }

  return operations;
}

console.log(minOperations([1, 5, 2, 4, 1]));
