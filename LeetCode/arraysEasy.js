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

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
); // [2,4,4,4]
