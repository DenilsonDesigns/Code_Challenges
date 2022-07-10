// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).
function findMedianSortedArrays(nums1, nums2) {
  const sortedArr = nums1.concat(nums2).sort((a, b) => a - b);

  var half = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2) return sortedArr[half];

  return (sortedArr[half - 1] + sortedArr[half]) / 2.0;
}

console.log(
  // ***
  findMedianSortedArrays([3], [-2, -1])
  // ***
);
