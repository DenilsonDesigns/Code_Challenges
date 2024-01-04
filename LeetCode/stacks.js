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

// 20. Valid Parentheses
var isValid = function (s) {
  const stack = [];
  const bracketsMap = { "(": ")", "[": "]", "{": "}" };

  for (const char of s) {
    // if its an opening one, just push to stack.
    if (bracketsMap[char]) {
      stack.push(char);
      // if its a closing one, check that its gonna close the correct
      // type of opener:
    } else if (char === bracketsMap[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(
  // ***
  isValid("()([]{})") // "lecoe"
  // ***
);
