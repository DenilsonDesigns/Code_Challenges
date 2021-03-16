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

console.log(caesarCipherEncryptor("xyz", 2)); // zab
console.log(caesarCipherEncryptor("abc", 0)); //abc
console.log(caesarCipherEncryptor("abc", 3)); // def
