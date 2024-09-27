// 1528. Shuffle String
function restoreString(s, indices) {
  // Time: O(n) | Space: O(n)
  let r = new Array(s.length);

  for (let i = 0; i < indices.length; i++) {
    r[indices[i]] = s[i];
  }

  return r.join("");
}

// 2724. Sort By
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

// 1636. Sort Array by Increasing Frequency
var frequencySort = function (nums) {
  const freqMap = new Map();

  nums.forEach((element) => {
    if (freqMap.has(element)) {
      freqMap.set(element, freqMap.get(element) + 1);
    } else {
      freqMap.set(element, 1);
    }
  });

  return nums.sort((a, b) => {
    const freqA = freqMap.get(a);
    const freqB = freqMap.get(b);

    if (freqA === freqB) {
      return b - a;
    }

    return freqA - freqB;
  });
};

// 40. Single Element in a Sorted Array
var singleNonDuplicate = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const evenMid = mid - (mid % 2);
    const needle = nums[evenMid];
    const leftOfNeedle = nums[evenMid - 1];
    const rightOfNeedle = nums[evenMid + 1];

    if (needle === rightOfNeedle) {
      low = mid + 1;
      continue;
    }
    if (needle === leftOfNeedle) {
      high = mid - 1;
      continue;
    }

    return needle;
  }
};

// 1122. Relative Sort Array
var relativeSortArray = function (arr1, arr2) {
  const orderMap = new Map();

  arr2.forEach((element, index) => {
    orderMap.set(element, index);
  });

  return arr1.sort((a, b) => {
    const orderA = orderMap.get(a);
    const orderB = orderMap.get(b);

    // If both elements are in arr2, sort them based on their relative order
    if (orderA !== undefined && orderB !== undefined) {
      return orderA - orderB;
    }

    // If one element is in arr2 and the other is not, place the one in arr2 first
    if (orderA !== undefined) {
      return -1;
    }

    // If one element is in arr1 and not in arr2, place it last.
    if (orderB !== undefined) {
      return 1;
    }

    // If both elements are not in arr2, sort them in ascending order
    return a - b;
  });
};

// 2540. Minimum Common Value
var getCommon = function (nums1, nums2) {
  const setNum1 = new Set(nums1);

  for (let i = 0; i < nums2.length; i++) {
    const element = nums2[i];

    if (setNum1.has(element)) {
      return element;
    }
  }

  return -1;
};

console.log(
  // ***
  relativeSortArray([26, 21, 11, 20, 50, 34, 1, 18], [21, 11, 26, 20])
  // ***
);
