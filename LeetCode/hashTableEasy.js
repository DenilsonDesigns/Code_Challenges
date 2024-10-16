// 1207. Unique Number of Occurrences

// Given an array of integers arr, write a function
// that returns true if and only if the number of occurrences of
// each value in the array is unique.
/**
 * @param {number[]} arr
 * @returns {boolean} are number of occurrences unique?
 */
function uniqueOccurrences(arr) {
  let setArrLen = [...new Set(arr)].length;

  let occMap = {};

  for (let i = 0; i < arr.length; i++) {
    occMap[arr[i]] ? occMap[arr[i]]++ : (occMap[arr[i]] = 1);
  }

  let occValsLen = [...new Set(Object.values(occMap))].length;

  return occValsLen === setArrLen;
}

// 3146 Permutation Difference between two strings
var findPermutationDifference = function (s, t) {
  // first hashtable
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    const char1 = s[i];
    const char2 = t[i];

    map1.set(char1, i);
    map2.set(char2, i);
  }

  let r = 0;

  for (let [key, value] of map1.entries()) {
    r += Math.abs(value - map2.get(key));
  }

  return r;
};

console.log(
  // ***
  findPermutationDifference("abc", "bac")
  // ***
);
