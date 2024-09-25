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
    if (bracket === "(" && !outerMostOpen) {
      outerMostOpen = true;
    } else if (bracket === "(" && outerMostOpen) {
      stack.push(")");
      output += bracket;
    } else if (bracket === ")" && stack.length) {
      output += stack.pop();
    } else if (bracket === ")" && !stack.length) {
      outerMostOpen = false;
    }
  }
  return output;
};

// 239. Sliding Window Maximum
var maxSlidingWindow = function (nums, k) {
  // the value that the method will return:
  const returnArray = [];
  // the deque stores indices from nums, not the values:
  const deque = [];

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // pop smaller values than nums[r] from deque:
    while (deque.length && nums[deque.at(-1)] < nums[right]) {
      deque.pop();
    }
    // append current index:
    deque.push(right);

    // remove left val from window if out of bounds:
    if (left > deque[0]) {
      deque.shift();
    }

    // only push if right pointer is atleast at the starting window size.
    if (right >= k - 1) {
      returnArray.push(nums[deque[0]]);
      left++;
    }

    right++;
  }

  return returnArray;
};

// 3174 Clear Digits
var clearDigits = function (s) {
  function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
  }
  const indicesCharsStack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (isLetter(char)) {
      indicesCharsStack.push(char);
    }
    if (!isLetter(char)) {
      indicesCharsStack.pop();
    }
  }

  return indicesCharsStack.join("");
};

// 1544. Make The String Great Again
var makeGood = function (s) {
  function isFlippedCase(letter1, letter2) {
    return (
      letter1 !== letter2 && letter1.toLowerCase() === letter2.toLowerCase()
    );
  }

  const greatStack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (
      greatStack.length > 0 &&
      isFlippedCase(char, greatStack[greatStack.length - 1])
    ) {
      greatStack.pop();
    } else {
      greatStack.push(char);
    }
  }

  return greatStack.join("");
};

console.log(
  // ***
  makeGood("leEeetcCcode") //
  // ***
);
