// How Much is True?
/**
 *
 * @param {Boolean[]} arr
 * @returns {Number} nuber of true elements
 */
function countTrue(arr) {
  return arr.filter((el) => el).length;
}

// Array of Multiples
/**
 *
 * @param {Number} num
 * @param {Number} length
 * @returns {Number[]} array of nums
 */
function arrayOfMultiples(num, length) {
  let r = [];
  for (let i = 1; i < length + 1; i++) {
    r.push(num * i);
  }

  return r;
}

// Concatenate Variable Number of Input Arrays
/**
 *
 * @param  {...any} args
 * @returns {Number[]} array of numbers
 */
function concat(...args) {
  return [...args].flat();
}

// Converting Objects to Arrays
/**
 *
 * @param {*} obj
 * @returns {Array[]}
 */
function toArray(obj) {
  let r = [];
  for (const [key, value] of Object.entries(obj)) {
    r.push([key, value]);
  }

  return r;
}

// Convenience Store
/**
 *
 * @param {*} change
 * @param {*} amountDue
 * @returns {Boolean}
 */
function changeEnough(change, amountDue) {
  // 	quarter: 25 cents / $0.25
  // dime: 10 cents / $0.10
  // nickel: 5 cents / $0.05
  // penny: 1 cent / $0.01
  let currMap = {
    0: 0.25,
    1: 0.1,
    2: 0.05,
    3: 0.01,
  };

  // just loop through from quarter -> penny to see if we can get to nada.

  for (let coinType in change) {
    console.log(coinType);
    for (let curr = change[coinType]; curr > 0; curr--) {
      //   console.log(curr);
      if (amountDue > currMap[coinType] && amountDue - currMap[coinType] > 0)
        amountDue -= currMap[coinType];
      console.log(amountDue);
    }
  }

  return amountDue < 0.1 ? true : false;
}

console.log(changeEnough([10, 0, 0, 50], 3.85)); //false
