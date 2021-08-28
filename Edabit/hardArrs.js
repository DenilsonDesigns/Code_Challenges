// Seven Boom!
/**
 *
 * @param {Number[]} arr
 * @returns {String}
 */
function sevenBoom(arr) {
  for (num of arr) {
    if ((num + "").split("").includes("7")) return "Boom!";
  }

  return "there is no 7 in the array";
}

// Number of Boomerangs
/**
 *
 * @param {} arr
 * @returns
 */
function countBoomerangs(arr) {
  let boomers = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) boomers++;
  }
  return boomers;
}

// Longest Word in a 7 Segment Display
/**
 *
 * @param {String[]} arr
 * @return {String}
 */
function longest7SegmentWord(arr) {
  const noDice = ["k", "m", "v", "w", "x"];

  let longestWord = "";

  for (const word of arr) {
    let acceptable = true;
    for (const letter of word) {
      if (noDice.includes(letter)) acceptable = false;
    }
    if (word.length > longestWord.length && acceptable) longestWord = word;
  }

  return longestWord;
}

// Numbers in Strings
/**
 *
 * @param {String[]} arr
 * @returns {String[]}
 */
function numInStr(arr) {
  const r = new Set();

  for (const str of arr) {
    for (const letter of str) {
      if (Number(letter)) {
        r.add(str);
      }
    }
  }

  return [...r];
}

// Who Left the Array?
// You are given two arrays. The elements in arr1 threw a party and started to mix around.
// However, one of the elements got lost! Your task is to return the element which was lost.
function missing(arr1, arr2) {
  // Time: O(n)
  // Space: O(1)
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) return arr1[i];
  }

  return arr1[arr1.length - 1];
}

// Pluralize!
// Given a list of words in the singular form,
// return a set of those words in the plural form if they appear more than once in the list.
function pluralize(arr) {
  // Time: O(2n) => O(n)
  // Space: O(n)
  let wordMap = {};

  arr.forEach((word) => {
    wordMap[word] ? wordMap[word]++ : (wordMap[word] = 1);
  });

  const r = [];

  for (let [k, v] of Object.entries(wordMap)) {
    v > 1 ? r.push(k + "s") : r.push(k);
  }

  return r;
}

console.log(
  // **
  pluralize(["cow", "pig", "cow", "cow"])
  // **
);
