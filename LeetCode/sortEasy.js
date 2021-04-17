// 1528. Shuffle String

// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.
/**
 *
 * @param {string} s
 * @param {array[integers]} indices
 * @returns {string[]}
 */
function restoreString(s, indices) {
  // Time: O(n) | Space: O(n)
  let r = new Array(s.length);

  for (let i = 0; i < indices.length; i++) {
    r[indices[i]] = s[i];
  }

  return r.join("");
}

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
