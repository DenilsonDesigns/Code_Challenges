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

// 231. Power of Two
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.
function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n % 2 === 0) {
    n = n / 2;
  }
  return n === 1;
}

// 326. Power of Three
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.
function isPowerOfThree(n) {
  if (n < 1) return false;
  while (n % 3 === 0) {
    n = n / 3;
  }
  return n === 1;
}

// 2180. Count Integers With Even Digit Sum
// Given a positive integer num, return the number of positive integers less
// than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.
function countEven(num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (numIsEven(calcDigitSum(i))) count++;
  }

  return count;

  function calcDigitSum(num) {
    return (num + "")
      .split("")
      .map((el) => +el)
      .reduce((acc, el) => acc + el, 0);
  }

  function numIsEven(num) {
    return num % 2 === 0;
  }
}

// 2413. Smallest Even Multiple
// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
function smallestEvenMultiple(n) {
  while (true) {
    if (n % 2 == 0) return n;

    n *= 2;
  }
}

// 2520. Count the Digits That Divide a Number
// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.
function countDigits(num) {
  let r = 0;
  const numArr = (num + "").split("").map((el) => +el);

  numArr.forEach((numEl) => {
    if (num % numEl === 0) r++;
  });

  return r;
}

// 2469. Convert the Temperature
// You are given a non-negative floating point number rounded to two
// decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and
// return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.
function convertTemperature(celsius) {
  const convertToKelvin = (temp) => temp + 273.15;
  const convertToFahrenheit = (temp) => temp * 1.8 + 32.0;

  return [convertToKelvin(celsius), convertToFahrenheit(celsius)];
}

// 2529. Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum
// between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the
// number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.
function maximumCount(nums) {
  let numPos = 0;
  let numNeg = 0;

  nums.forEach((num) => {
    if (num > 0) numPos++;
    if (num < 0) numNeg++;
  });

  return Math.max(numPos, numNeg);
}

// 2441. Largest Positive Integer That Exists With Its Negative
// Given an integer array nums that does not contain any zeros, find the largest positive
// integer k such that -k also exists in the array.

// Return the positive integer k. If there is no such integer, return -1.
function findMaxK(nums) {
  const numMap = {};

  nums.forEach((num) => {
    numMap[num] = true;
  });

  let r = -1;

  nums.forEach((num) => {
    if (numMap[`-${num}`] && num > r) r = num;
  });

  return r;
}

// 2544. Alternating Digit Sum
// You are given a positive integer n. Each digit of n has a sign according to the following rules:

// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.
function alternateDigitSum(n) {
  const splitNum = (n + "").split("");

  const r = splitNum.reduce(
    (acc, el, i) => (i % 2 === 0 ? acc + +el : acc + -el),
    0
  );

  return r;
}

// 2427. Number of Common Factors
var commonFactors = function (a, b) {
  const bottomIterator = Math.min(a, b);
  let r = 0;

  for (let index = 0; index <= bottomIterator; index++) {
    if (a % index === 0 && b % index === 0) r++;
  }

  return r;
};

// 2485. Find the Pivot Integer
var pivotInteger = function (n) {
  let totalSum = 0;
  let remainderSum = 0;

  for (let i = 1; i <= n; i++) {
    totalSum += i;
  }

  for (let i = n; i > 0; i--) {
    remainderSum += i;

    if (totalSum === remainderSum) {
      return i;
    }
    totalSum -= i;
  }

  return -1;
};

// 3099. Harshad Number
var sumOfTheDigitsOfHarshadNumber = function (x) {
  const sumDigs = (x + "")
    .split("")
    .map((x) => +x)
    .reduce((acc, el) => acc + el, 0);

  return x % sumDigs === 0 ? sumDigs : -1;
};

console.log(
  // ***********
  sumOfTheDigitsOfHarshadNumber(4) // 4
  // ***********
);
