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

console.log(
  // ***
  singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])
  // ***
);
