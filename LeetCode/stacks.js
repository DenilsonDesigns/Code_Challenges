// 2390. Removing Stars From a String
var removeStars = function (s) {
  const stack = [];

  for (let char of s) {
    if (char === "*" && stack.length > 0) {
      // Remove the character and the one to its left
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

console.log(
  // ***
  removeStars("leet**cod*e") // "lecoe"
  // ***
);
