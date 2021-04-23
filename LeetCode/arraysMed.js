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

console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5));
