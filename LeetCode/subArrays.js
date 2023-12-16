var checkSubarraySum = function (nums, k) {
  if (nums.length <= 1) return false;
  for (let start = 0; start < nums.length - 1; start++) {
    let currentSum = nums[start];
    for (let end = start + 1; end < nums.length; end++) {
      currentSum += nums[end];
      if (currentSum % k === 0) return true;
    }
  }

  return false;
};

// 2913. Subarrays Distinct Element Sum of Squares I
var sumCounts = function (nums) {
  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    const seen = new Set();
    let distinctCount = 0;

    for (let j = i; j < n; j++) {
      if (!seen.has(nums[j])) {
        seen.add(nums[j]);
        distinctCount += 1;
      }

      result += distinctCount ** 2;
    }
  }

  return result;
};

console.log(
  // ***********************
  sumCounts([1, 2, 1])
  // ***********************
);
