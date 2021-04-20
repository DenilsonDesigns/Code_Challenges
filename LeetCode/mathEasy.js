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

// 1281. Subtract the Product and Sum of Digits of an Integer
// Given an integer number n, return the difference between
// the product of its digits and the sum of its digits.

function subtractProductAndSum(n) {
  let s = 0;
  let p = 1;

  let digits = n
    .toString()
    .split("")
    .map((el) => parseInt(el));

  for (let i = 0; i < digits.length; i++) {
    p *= digits[i];
    s += digits[i];
  }

  return p - s;
}

// 1323. Maximum 69 Number
// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most
// one digit (6 becomes 9, and 9 becomes 6).
function maximum69Number(num) {
  // turn to string then split it and turn it back.
  let numStrArr = num.toString().split("");

  for (let i = 0; i < numStrArr.length; i++) {
    if (numStrArr[i] === "6") {
      numStrArr[i] = "9";
      break;
    }
  }

  return parseInt(numStrArr.join(""));
}

console.log(maximum69Number(9669)); // 9969
