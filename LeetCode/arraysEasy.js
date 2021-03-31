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

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
