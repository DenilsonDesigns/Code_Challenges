// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4

function charCount(myChar, str) {
  let count = 0;

  // below commented line can be used also
  //   [...str].forEach(letter => {
  str.split("").forEach(letter => {
    if (myChar === letter) count++;
  });
  return count;
}

console.log(charCount("b", "big fat bubble"));

/**
 * Some other solutions of note from edabit users:
 * 
 * function charCount(myChar, str) {
	return [...str].filter(x => x===myChar).length;
}
    function charCount(myChar, str) {
	return (str.split("").filter(char => char === myChar)).length;
}
 */
