function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join("");

  function getNewLetter(letter, key) {
    const newLetterCode = letter.charCodeAt() + key;
    return newLetterCode <= 122
      ? String.fromCharCode(newLetterCode)
      : String.fromCharCode(96 + (newLetterCode % 122));
  }
}

function runLengthEncoding(string) {
  const endcodedStringCharacters = [];
  let currentRunLength = 1;

  for (let i = 1; i < string.length; i++) {
    const currentCharacter = string[i];
    const previousCharacter = string[i - 1];

    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      endcodedStringCharacters.push(currentRunLength.toString());
      endcodedStringCharacters.push(previousCharacter);
      currentRunLength = 0;
    }

    currentRunLength++;
  }

  endcodedStringCharacters.push(currentRunLength.toString());
  endcodedStringCharacters.push(string[string.length - 1]);

  return endcodedStringCharacters.join("");
}

function generateDocument(characters, document) {
  // O(m * (n + m)) time | O(1) space
  // this is worst solution:
  // for (const character of document) {
  //   const documentFrequency = countCharacterFrequency(character, document);
  //   const charactersFrequency = countCharacterFrequency(character, characters);
  //   if (documentFrequency > charactersFrequency) return false;
  // }

  // return true;

  // function countCharacterFrequency(character, target) {
  //   let frequency = 0;
  //   for (const char of target) {
  //     if (char === character) frequency++;
  //   }

  //   return frequency;
  // }
  // *****************************************
  // O(c * (n + m)) time | O(c) space - where n is the number of characters,
  // m is the length of the document, and c is the number of unique characters
  // in the document.
  // const alreadyCounted = new Set();

  // for (const character of document) {
  //   if (character in alreadyCounted) continue;

  //   const documentFrequency = countCharacterFrequency(character, document);
  //   const charactersFrequency = countCharacterFrequency(character, characters);
  //   if (documentFrequency > charactersFrequency) return false;

  //   alreadyCounted.add(character);
  // }

  // return true;

  // function countCharacterFrequency(character, target) {
  //   let frequency = 0;
  //   for (const char of target) {
  //     if (char === character) frequency++;
  //   }

  //   return frequency;
  // }
  // ************************************************
  // O(n + m ) time | O(c) space
  const characterCounts = {};

  for (const character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0;

    characterCounts[character]++;
  }

  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0)
      return false;

    characterCounts[character]--;
  }
  return true;
}

function isPalindrome(string) {
  // Atleast as bad as O(n^2)
  // return string === string.split("").reverse().join("")
  // *******************************************
  // O(n) time ?? apparently, but i think .join has to loop through to
  // form a string??? that would make it O(n^2)
  // const reversedChars = [];
  // for(let i=string.length -1; i>= 0; i--){
  //   reversedChars.push(string[i]);
  // }
  // return string === reversedChars.join("")
  // ***************************
  // This solution looks more legitely to be O(n)
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

function firstNonRepeatingCharacter(string) {
  // first, make a map of chars:
  let charMap = {};

  for (let char of string) {
    // console.log(char);
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }
  // iterate through, if map[char]: 1, return index.
  // for this reason, this loop should be a reg. for loop
  for (let i = 0; i < string.length; i++) {
    if (charMap[string[i]] === 1) return i;
  }

  return -1;
}

console.log(firstNonRepeatingCharacter("abcdcaf")); // 1
console.log(firstNonRepeatingCharacter("faadabcbbebdf")); // 6
console.log(firstNonRepeatingCharacter("ababac")); // 5
