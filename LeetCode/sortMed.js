// *** MERGE SORT ***
/**
 * - Merge sort makes sense for large datasets with stability needs.
 * - O(n log n) => grows in accordance with n as a multiple, but is better
 * - than O(n2)
 *
 */

// 912. Sort an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (arr) {
  // if arr is length 1 or 0, no need to sorted (its already sorted.)
  //   console.log(arr);
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = sortArray(arr.slice(0, mid));
  let right = sortArray(arr.slice(mid));

  return merge(left, right);

  function merge(left, right) {
    let sortedArr = [];
    let i = 0,
      j = 0;

    // Merge two sorted arrays
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        sortedArr.push(left[i]);
        i++;
      } else {
        sortedArr.push(right[j]);
        j++;
      }
    }

    // Append remaining elements (if any)
    sortedArr = sortedArr.concat(left.slice(i)).concat(right.slice(j));
    return sortedArr;
  }
};

console.log(
  // ***
  sortArray([26, 21, 11, 20, 50, 34, 1, 18, 1])
  // ***
);
