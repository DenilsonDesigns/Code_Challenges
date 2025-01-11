// 3232. Find if Digit Game Can Be Won
function canAliceWin(nums: number[]): boolean {
  const singleDigitNumSum = getDigitOfLengthNumSum(nums);
  const doubleDigitNumSum = getDigitOfLengthNumSum(nums, 2);
  const totalNumSum = getSumOfNums(nums);

  if (
    scoreCanWinVsRemainer(singleDigitNumSum, totalNumSum) ||
    scoreCanWinVsRemainer(doubleDigitNumSum, totalNumSum)
  ) {
    return true;
  }

  return false;

  function scoreCanWinVsRemainer(score: number, totalOfNums: number): boolean {
    const remainderScore = totalNumSum - score;

    return score > remainderScore;
  }

  function getDigitOfLengthNumSum(
    nums: number[],
    digitLength: number = 1
  ): number {
    const numsOfLength = nums.filter(
      (num) => String(num).length === digitLength
    );
    return getSumOfNums(numsOfLength);
  }

  function getSumOfNums(nums: number[]): number {
    return nums.reduce((acc, el) => acc + el, 0);
  }
}

// 3340. Check Balanced String
function isBalanced(num: string): boolean {
  const stringNumAsNums = stringNumToArrayOfNums(num);
  const [numsEven, numsOdd] = filterNumsToOddAndEven(stringNumAsNums);

  return sumOfNumArray(numsEven) === sumOfNumArray(numsOdd);

  function stringNumToArrayOfNums(stringNum: string): number[] {
    return stringNum.split("").map((x) => +x);
  }

  function sumOfNumArray(nums: number[]): number {
    return nums.reduce((acc, el) => acc + el, 0);
  }

  function filterNumsToOddAndEven(nums: number[]): [number[], number[]] {
    const numsAtEvenIndex = nums.filter((x, i) => i % 2 === 0);
    const numsAtOddIndex = nums.filter((x, i) => i % 2 !== 0);
    return [numsAtEvenIndex, numsAtOddIndex];
  }
}

function getSneakyNumbers(nums: number[]): number[] {
  const r: number[] = [];

  const numMap: Map<number, number> = new Map();

  nums.forEach((num) => {
    const keyExists = numMap.has(num);
    if (keyExists) {
      numMap.set(num, (numMap.get(num) ?? 0) + 1);
    } else {
      numMap.set(num, 1);
    }
  });

  console.log(numMap);

  for (const [key, value] of numMap.entries()) {
    if (value === 2) r.push(+key);
  }

  return r;
}

console.log(
  // ***
  getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2])
  // ***
);
