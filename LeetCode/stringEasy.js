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

console.log(interpret("G()()()(al)"));
