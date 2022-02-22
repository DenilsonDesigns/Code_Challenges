// 1704. Determine if String Halves Are Alike

// You are given a string s of even length.
// Split this string into two halves of equal lengths,
// and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of
// vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').
// Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

function halvesAreAlike(s) {
  // Time: O(n) | Space O(1)

  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };

  // just need to find a half point.
  let firstHalfVowels = 0;
  let secondHalfVowels = 0;

  let midPoint = s.length / 2 - 1;

  for (let i = 0; i < s.length; i++) {
    if (vowels[s[i]]) {
      if (i <= midPoint) firstHalfVowels++;
      else secondHalfVowels++;
    }
  }
  return firstHalfVowels === secondHalfVowels;
}

// 1221. Split a String in Balanced Strings
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.
/**
 * @param {string} s Chain of R's and L's
 * @returns {number} count of balanced strings.
 */
function balancedStringSplit(s) {
  // Time: O(n) | Space: O(4) => O(1)
  let r = 0;

  let leftIdx = 0;
  let rCount = 0;
  let lCount = 0;
  while (leftIdx < s.length) {
    if (s[leftIdx] === "R") {
      rCount++;
    } else if (s[leftIdx] === "L") {
      lCount++;
    }

    if (rCount > 0 && rCount === lCount) {
      r++;
      lCount = 0;
      rCount = 0;
    }

    leftIdx++;
  }

  return r;
}

// 1662. Check If Two String Arrays are Equivalent
// Given two string arrays word1 and word2,
// return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements
// concatenated in order forms the string.
/**
 * @param {array[strings]} word1
 * @param {array[strings]} word2
 * @returns {boolean} true/false if joined stringified word1 and
 * word2 are equivalent.
 */
function arrayStringsAreEqual(word1, word2) {
  return word1.join("") === word2.join("");
}

// 1614. Maximum Nesting Depth of the Parentheses
// A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.
/**
 *
 * @param {string} s
 * @returns {number} integer represention max depth of bracket nesting.
 */
function maxDepth(s) {
  // Time: O(n) | Space: O(2) => O(1)
  let maxDepth = 0;
  let currDepth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") currDepth++;
    if (s[i] === ")") currDepth--;
    if (currDepth > maxDepth) maxDepth = currDepth;
  }

  return maxDepth;
}

// 1684. Count the Number of Consistent Strings
// You are given a string allowed consisting of distinct characters
// and an array of strings words. A string is consistent
// if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.
/**
 *
 * @param {string} allowed contains allowable letters
 * @param {array[string]} words
 * @returns {integer} count of allowable words
 */
function countConsistentStrings(allowed, words) {
  // Works but slow.
  // Time: O(n^2) atleast? | Space: O(1)
  // let count = 0;

  // for (let i = 0; i < words.length; i++) {
  //   if (words[i].split("").every((char) => allowed.includes(char))) count++;
  // }

  // return count;
  // *** Try the map style
  let allowMap = {};
  let count = 0;
  for (let i = 0; i < allowed.length; i++) {
    allowMap[allowed[i]] = true;
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").every((char) => allowMap[char])) count++;
  }
  return count;
}

// 1436. Destination City
// You are given the array paths, where paths[i] = [cityAi, cityBi]
// means there exists a direct path going from cityAi to cityBi.
// Return the destination city, that is, the city without any path
// outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop,
// therefore, there will be exactly one destination city.
/**
 * @param {array[array]} paths destination pairs.
 * @returns {string} name of destination city.
 */
function destCity(paths) {
  // Time: O(2n) => O(n) | Space: O(n)
  let startPaths = {};

  for (let i = 0; i < paths.length; i++) {
    startPaths[paths[i][0]] = true;
  }

  for (let i = 0; i < paths.length; i++) {
    // startPaths[paths[i][0]] = true;
    if (!startPaths[paths[i][1]]) {
      return paths[i][1];
    }
  }
}

// 1816. Truncate Sentence
// A sentence is a list of words that are separated by a single space
// with no leading or trailing spaces. Each of the words consists of
// only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that
// it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
/**
 * @param {string} s the string to be truncated
 * @param {number} k number of words to return
 * @returns {string} string of s truncated to only contain k number of words
 */
function truncateSentence(s, k) {
  // we need to split? that adds time.
  // perhaps we can loop through string, and slice it after k amount of spaces?

  // I thought this was pretty clever, but its slow.
  // let spaces = 0;
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === " " || i === s.length - 1) spaces++;
  //   if (spaces === k && spaces > 0) {
  //     return s.slice(0, i + 1).trim();
  //   }
  // }
  // ***
  // Still really slow.
  // let words = s.split(" ");
  // let r = "";

  // for (let i = 0; i < k; i++) {
  //   r += words[i] + " ";
  // }

  // return r.trim();
  // *** faster one from leetcode.
  let arr = s.split(" ");
  let newStr = [];
  for (let i = 0; i < k; i++) {
    newStr.push(arr[i]);
  }
  return newStr.join(" ");
}

// 1678. Goal Parser Interpretation
// You own a Goal Parser that can interpret a string command.
// The command consists of an alphabet of "G", "()" and/or "(al)"
// in some order. The Goal Parser will interpret "G" as the string "G",
// "()" as the string "o", and "(al)" as the string "al".
// The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.
/**
 * @param {string} command string of stuff to be parsed
 * @returns {string} parsed string
 */
function interpret(command) {
  // Time: O(n) | Space: O(n?)
  let retArr = [];

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") {
      retArr.push("G");
      continue;
    }
    if (command[i] === "(" && command[i + 1] === ")") {
      retArr.push("o");
      continue;
    }

    if (command[i] === "(" && command[i + 1] === "a") {
      retArr.push("al");
      continue;
    }
  }

  return retArr.join("");
}

// 1832. Check if the Sentence Is Pangram
// A pangram is a sentence where every letter of the English alphabet
// appears at least once.

// Given a string sentence containing only lowercase English letters,
// return true if sentence is a pangram, or false otherwise.
/**
 * @param {string} sentence
 * @returns {boolean}
 */
function checkIfPangram(sentence) {
  // Time: O(3n?) => O(n) | Space: O(n)
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let compStr = [...new Set(sentence.split(""))].sort().join("");

  return alpha === compStr;
}

// 1768. Merge Strings Alternately
// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order,
// starting with word1. If a string is longer than the other,
// append the additional letters onto the end of the merged string.

// Return the merged string.
/**
 *
 * @param {string} word1
 * @param {string} word2
 * @returns {string} merged string of word1 and word2
 */
function mergeAlternately(word1, word2) {
  let wLength = Math.max(word1.length, word2.length);
  let r = "";

  for (let i = 0; i < wLength; i++) {
    if (word1[i]) r += word1[i];
    if (word2[i]) r += word2[i];
  }
  return r;
}

// 1812. Determine Color of a Chessboard Square
// You are given coordinates, a string that represents
// the coordinates of a square of the chessboard.
// Below is a chessboard for your reference.
/**
 * @param {string} coordinates a coord on the chess board
 * @returns {boolean} whether square is white or not
 */
function squareIsWhite(coordinates) {
  const letMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  let sqSum = coordinates.split("");
  sqSum[0] = letMap[sqSum[0]];
  sqSum[1] = parseInt(sqSum[1]);
  return (sqSum[0] + sqSum[1]) % 2 !== 0;
}

// 1309. Decrypt String from Alphabet to Integer Mapping
// Given a string s formed by digits ('0' - '9') and '#'.
// We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.
/**
 * @param {string} s hashed string
 * @returns {string} mapped string
 */
function freqAlphabets(s) {
  let strMap = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    "10#": "j",
    "11#": "k",
    "12#": "l",
    "13#": "m",
    "14#": "n",
    "15#": "o",
    "16#": "p",
    "17#": "q",
    "18#": "r",
    "19#": "s",
    "20#": "t",
    "21#": "u",
    "22#": "v",
    "23#": "w",
    "24#": "x",
    "25#": "y",
    "26#": "z",
  };

  let i = s.length - 1;

  let r = "";

  while (i >= 0) {
    if (s[i] === "#") {
      r = strMap[`${s[i - 2]}${s[i - 1]}${s[i]}`] + r;
      i -= 3;
    } else {
      r = strMap[s[i]] + r;
      i--;
    }
  }

  return r;
}

// 944. Delete Columns to Make Sorted
// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line,
// making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:

// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically.
// In the above example (0-indexed), columns 0 ('a', 'b', 'c')
// and 2 ('c', 'e', 'e') are sorted while column 1 ('b', 'c', 'a') is not,
// so you would delete column 1.

// Return the number of columns that you will delete.
/**
 * @param {*} strs
 * @returns {number} amount of columns that need to be deleted.
 */
function minDeletionSize(strs) {
  let indexes = new Set();

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] < strs[i - 1][j]) {
        indexes.add(j);
      }
    }
  }
  return indexes.size;
}

// 500. Keyboard Row
// Given an array of strings words, return the words that can
// be typed using letters of the alphabet on only one row of
// American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".
/**
 * @param {string[]} words array of strings to check
 * @returns {string[]} array of words that can be typed on only one row.
 */
function findWords(words) {
  let r = [];

  let firstRow = "qwertyuiop";
  let secondRow = "asdfghjkl";
  let thirdRow = "zxcvbnm";

  for (let i = 0; i < words.length; i++) {
    let chars = words[i].split("");

    [firstRow, secondRow, thirdRow].forEach((row) => {
      if (chars.every((char) => row.includes(char.toLowerCase()))) {
        r.push(words[i]);
      }
    });
  }

  return r;
}

// 1332. Remove Palindromic Subsequences
// You are given a string s consisting only of letters 'a' and 'b'.
// In a single step you can remove one palindromic subsequence from s.

// Return the minimum number of steps to make the given string empty.

// A string is a subsequence of a given string if it is generated by deleting some
// characters of a given string without changing its order.
// Note that a subsequence does not necessarily need to be contiguous.

// A string is called palindrome if is one that reads the same
// backward as well as forward.
/**
 * @param {string} s
 * @returns {number} number of operations
 */
function removePalindromeSub(s) {
  if (s.length === 0) return 0;
  if (s.split("").reverse().join("") === s) return 1;
  return 2;
}

// 821. Shortest Distance to a Character
// Given a string s and a character c that occurs in s,
// return an array of integers answer where answer.length == s.length
// and answer[i] is the distance from index i to the closest occurrence
// of character c in s.

// The distance between two indices i and j is abs(i - j),
// where abs is the absolute value function.
/**
 * @param {string} s string (haystack)
 * @param {char} c target char (needle)
 * @returns {number[]} array of ints representing distance to nearest needle
 */
function shortestToChar(s, c) {
  let r = [];
  let charMap = {};
  for (let i = 0; i < s.length; i++) {
    charMap[s[i]] ? charMap[s[i]].push(i) : (charMap[s[i]] = [i]);
  }

  for (let i = 0; i < s.length; i++) {
    r.push(getDistanceFromChar(i, charMap[c]));
  }

  return r;
  // ****

  function getDistanceFromChar(needle, haystack) {
    console.log(haystack);
    const closest = haystack.reduce((a, b) => {
      return Math.abs(b - needle) < Math.abs(a - needle) ? b : a;
    });

    return Math.abs(needle - closest);
  }
}

// 2000. Reverse Prefix of Word
// Given a 0-indexed string word and a character ch, reverse the segment of word that starts
// at index 0 and ends at the index of the first occurrence of ch (inclusive).
// If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse
// the segment that starts at 0 and ends at 3 (inclusive).
// The resulting string will be "dcbaefd".

// Return the resulting string.
function reversePrefix(word, ch) {
  let splitIdx = word.indexOf(ch);
  let tail = word.slice(splitIdx + 1);
  let front = word
    .slice(0, splitIdx + 1)
    .split("")
    .reverse("")
    .join("");
  return front + tail;
}

// 1844. Replace All Digits with Characters
// You are given a 0-indexed string s that has lowercase English letters
// in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit,
// that returns the xth character after c.

//     For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.

// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1],
// s[i]) will never exceed 'z'.
function replaceDigits(s) {
  let r = "";

  s.split("").forEach((char, i) => {
    isNaN(char)
      ? (r += char)
      : (r += String.fromCharCode(s.charCodeAt(i - 1) + +char));
  });

  return r;
}

// 1047. Remove All Adjacent Duplicates In String
// You are given a string s consisting of lowercase English letters.
// A duplicate removal consists of choosing two adjacent and equal
// letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.
// It can be proven that the answer is unique.
function removeDuplicates(s) {
  // THis works most of the time, but is too slow on really massive strings:
  // let foundOne = false;

  // let arrToCheck = s.split("");

  // for (let i = 1; i < arrToCheck.length; i++) {
  //   if (arrToCheck[i] === arrToCheck[i - 1]) {
  //     foundOne = true;
  //     arrToCheck = arrToCheck.filter((_, idx) => i !== idx && idx !== i - 1);
  //   }
  // }

  // return foundOne ? removeDuplicates(arrToCheck.join("")) : arrToCheck.join("");

  // Stack method:
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.join("");
}

// 2011. Final Value of Variable After Performing Operations
// There is a programming language with only four operations and one variable X:

//     ++X and X++ increments the value of the variable X by 1.
//     --X and X-- decrements the value of the variable X by 1.

// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations,
// return the final value of X after performing all the operations.
function finalValueAfterOperations(operations) {
  // Time: O(n)
  let r = 0;

  operations.forEach((op) => {
    if (op.includes("+")) {
      r++;
    } else {
      r--;
    }
  });

  return r;
}

// 2037. Minimum Number of Moves to Seat Everyone
// There are n seats and n students in a room. You are given an array seats of length n,
// where seats[i] is the position of the ith seat.
// You are also given the array students of length n,
// where students[j] is the position of the jth student.

// You may perform the following move any number of times:

// Increase or decrease the position of the ith student by 1
// (i.e., moving the ith student from position x to x + 1 or x - 1)

// Return the minimum number of moves required to move each
// student to a seat such that no two students are in the same seat.

// Note that there may be multiple seats or students in the same position at the beginning.
function minMovesToSeat(seats, students) {
  const sortedSeats = seats.sort((a, b) => b - a);
  const sortedStudents = students.sort((a, b) => b - a);

  let r = 0;

  sortedSeats.forEach((seat, i) => {
    r += Math.max(sortedStudents[i], seat) - Math.min(seat, sortedStudents[i]);
  });

  return Math.abs(r);
}

// 1880. Check if Word Equals Summation of Two Words
// The letter value of a letter is its position in the alphabet starting from 0
// (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

// The numerical value of some string of lowercase English letters
// s is the concatenation of the letter values of each letter in s,
// which is then converted into an integer.

// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021".
// After converting it, we get 21.

// You are given three strings firstWord, secondWord, and targetWord,
// each consisting of lowercase English letters 'a' through 'j' inclusive.

// Return true if the summation of the numerical values of firstWord and
// secondWord equals the numerical value of targetWord, or false otherwise.
function isSumEqual(firstWord, secondWord, targetWord) {
  const getWordNum = (word) => {
    let r = "";

    word.split("").forEach((el) => {
      r += el.charCodeAt(0) - 97;
    });
    return parseInt(r);
  };

  return (
    getWordNum(firstWord) + getWordNum(secondWord) === getWordNum(targetWord)
  );
}

// 2129. Capitalize the Title
// You are given a string title consisting of one or more words
// separated by a single space, where each word consists of
// English letters. Capitalize the string by changing the
// capitalization of each word such that:

// If the length of the word is 1 or 2 letters,
// change all letters to lowercase.
// Otherwise, change the first letter to
// uppercase and the remaining letters to lowercase.
// Return the capitalized title.
function capitalizeTitle(title) {
  const upperFy = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  return title
    .split(" ")
    .map((el) => {
      if (el.length < 3) return el.toLowerCase();
      return upperFy(el);
    })
    .join(" ");
}

// 2042. Check if Numbers Are Ascending in a Sentence
// A sentence is a list of tokens separated by a single space
// with no leading or trailing spaces. Every token is either a
// positive number consisting of digits 0-9 with no leading zeros,
// or a word consisting of lowercase English letters.

// For example, "a puppy has 2 eyes 4 legs" is a sentence with
// seven tokens: "2" and "4" are numbers and the other tokens
// such as "puppy" are words.
// Given a string s representing a sentence, you need to check
// if all the numbers in s are strictly increasing from left to
// right (i.e., other than the last number, each number is strictly
// smaller than the number on its right in s).

// Return true if so, or false otherwise.
function areNumbersAscending(s) {
  // first filter out da numbahs
  const numbahs = s
    .split(" ")
    .filter((el) => +el)
    .map((el) => +el);

  for (let i = 1; i < numbahs.length; i++) {
    if (numbahs[i - 1] >= numbahs[i]) return false;
  }

  return true;
}

// 1897. Redistribute Characters to Make All Strings Equal
// You are given an array of strings words (0-indexed).

// In one operation, pick two distinct indices i and j,
// where words[i] is a non-empty string, and
// move any character from words[i] to any position in words[j].

// Return true if you can make every string in words equal
// using any number of operations, and false otherwise
function makeEqual(words) {
  const wordsLength = words.length;

  const charMap = {};

  words.forEach((word) => {
    word.split("").forEach((el) => {
      charMap[el] ? charMap[el]++ : (charMap[el] = 1);
    });
  });

  for (const key in charMap) {
    if (charMap[key] % wordsLength !== 0) return false;
  }

  return true;
}

// 58. Length of Last Word
// Given a string s consisting of some words separated
// by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.
function lengthOfLastWord(s) {
  const validWords = s.split(" ").filter((el) => el);

  return validWords[validWords.length - 1].split("").length;
}

// 290. Word Pattern
// Given a pattern and a string s,
// find if s follows the same pattern.

// Here follow means a full match, such that there is a
// bijection between a letter in pattern and a non-empty word in s.
function wordPattern(pattern, s) {
  const wordMap = {};

  const splitPattern = pattern.split("");
  const formattedWords = s.split(" ");

  if (splitPattern.length !== formattedWords.length) return false;

  for (let i = 0; i < formattedWords.length; i++) {
    if (
      wordMap[splitPattern[i]] &&
      wordMap[splitPattern[i]] !== formattedWords[i]
    ) {
      return false;
    }
    if (!wordMap[splitPattern[i]]) {
      if (Object.values(wordMap).includes(formattedWords[i])) return false;
      wordMap[splitPattern[i]] = formattedWords[i];
    }
  }

  return true;
}

// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s
// can be replaced to get t.

// All occurrences of a character must be replaced with another character
// while preserving the order of characters.
// No two characters may map to the same character,
// but a character may map to itself.
function isIsomorphic(s, t) {
  const charMap = {};

  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]]) {
      if (charMap[s[i]] !== t[i]) return false;
    } else {
      if (Object.values(charMap).includes(t[i])) return false;
      else charMap[s[i]] = t[i];
    }
  }

  return true;
}

// 28. Implement strStr()
// Implement strStr().

// Return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string?
// This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0
// when needle is an empty string. This is consistent to
// C's strstr() and Java's indexOf().
function strStr(haystack, needle) {
  if (!needle) return 0;

  const straw = haystack.split(needle);
  if (straw.length === 1) return -1;

  return straw[0].length;
}

// 434. Number of Segments in a String
// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.
function countSegments(s) {
  return s.split(" ").filter((el) => el !== "").length;
}

// 1189. Maximum Number of Balloons
// Given a string text, you want to use the characters of
// text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once.
// Return the maximum number of instances that can be formed.
function maxNumberOfBalloons(text) {
  const wordMap = {
    b: 0,
    a: 0,
    ll: 0,
    oo: 0,
    n: 0,
  };

  const chars = text.split("");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "l") {
      wordMap["ll"] += 0.5;
    }
    if (chars[i] === "o") {
      wordMap["oo"] += 0.5;
    }

    if (Object.keys(wordMap).includes(chars[i])) {
      wordMap[chars[i]]++;
    }
  }

  return Math.floor(Math.min(...Object.values(wordMap)));
}

// 520. Detect Capital
// We define the usage of capitals in a word to be right when
// one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.
function detectCapitalUse(word) {
  if (
    word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    word === word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  )
    return true;

  return false;
}

console.log(
  // **********************
  detectCapitalUse("ABaAB")
  // **********************
);
