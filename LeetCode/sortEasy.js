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

console.log(
  // ***
  frequencySort([2, 3, 1, 3, 2])
  // ***
);
