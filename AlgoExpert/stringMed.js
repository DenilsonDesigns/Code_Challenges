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
    const longest = odd[1] - odd[0];
  }
}

console.log(longestPalindromicSubstring("a"));
console.log(longestPalindromicSubstring("it's highnoon"));
console.log(longestPalindromicSubstring("abccbait's highnoon"));
