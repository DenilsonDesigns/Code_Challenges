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

// 2284. Sender With Largest Word Count
// You have a chat log of n messages. You are given two string arrays messages and
// senders where messages[i] is a message sent by senders[i].

// A message is list of words that are separated by a single space with no leading
// or trailing spaces. The word count of a sender is the total number of words sent
// by the sender. Note that a sender may send more than one message.

// Return the sender with the largest word count. If there is more than one sender
// with the largest word count, return the one with the lexicographically largest name.
function largestWordCount(messages, senders) {
  const userWordCount = {};
  let currWinningUser = "";
  let currWinningCount = 0;

  for (let i = 0; i < messages.length; i++) {
    const messageWordCount = messages[i].split(" ").length;
    const sender = senders[i];

    userWordCount[sender]
      ? (userWordCount[sender] += messageWordCount)
      : (userWordCount[sender] = messageWordCount);
  }

  for (const [k, v] of Object.entries(userWordCount)) {
    if (v > currWinningCount) {
      currWinningUser = k;
      currWinningCount = v;
      continue;
    }

    if (v === currWinningCount && k > currWinningUser) {
      currWinningUser = k;
    }
  }

  return currWinningUser;
}

console.log(
  // ***
  largestWordCount(
    [
      "tP x M VC h lmD",
      "D X XF w V",
      "sh m Pgl",
      "pN pa",
      "C SL m G Pn v",
      "K z UL B W ee",
      "Yf yo n V U Za f np",
      "j J sk f qr e v t",
      "L Q cJ c J Z jp E",
      "Be a aO",
      "nI c Gb k Y C QS N",
      "Yi Bts",
      "gp No g s VR",
      "py A S sNf",
      "ZS H Bi De dj dsh",
      "ep MA KI Q Ou",
    ],
    [
      "OXlq",
      "IFGaW",
      "XQPeWJRszU",
      "Gb",
      "HArIr",
      "Gb",
      "FnZd",
      "FnZd",
      "HArIr",
      "OXlq",
      "IFGaW",
      "XQPeWJRszU",
      "EMoUs",
      "Gb",
      "EMoUs",
      "EMoUs",
    ]
  )
  // ***
);
