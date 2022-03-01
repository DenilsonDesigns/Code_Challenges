// 1833. Maximum Ice Cream Bars

// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars. You are given an array costs
// of length n, where costs[i] is the price of the ith ice cream bar in coins.
// The boy initially has coins coins to spend,
// and he wants to buy as many ice cream bars as possible.

// Return the maximum number of ice cream bars the boy can buy with coins coins.

// Note: The boy can buy the ice cream bars in any order.
/**
 * @param {number[]} costs costs of each ice cream
 * @param {number} coins number of coin day boy got
 * @returns {number} number of ice cream he can got
 */
function maxIceCream(costs, coins) {
  let r = 0;
  // first, sort the costs thing.
  costs.sort((a, b) => a - b);

  for (let i = 0; i < costs.length; i++) {
    if (costs[i] <= coins) {
      r++;
      coins -= costs[i];
    } else {
      // if we dont have money, no point to keep looping.
      break;
    }
  }

  return r;
}

// 2150. Find All Lonely Numbers in the Array
// You are given an integer array nums. A number x is lonely when
// it appears only once, and no adjacent numbers (i.e. x + 1 and x - 1)
// appear in the array.

// Return all lonely numbers in nums. You may return the answer in any order.
function findLonely(nums) {
  const numMap = {};

  nums.forEach((el) => {
    numMap[el] ? numMap[el]++ : (numMap[el] = 1);
  });

  return nums.filter((el) => {
    return numMap[el] === 1 && !numMap[el - 1] && !numMap[el + 1];
  });
}

console.log(findLonely([10, 6, 5, 8]));
