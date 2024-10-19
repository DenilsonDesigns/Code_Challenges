// 3300. Minimum Element After Replacement With Digit Sum
var minElement = function (nums) {
  const numsArr = (n) => {
    return (n + "").split("").map((x) => +x);
  };

  const sumArr = nums.map((num) => {
    const localNumsArr = numsArr(num);

    return localNumsArr.reduce((acc, el) => acc + el, 0);
  });

  return Math.min(...sumArr);
};

// 3270. Find the Key of the Numbers
var generateKey = function (num1, num2, num3) {
  const strNums = [num1, num2, num3].map((num) => {
    return (num + "").padStart(4, "0");
  });

  let chars = [];

  for (let i = 0; i < 4; i++) {
    chars[i] = Math.min(+strNums[0][i], +strNums[1][i], +strNums[2][i]);
  }

  charsAsSingNum = +chars.map((x) => x + "").join("");

  return charsAsSingNum;
};

console.log(
  // ***
  generateKey(987, 879, 798)
  // ***
);
