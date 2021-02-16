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

console.log(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5));
// console.log(-5 - 0);
// console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
