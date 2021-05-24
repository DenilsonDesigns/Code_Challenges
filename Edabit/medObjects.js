// Convert Key, Values in an Object to Array
/**
 *
 * @param {Object} obj
 * @returns {Array[]}
 */
function objectToArray(obj) {
  return Object.entries(obj);
}

// Return the Objects Keys and Values
/**
 *
 * @param {Object} obj
 * @returns {Array[]}
 */
function keysAndValues(obj) {
  // Time: O(2n) => O(n)
  // Space: O(2n) => O(n)
  let keyArr = [];
  for (let [k, v] of Object.entries(obj)) {
    keyArr.push(k);
  }
  keyArr.sort();

  let valArr = [];

  for (let val of keyArr) {
    valArr.push(obj[val]);
  }

  return [keyArr, valArr];
  //   Clean ***
  //   var keys = Object.keys(obj);
  //   return [keys, keys.map((key) => obj[key])];
}

// Burglary Series (04): Add its Name
/**
 *
 * @param {Object} obj
 * @param {String} name
 * @param {Number} value
 * @returns {Object}
 */
function addName(obj, name, value) {
  obj[name] = value;
  return obj;
  // Nice de-structuring
  // return {...obj, [name]: value}
}

// Get Sum of People's Budget
/**
 *
 * @param {Object[]} arr
 * @returns {Number}
 */
function getBudgets(arr) {
  return arr.reduce((acc, el) => el["budget"] + acc, 0);
}

// Burglary Series (02): Most Valuable Item
/**
 *
 * @param {Object} obj
 * @returns {String}
 */
function mostExpensiveItem(obj) {
  // Time: O(n)
  // Space: O(2) => O(1)
  let highestVal = 0;
  let nameHighest = "";

  for (let [k, v] of Object.entries(obj)) {
    if (v > highestVal) {
      highestVal = v;
      nameHighest = k;
    }
  }
  return nameHighest;
}

// Online Shopping
/**
 *
 * @param {Object} order
 * @returns {Boolean}
 */
function freeShipping(order) {
  return Object.values(order).reduce((acc, el) => el + acc, 0) > 50;
}

// Burglary Series (01): Calculate Total Losses
/**
 *
 * @param {*} obj
 */
function calculateLosses(obj) {
  let items = Object.values(obj);
  if (items.length === 0) return "Lucky you!";
  return items.reduce((acc, el) => el + acc, 0);
}

// Ageing the Population...
/**
 *
 * @param {} names
 * @param {*} n
 */
function afterNYears(names, n) {
  let absN = Math.abs(n);

  for (let [k, v] of Object.entries(names)) {
    names[k] += absN;
  }

  return names;
}

// Is it an Object?
/**
 *
 * @param {Thing} value
 * @returns {Boolean}
 */
function isObject(value) {
  return value instanceof Object;
}

// Expensive Orders
/**
 *
 * @param {Object} orders
 * @param {Number} cost
 * @returns {Object}
 */
function expensiveOrders(orders, cost) {
  let asArray = Object.entries(orders);
  let filtered = asArray.filter(([k, v]) => v > cost);
  return Object.fromEntries(filtered);
}

// Burglary Series (22): Sign All
/**
 *
 * @param {Object} obj
 * @param {String} name
 */
function signAll(obj, name) {
  for (let key of Object.keys(obj)) {
    if (key === "signature") obj[key] = name;
    else {
      for (let key2 of Object.keys(obj[key])) {
        if (key2 === "signature") {
          obj[key][key2] = name;
        }
      }
    }
  }
  return obj;
}

const obj234 = {
  bathroom: {
    stereo: 220,
    signature: "",
  },
  cellar: {
    mirror: 10,
    broom: 90,
    signature: "",
  },
  signature: "",
};

// Burglary Series (08): Remove an Entry
function removeEntry(obj, itemName) {
  let newObj = { ...obj };
  delete newObj[itemName];
  return newObj;
}

// Burglary Series (03): Is It Gone?
/**
 *
 * @param {Object} obj
 * @param {String} name
 * @returns {String}
 */
function findIt(obj, name) {
  const finalName = name.charAt(0).toUpperCase() + name.slice(1);
  if (name in obj) {
    return `${finalName} is gone...`;
  }

  return `${finalName} is here!`;
}

// Lowercase and Uppercase Map
/**
 *
 * @param {String[]} letters
 * @returns {Object}
 */
function mapping(letters) {
  let rMap = {};

  letters.forEach((char) => {
    rMap[char] = char.toUpperCase();
  });

  return rMap;
}

// Invert Keys and Values
/**
 *
 * @param {Object} o
 * @returns {Object}
 */
function invert(o) {
  let rMap = {};
  for (let [k, v] of Object.entries(o)) {
    rMap[v] = k;
  }

  return rMap;
}

// Count the Letters and Digits
/**
 *
 * @param {String} str
 * @returns {Object}
 */
function countAll(str) {
  let rMap = {
    LETTERS: 0,
    DIGITS: 0,
  };

  str.split("").forEach((char) => {
    if (char === " ") return;
    else Object.is(parseInt(char), NaN) ? rMap["LETTERS"]++ : rMap["DIGITS"]++;
  });

  return rMap;
}

// Learn Lodash (14) _.countBy, Count Items in an Array
/**
 *
 * @param {Array[Object]} collection
 * @param {String} iteratee
 * @returns {Object}
 */
function countByValue(collection, iteratee) {
  let rMap = {};

  collection.forEach((element) => {
    rMap[element[iteratee]]
      ? rMap[element[iteratee]]++
      : (rMap[element[iteratee]] = 1);
  });

  return rMap;
}

// Burglary Series (06): Convert to Number
/**
 *
 * @param {Object} obj
 * @returns {Object}
 */
function convertToNumber(obj) {
  for (let [k, v] of Object.entries(obj)) {
    obj[k] = parseInt(v);
  }
  return obj;
}

// Burglary Series (15): Number of Occurrences
/**
 *
 * @param {Object} obj
 * @returns {Object}
 */
function countNumberOfOccurrences(obj) {
  let rMap = {};

  for (let v of Object.values(obj)) {
    rMap[v] ? rMap[v]++ : (rMap[v] = 1);
  }

  return rMap;
}

// Burglary Series (09): Filter Values
/**
 *
 * @param {Object} obj
 * @returns {Object}
 */
function filterValues(obj) {
  let rMap = {};
  for (let [k, v] of Object.entries(obj)) {
    if (v >= 5000) rMap[k] = v;
  }

  return rMap;
}

// International Greetings
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};
function greeting(name) {
  if (!GUEST_LIST[name]) return "Hi! I'm a guest.";
  return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
}

// Who's The Oldest?
/**
 *
 * @param {Object} people
 * @returns {String}
 */
function oldest(people) {
  let asArr = Object.entries(people).sort((a, b) => b[1] - a[1]);
  return asArr[0][0];
}

// Leaderboard Sort
/**
 *
 * @param {Array[Object]} users
 * @returns {Array[Object]}
 */
function leaderboards(users) {
  return users.sort((a, b) => getTrustScore(b) - getTrustScore(a));
}

function getTrustScore(userObj) {
  return userObj["score"] + userObj["reputation"] * 2;
}

console.log(
  leaderboards([
    { name: "a", score: 100, reputation: 20 },
    { name: "b", score: 90, reputation: 40 },
    { name: "c", score: 115, reputation: 30 },
  ])
);
