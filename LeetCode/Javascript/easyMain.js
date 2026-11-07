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

function twoSum(nums, target) {
  // *** Naive solution:
  // loop through nums.
  // let leftIdx = 0 + 1;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = leftIdx; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  //   leftIdx++;
  // }
  // return [];
  // passes, results:
  //   Runtime: 76 ms, faster than 82.26% of JavaScript online submissions for Two Sum.
  // Memory Usage: 38.6 MB, less than 89.40% of JavaScript online submissions for Two Sum.
  // *****************************************************
  // *** Trying to optimize.
  // let numTab = {};
  // for (const num of nums) {
  //   if (targetSum - num in numTab) {
  //     return [targetSum - num, num];
  //   } else {
  //     numTab[num] = true;
  //   }
  // }
  // return [];

  let numTable = {};
  for (let i = 0; i < nums.length; i++) {
    numTable[nums[i]] = i;
    console.log(numTable);
    if (target - nums[i] + "" in numTable) {
      console.log("i", nums[i]);
      console.log("hit", numTable[nums[i]]);
      return [numTable[target - nums[i]], i];
    }
  }
  return [];
}

function reverse(x) {
  let neg = false;
  (x + "")[0] === "-" ? (neg = true) : (neg = false);
  let reversedNum;
  neg ? (reversedNum = -reverseNum(x)) : (reversedNum = reverseNum(x));

  if (Math.abs(reversedNum) > 0x7fffffff) {
    return 0;
  }
  return reversedNum;

  function reverseNum(num) {
    return parseInt((num + "").split("").reverse().join(""));
  }
}

function isPalindrome(x) {
  return (x + "").split("").reverse().join("") === x + "";
}

console.log(isPalindrome(-121)); // [0, 1]
console.log(isPalindrome(121)); // [1, 2]
