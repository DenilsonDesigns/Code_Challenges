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

// 1441. Build an Array With Stack Operations
var buildArray = function (target, n) {
  const stack = [];
  const operations = [];

  for (let i = 1; i <= n; i++) {
    if (target.includes(i)) {
      operations.push("Push");
      stack.push(i);
      if (checkArrayEquality(target, stack)) {
        return operations;
      }
    } else {
      operations.push("Push");
      stack.push(i);
      if (checkArrayEquality(target, stack)) {
        return operations;
      }
      operations.push("Pop");
      stack.pop();
      if (checkArrayEquality(target, stack)) {
        return operations;
      }
    }
  }

  return operations;

  function checkArrayEquality(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }

    // Iterate through the arrays and compare each element
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

    // If all elements are equal, arrays are equal
    return true;
  }
};

// 1021. Remove Outermost Parentheses
var removeOuterParentheses = function (s) {
  let output = "";
  let outerMostOpen = false;
  let stack = [];
  for (let bracket of s) {
    // we are opening a bracket
    if (bracket === "(" && !outerMostOpen) {
      outerMostOpen = true;
      // we have a bracket open, pushing it to output.
      // and putting a closing brakcet on the stack
    } else if (bracket === "(" && outerMostOpen) {
      stack.push(")");
      output += bracket;
      // current bracket is closing one, and popping a closing one off the stack to output
    } else if (bracket === ")" && stack.length) {
      output += stack.pop();
    } else if (bracket === ")" && !stack.length) {
      outerMostOpen = false;
    }
  }
  return output;
};

console.log(
  // ***
  removeOuterParentheses("(()())(())") //
  // ***
);
