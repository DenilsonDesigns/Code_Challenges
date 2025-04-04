// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // create a map to store the k/v pair.
  // key is the number itself, value is the index of the number.

  // As looping thru, do a check, to prevent needing to loop thru
  // whole array if we already have a match.
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const lookingFor = target - element;
    if (numMap.hasOwnProperty(lookingFor)) return [numMap[lookingFor], i];

    numMap[element] = i;
  }
};

// 424. Longest Repeating Character Replacement
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let r = k;
  let left = 0;
  let right = 0;
  let maxFreq = 0; // var to store the maxFreq of a char we've seen;

  let map = {};

  while (right < s.length) {
    // add s[right] to map
    map[s[right]] = (map[s[right]] || 0) + 1;
    // now that we've added a char to map, re-calc maxFreq.
    maxFreq = Math.max(maxFreq, map[s[right]]);

    let windowSize = right - left + 1;

    // move left if current window is invalid
    if (windowSize > maxFreq + k) {
      // remove the char on the left from map
      map[s[left]] -= 1;

      // move left:
      left++;
    }

    // each pass, update max window size.
    // if we moved left above, it wont increase
    // will only increase on passes we dont move left.
    r = Math.max(r, right - left + 1);

    // expand window each pass, if we moved left in above, this effectively
    // slides the window, if we didnt move left left, then it expands the
    // window right.
    right++;
  }

  return r;
};

// 15. 3Sum
var threeSum = function (nums) {
  // sort the array first, makes it clear on how to move the pointers.
  nums.sort((a, b) => a - b);

  let result = [];

  // it will be:
  // [-4, -1, -1, 0, 1, 2]

  // skip last 2 in nums, as those places will be taken by left and right
  // pointers
  for (let i = 0; i < nums.length - 2; i++) {
    // skip dupe values for the first number
    if (i < 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    // start the pointers to the right of the current nums[i]
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      // if we have a 3sum:
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // after we have moved the left pointer, make sure its not a dupe
        while (left < right && nums[left] === nums[left - 1]) left++;
        // same with right:
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        // 3sum smaller than 0, so move left to increase value
        left++;
      } else {
        // 3sum greater than 0, so move right in, to reduce 3sum
        right--;
      }
    }
  }

  return result;
};

var quickSort = function (arr) {
  // arr of length 1 or 0 just gets returned out.
  if (arr.length <= 1) return arr;

  let left = [];
  let right = [];
  let equal = [];
  let pivot = arr[Math.floor(arr.length / 2)];

  for (const num of arr) {
    // num goes to left
    if (num < pivot) left.push(num);
    else if (num > pivot) right.push(num);
    else equal.push(num);
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
};

// binary search requires a sorted array to operate on.

// Time is O(log n), as the number of operations reduces as the array is halfed
var binarySearch = function (arr, target) {
  // get left and right;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // get mid
    let midIdx = Math.floor((left + right) / 2);

    // check if we have the element
    if (arr[midIdx] === target) return midIdx;
    // if its smaller than target, check the right half;
    else if (arr[midIdx] < target) left = midIdx + 1;
    // if its larger than target, check left half:
    else right = midIdx - 1;
  }

  return -1;
};

// Sliding window, contiguous subarray.
// Given an array of integers nums and an integer k, find the maximum sum of any contiguous subarray of length k.
var maxSumContinguousSubArray = function (arr, k) {
  if (arr.length < k) return null; // Edge case: If not enough elements, return null

  let maxContiguousSubArray = 0;
  let runningSum = 0;

  // Initialize runningSum with the sum of the first k elements
  for (let i = 0; i < k; i++) {
    runningSum += arr[i];
  }

  // Set maxContiguousSubArray to the initial sum
  maxContiguousSubArray = runningSum;

  let left = 0;

  // Move the window forward
  for (let right = k; right < arr.length; right++) {
    runningSum -= arr[left]; // Remove the element going out of the window
    runningSum += arr[right]; // Add the new element coming into the window
    left++; // Move the left pointer forward

    maxContiguousSubArray = Math.max(maxContiguousSubArray, runningSum);
  }

  return maxContiguousSubArray;
};

console.log(
  // ***
  maxSumContinguousSubArray([1, 3, 5, 7, 9, 11], 2)
  // ***
);
