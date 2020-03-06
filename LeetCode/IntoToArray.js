var pivotIndex = function(nums) {
  let total = nums.reduce((a, b) => a + b, 0);
  let pivotTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((total - nums[i]) / 2 === pivotTotal) {
      return i;
    }
    pivotTotal += nums[i];
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  // get max from nums
  let maxNum = nums.reduce((p, v) => {
    return p > v ? p : v;
  });
  let newNums = nums.filter(el => {
    return el !== maxNum;
  });
  for (let i = 0; i < newNums.length; i++) {
    console.log(i, maxNum, newNums[i] * 2);
    if (maxNum < newNums[i] * 2) {
      return -1;
    }
  }

  return nums.indexOf(maxNum);
};

let plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
