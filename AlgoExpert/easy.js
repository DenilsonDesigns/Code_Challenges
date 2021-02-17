function twoNumberSum(array, targetSum) {
  // my first attempt, passed 11/12
  //   let hashTab = {};
  //   let ans;
  //   array.forEach((el) => {
  //     // el = el == 0 ? 0 : el;
  //     console.log(el, targetSum - el);
  //     console.log(hashTab[el + "num"], el);
  //     if (hashTab[el + "num"]) {
  //       console.log("hit");
  //       ans = [el, targetSum - el];
  //     } else {
  //       hashTab[targetSum - el + "num"] = targetSum - el;
  //     }
  //     console.log(hashTab);
  //   });
  //   return ans || [];
  let nums = {};
  for (const num of array) {
    if (targetSum - num in nums) {
      return [targetSum - num, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

function isValidSubsequence(array, sequence) {
  // Write your code here.
  //filter array based on els in sequence (set maybe?)
  // check equality.
  // let newArr = array.filter((el) => (sequence.includes(el) ? el : null));
  // return newArr  sequence;

  let seqInd = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(seqInd);
    console.log(array[i], sequence[seqInd]);
    if (array[i] === sequence[seqInd]) {
      seqInd++;
    }
    if (seqInd === sequence.length) {
      return true;
    }
  }
  return false;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1]));
