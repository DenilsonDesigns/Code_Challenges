// Number of Squares in an N * N Grid
/**
 * @param {Number} n number of sides
 * @returns {Number} number of squares possible
 */
function numberSquares(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

// Check If It's a Title String
// Check if a string title is a title string or not.
// A title string is one which has all the words in the
// string start with a upper case letter.
/**
 * @param {string} title
 * @returns {boolean} whether or not title is a title-ized string
 */
function checkTitle(title) {
  for (let word of title.split(" ")) {
    if (word[0] !== word[0].toUpperCase()) return false;
  }
  return true;
}

function isTrue(relation) {
  return eval(relation.replace("=", "=="));
}

// Even or Odd: Which is Greater?
// Create a function to determine if the sum of all
// the individual even digits are greater than the sum
// of all the indiviudal odd digits in a string of numbers.
/**
 * @param {String} str string of digits
 * @returns {String} string explaining if sum of evens or odds are greater
 */
function evenOrOdd(str) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let num of str.split("")) {
    let currNum = parseInt(num);
    if (currNum % 2 === 0) sumEven += currNum;
    else sumOdd += currNum;
  }

  if (sumEven === sumOdd) return "Even and Odd are the same";
  if (sumOdd > sumEven) return "Odd is greater than Even";
  else return "Even is greater than Odd";
}

// Hold Your Breath!
// You will be given an array of numbers which represent your character's altitude above sea level at regular intervals:

// Positive numbers represent height above the water.
// 0 is sea level.
// Negative numbers represent depth below the water's surface.
/**
 * @param {Number[]} arr array of sea levels
 * @returns {boolean} boolean describing whether or not character survives
 */
function divingMinigame(arr) {
  let currBreath = 10;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) currBreath -= 2;
    else currBreath = Math.min((currBreath += 4), 10);

    if (currBreath <= 0) return false;
  }
  return true;
}

// Emotify the Sentence
/**
 * @param {String} str
 * @returns {String} emotified string
 */
function emotify(str) {
  let emoMap = {
    smile: ":D",
    grin: ":)",
    sad: ":(",
    mad: ":P",
  };

  let wordArr = str.split(" ");

  wordArr[2] = emoMap[wordArr[2]];

  return wordArr.join(" ");
}

// What's Hiding Amongst the Crowd?
// A word is on the loose and now has tried to hide amongst a crowd
// of tall letters! Help write a function to detect what the word is,
// knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters,
// but their letters remain in the same order.
/**
 * @param {String} str
 * @returns {String} filtered word of lowercase letters.
 */
function detectWord(str) {
  let filtWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) filtWord += str[i];
  }

  return filtWord;
  // cleanest
  //   return [...str].filter(c => c.toLowerCase()===c).join('')
}

// Slightly Superior
// You will be given two extremely similar arrays,
// but exactly one of the items in an array will be valued
// slightly higher than its counterpart (which means that
// evaluating the value > the other value will return true).
/**
 * @param {[]} arr1 array of items
 * @param {[]} arr2 array of items
 * @returns {boolean} true if arr1 is slightly bigger than arr2
 */
function isFirstSuperior(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) return true;
  }
  return false;
}

// Sum of Resistance in Series Circuits
/**
 * @param {Number[]} arr array of ressistance
 * @returns {String} string representation of the ohms output
 */
function seriesResistance(arr) {
  let ohmSum = arr.reduce((a, b) => a + b, 0);
  let ohmWord;
  ohmSum <= 1 ? (ohmWord = "ohm") : (ohmWord = "ohms");
  return `${ohmSum} ${ohmWord}`;
}

// Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.
/**
 * @param {String} str
 * @returns {Number} number of potatoes in the string
 */
function potatoes(str) {
  return str.split("potato").length - 1;
}

// Highest Digit
/**
 * @param {Number} number
 * @returns {Number} highest digit in number
 */
function highestDigit(number) {
  let highest = 0;
  let strNum = number + "";

  for (let i = 0; i < strNum.length; i++) {
    let convNum = parseInt(strNum[i]);
    if (convNum > highest) highest = convNum;
  }

  return highest;
}

function flip(y) {
  return Math.abs(y - 1);
}

console.log(highestDigit(7495037));
