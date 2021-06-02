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

console.log(
  longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"])
);
