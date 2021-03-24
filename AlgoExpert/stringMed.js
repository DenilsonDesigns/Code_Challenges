function longestPalindromicSubstring(string) {
  // this is atleast O(n)^2 as there are nested loops.
  // assuming retPalLen is atleast O(n), then solution
  //   may be as bad as O(n)^3
  //   let longest = 0;
  //   let longestPal = "";

  //   let leftIdx = 0;
  //   while (leftIdx < string.length) {
  //     let rightIdx = leftIdx;
  //     while (rightIdx < string.length) {
  //       let subStr = string.slice(leftIdx, rightIdx + 1);
  //       let palindromeLen = retPalLen(subStr);
  //       if (palindromeLen > longest) {
  //         longest = palindromeLen;
  //         longestPal = subStr;
  //       }
  //       rightIdx++;
  //     }
  //     leftIdx++;
  //   }
  //   return longestPal;
  //   //  ***Util.***
  //   function retPalLen(str) {
  //     return str.split("").reverse().join("") === str ? str.length : 0;
  //   }
  //   ***************************************
  //   AlgoExpert solution:
  //   O(n^2) time | O(n) space
  let currLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalin(string, i - 1, i + 1);
    const even = getLongestPalin(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currLongest =
      currLongest[1] - currLongest[0] > longest[1] - longest[0]
        ? currLongest
        : longest;
  }
  return string.slice(currLongest[0], currLongest[1]);

  function getLongestPalin(string, leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < string.length) {
      if (string[leftIdx] !== string[rightIdx]) break;
      leftIdx--;
      rightIdx++;
    }
    return [leftIdx + 1, rightIdx];
  }
}

function groupAnagrams(words) {
  // this works, but perhaps not optimal
  // Time: O(2n^2) (atleast?)
  let tabl = {};
  for (let i = 0; i < words.length; i++) {
    let sortedWord = words[i].split("").sort().join("");
    tabl[sortedWord]
      ? tabl[sortedWord].push(words[i])
      : (tabl[sortedWord] = [words[i]]);
  }
  let r = [];
  for (let key in tabl) {
    console.log(key);
    r.push(tabl[key]);
  }
  return r;
  // *********************************
}

console.log(
  groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])
);
console.log(groupAnagrams(["abc", "dabd", "bca", "cab", "ddba"]));
console.log(groupAnagrams(["abc", "cba", "bca"]));
