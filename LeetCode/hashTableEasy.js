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

console.log(uniqueOccurrences([1, 2]));
