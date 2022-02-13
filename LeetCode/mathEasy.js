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

// 1688. Count of Matches in Tournament
// You are given an integer n, the number of teams in a
// tournament that has strange rules:

// If the current number of teams is even, each team gets paired
// with another team. A total of n / 2 matches are played, and n / 2
// teams advance to the next round.
// If the current number of teams is odd, one team randomly advances
// in the tournament, and the rest gets paired.
// A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1
// teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.
/**
 * @param {number} n number of teams in the tourney
 * @returns {number} number of
 */
function numberOfMatches(n) {
  let matches = 0;

  while (n > 1) {
    if (n % 2 === 0) {
      matches += n / 2;
      n = n / 2;
    } else {
      matches += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    }
  }

  return matches;
}

// 2119. A Number After a Double Reversal
// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1,
// then reverse reversed1 to get reversed2.
// Return true if reversed2 equals num. Otherwise return false.
function isSameAfterReversals(num) {
  const reverseNum = (n) => +(n + "").split("").reverse().join("");
  let reversedNum = reverseNum(num);
  let reReversedNum = reverseNum(reversedNum);

  return reReversedNum === num;

  // really clever way:
  // if(num == 0)    return true;
  // if(num % 10 == 0)   return false;
  // return true;
}

// 412. Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
function fizzBuzz(n) {
  return Array.from(new Array(n), (_, i) => i + 1).map((el) => {
    return el % 5 === 0 && el % 3 === 0
      ? "FizzBuzz"
      : el % 3 === 0
      ? "Fizz"
      : el % 5 === 0
      ? "Buzz"
      : el + "";
  });
}

// 258. Add Digits
// Given an integer num, repeatedly add all its digits
// until the result has only one digit, and return it.
function addDigits(num) {
  let currDigit = num + "";

  while (currDigit.length > 1) {
    currDigit = currDigit.split("").reduce((acc, el) => acc + +el, 0) + "";
  }

  return +currDigit;
}

console.log(
  // ***********
  addDigits(382)
  // ***********
);
