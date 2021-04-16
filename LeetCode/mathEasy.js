// 1822. Sign of the Product of an Array

// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).
/**
 *
 * @param {array[]} nums
 * @returns {number} expressing the sign of the product
 */
function arraySign(nums) {
  // This works but not with massive nums (BigInt)
  let prod = 1;

  for (let i = 0; i < nums.length; i++) {
    prod *= nums[i];
  }

  return prod === 0 ? 0 : prod > 0 ? 1 : -1;
}

console.log();
