// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).
function findMedianSortedArrays(nums1, nums2) {
  const sortedArr = nums1.concat(nums2).sort((a, b) => a - b);

  var half = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2) return sortedArr[half];

  return (sortedArr[half - 1] + sortedArr[half]) / 2.0;
}

// 1255. Maximum Score Words Formed by Letters
var maxScoreWords = function (words, letters, score) {
  let rScore = 0;

  const availableLettersMap = contructLetterMap(letters);

  // function to see if word is possible to be built given the letters.
  function canBuildWordFromLetters(word, letterMap) {
    const wordMap = contructLetterMap(word.split(""));
    console.log(wordMap);

    for (let [key, _] of wordMap.entries()) {
      if (wordMap.get(key) > letterMap.get(key) || !letterMap.has(key)) {
        return false;
      }
    }

    return true;
  }

  // function to get alphabet index of letter.
  function getIndexFromChar(char) {
    char = char.toLowerCase();
    const charCodeOfA = "a".charCodeAt(0);
    return char.charCodeAt(0) - charCodeOfA;
  }
  // function to calc score.

  function contructLetterMap(charArr) {
    let rMap = new Map();

    charArr.forEach((char) => {
      if (rMap.has(char)) {
        rMap.set(char, rMap.get(char) + 1);
      } else {
        rMap.set(char, 1);
      }
    });

    return rMap;
  }

  // return getIndexFromChar("b");

  words.forEach((word) => {
    if (canBuildWordFromLetters(word, availableLettersMap)) {
      let scoreLocal = 0;

      word.split("").forEach((char) => {
        let sss = score[getIndexFromChar(char)];
        scoreLocal += sss;
        // @TODO: need to pop off used char from availableLettersMap
      });

      rScore += scoreLocal;
    }
  });

  //

  // *** =====
  return rScore;
};

// 329. Longest Increasing Path in a Matrix
var longestIncreasingPath = function (matrix) {
  var rows = matrix.length;
  var cols = matrix[0].length;

  const dp = {};

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // const element = matrix[cols];

      dfs(r, c, -1);
    }
  }

  return Math.max(...Object.values(dp));

  function dfs(r, c, prevVal) {
    const key = `${r},${c}`;
    // make sure its not out of bounds, or that it didnt increase:
    if (r < 0 || r === rows || c < 0 || c === cols || matrix[r][c] <= prevVal) {
      return 0;
    }

    if (dp[key]) {
      return dp[key];
    }

    var res = 1;
    res = Math.max(1 + dfs(r + 1, c, matrix[r][c]), res);
    res = Math.max(1 + dfs(r - 1, c, matrix[r][c]), res);
    res = Math.max(1 + dfs(r, c + 1, matrix[r][c]), res);
    res = Math.max(1 + dfs(r, c - 1, matrix[r][c]), res);
    dp[key] = res;

    return res;
  }
};

console.log(
  // ***
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ])
  // ***
);
