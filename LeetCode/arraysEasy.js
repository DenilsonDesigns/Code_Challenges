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

console.log(maxSubArray([1])); //0
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
