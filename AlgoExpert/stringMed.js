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
  // let tabl = {};
  // for (let i = 0; i < words.length; i++) {
  //   let sortedWord = words[i].split("").sort().join("");
  //   tabl[sortedWord]
  //     ? tabl[sortedWord].push(words[i])
  //     : (tabl[sortedWord] = [words[i]]);
  // }
  // let r = [];
  // for (let key in tabl) {
  //   console.log(key);
  //   r.push(tabl[key]);
  // }
  // return r;
  // *********************************
  // Algo expert solution:
  // O(w * n * log(n)) time | O(wn) space
  // w: number of words, n: is the length of the longest word
  const anagrams = {};
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}

function validIPAdresses(string) {
  // *** AlgoExpert solution ***
  // O(1) time (string length is set, time complexity wont change
  // regardless of the digits in the string).
  // O(1) space.
  const ipAddressesFound = [];

  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const currentIPAddressParts = ["", "", "", ""];

    currentIPAddressParts[0] = string.slice(0, i);
    // if first part doesnt make a valid IP sub-string,
    // continue the loop and try in the next position.
    if (!isValidPart(currentIPAddressParts[0])) continue;

    // check the second sub-string.
    // start the search of the second sub-string at i+1;
    // continue the loop until we either hit 4 or we hit
    // end of string minus first sub-string
    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      // check the sub-string from end of first string until j
      currentIPAddressParts[1] = string.slice(i, j);
      // if its not a valid sub-string, continue the loop.
      if (!isValidPart(currentIPAddressParts[1])) continue;

      // another loop to check the 3rd and 4th sub-strings.
      // starting the check from the end of previous sub-string +1
      // k must be smaller than 4 or the remaning part of the string (min).
      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentIPAddressParts[2] = string.slice(j, k);
        currentIPAddressParts[3] = string.slice(k);

        // only pushing to rArray if 3rd and 4th parts are valid.
        if (
          isValidPart(currentIPAddressParts[2]) &&
          isValidPart(currentIPAddressParts[3])
        ) {
          ipAddressesFound.push(currentIPAddressParts.join("."));
        }
      }
    }
  }

  return ipAddressesFound;
}

function isValidPart(string) {
  const stringAsInt = parseInt(string);
  // if its greater than 255, its not a valid
  // IP sub string.
  if (stringAsInt > 255) return false;
  // below is a clever way to check there is no
  // leading zeros in the number.
  return string.length === stringAsInt.toString().length;
}

function reverseWordsInString(string) {
  // cannot use any built-in split or reverse methods/functions.
  // can just iterate through with regular for loop->
  // when you find a space, push the preceeding part of the string to an array.
  // can then manually reverse the order using loop or whatever.
  // then build the string back with regular for loop.
}

console.log(reverseWordsInString("AlgoExpert is the best!"));
console.log(reverseWordsInString("Reverse These Words"));
console.log(reverseWordsInString("APPLE PEAR PLUM ORANGE"));
