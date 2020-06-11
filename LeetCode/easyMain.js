// 1470 shuffle the array
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let arr1 = nums.slice(0, n);
  let arr2 = nums.slice(n);

  let final = [];

  for (let i = 0; i < arr1.length; i++) {
    final.push(arr1[i]);
    final.push(arr2[i]);
  }

  return final;
};

// 1431 candies
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);

  return candies.map((cand) => {
    return cand + extraCandies >= max;
  });
};

// 1108 defang ip address
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};

// 1342 steps to 0
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;
  let current = num;
  while (current > 0) {
    current % 2 === 0 ? (current = current / 2) : (current = current - 1);
    steps++;
  }

  return steps;
};

// 1365 how many blah blah
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let final = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    final.push(count);
  }
  return final;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
