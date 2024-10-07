// 1984. Minimum Difference Between Highest and Lowest of K Scores
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  let r = 0;

  for (let i = 0; i < nums.length - k + 1; i++) {
    const element = nums[i];
    const secondElement = nums[i + k - 1];
    const difference = secondElement - element;

    if (difference > 0) {
      if (r === 0) {
        r = difference;
      } else {
        r = Math.min(r, difference);
      }
    }
  }

  return r;
};

// 2269. Find the K-Beauty of a Number
var divisorSubstrings = function (num, k) {
  let strNum = num + "";

  let stack = strNum.slice(0, k).split("");

  let left = 0;
  let right = left + k - 1;

  let r = 0;

  while (right < strNum.length) {
    // check if its a divisor.
    const currNum = stackToInteger(stack);
    if (isDivisor(currNum, num)) {
      r++;
    }
    // increment left and right, unshift and add;
    left++;
    right++;
    stack.shift();
    stack.push(strNum[right]);
  }

  return r;

  function isDivisor(subNum, baseNum) {
    return baseNum % subNum === 0;
  }

  function stackToInteger(stack) {
    return +stack.join("");
  }
};

// 3090 Maximum Length Substring with two occurrences
var maximumLengthSubstring = function (s) {
  let r = 1;

  let left = 0;
  let right = 0;

  let stack = [s[left]];

  let charMap = new Map();
  charMap.set(s[left], 1);

  while (right < s.length) {
    if (checkMaxTwoOccMax(charMap, stack)) {
      r = Math.max(r, stack.length);
      right++;
      stack.push(s[right]);
      incrementKey(charMap, s[right]);
    } else {
      left++;
      right++;

      let valueToDecrement = stack.shift();
      decrementKey(charMap, valueToDecrement);
      stack.push(s[right]);
      incrementKey(charMap, s[right]);
    }
  }

  return r;

  function checkMaxTwoOccMax(map, strStack) {
    for (let i = 0; i < strStack.length; i++) {
      const char = strStack[i];

      const charOccs = map.get(char);

      if (charOccs > 2) {
        return false;
      }
    }
    return true;
  }

  function incrementKey(map, key) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }

  function decrementKey(map, key) {
    if (map.has(key)) {
      const currentValue = map.get(key);

      map.set(key, Math.max(0, currentValue - 1));
    } else {
      map.set(key, 0);
    }
  }
};

console.log(
  // ***
  maximumLengthSubstring("bcbbbcba") // 4
  // ***
);
