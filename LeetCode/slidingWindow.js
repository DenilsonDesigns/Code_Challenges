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

console.log(
  // ***
  divisorSubstrings(430043, 2) // 2
  // ***
);
