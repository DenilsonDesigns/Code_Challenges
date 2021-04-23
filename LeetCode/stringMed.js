// 1347. Minimum Number of Steps to Make Two Strings Anagram

// Given two equal-size strings s and t. In one step you can choose
// any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same
// characters with a different (or the same) ordering.
/**
 * @param {string} s base string to check
 * @param {string} t checking string.
 * @returns {number} number of changes needed to make t an anagram of s
 */
function minSteps(s, t) {
  let sMap = {};
  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] ? sMap[s[i]]++ : (sMap[s[i]] = 1);
    sMap[t[i]] ? sMap[t[i]]-- : (sMap[t[i]] = -1);
  }
  // sum values of sMap;
  let r = 0;
  for (let val in sMap) {
    if (sMap[val] > 0) r += sMap[val];
  }
  return r;
}

console.log(minSteps("leetcode", "practice"));
