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

console.log(
  afterNYears(
    {
      Joel: 32,
      Fred: 44,
      Reginald: 65,
      Susan: 33,
      Julian: 13,
    },
    1
  )
);
