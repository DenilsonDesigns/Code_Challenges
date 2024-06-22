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

console.log(
  // ***
  maxScoreWords(
    ["dog", "cat", "dad", "good"],
    ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
    [
      1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
  // ***
);
