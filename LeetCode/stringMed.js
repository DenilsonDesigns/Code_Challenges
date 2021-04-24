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

// 921. Minimum Add to Make Parentheses Valid
// Given a string S of '(' and ')' parentheses, we add the minimum number of
// parentheses ( '(' or ')', and in any positions ) so that the resulting
// parentheses string is valid.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, or
// It can be written as AB (A concatenated with B), where A and B are
// valid strings, or
// It can be written as (A), where A is a valid string.
// Given a parentheses string, return the minimum number of parentheses
// we must add to make the resulting string valid.
/**
 * @param {string} S string of ( or )
 * @returns {number} number of ( or ) to add to S to get a valid ()
 */
function minAddToMakeValid(S) {
  // make a map first.
  // if its (, do ++ to (
  // if its ), -- from (
  // if there is no ( and its ), do ++ to )
  let parenMap = {};

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      parenMap["("] ? parenMap["("]++ : (parenMap["("] = 1);
    }
    if (S[i] === ")") {
      parenMap["("]
        ? parenMap["("]--
        : parenMap[")"]
        ? parenMap[")"]++
        : (parenMap[")"] = 1);
    }
  }

  // return any count of ( or ) still in map.
  let r = 0;
  for (let val in parenMap) {
    if (parenMap[val] > 0) r += parenMap[val];
  }

  return r;
  //   // ***Better
  //   let openCount = 0;
  // let closeCount = 0;

  // for (let s of S) {
  //     if (s === '(') {
  //         openCount++;
  //     }else {
  //         if (openCount>0) {
  //             openCount--;
  //         } else {
  //             closeCount++;
  //         }
  //     }
  // }

  // return openCount + closeCount;
}

console.log(minAddToMakeValid("()))(("));
