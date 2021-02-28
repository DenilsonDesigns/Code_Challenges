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

function tournamentWinner(competitions, results) {
  // **O(n)^2***********************************
  // const findHighest = (obj) => {
  //   const values = Object.values(obj);
  //   const max = Math.max.apply(Math, values);
  //   for (key in obj) {
  //     if (obj[key] === max) {
  //       return key;
  //     }
  //   }
  // };

  // let winners = {};
  // // loop through results
  // results.forEach((result, i) => {
  //   // console.log(result);
  //   let ind = result === 0 ? 1 : 0;
  //   // console.log(competitions[i][ind]);
  //   winners[competitions[i][ind]] = (winners[competitions[i][ind]] || 0) + 1;
  // });
  // // console.log(winners);
  // return findHighest(winners);
  // *********************************************

  let winners = {};
  let bestTeam = "";
  results.forEach((result, i) => {
    let ind = result === 0 ? 1 : 0;
    winners[competitions[i][ind]] = (winners[competitions[i][ind]] || 0) + 1;
    if (winners[competitions[i][ind]] > (winners[bestTeam] || 0)) {
      bestTeam = competitions[i][ind];
    }
  });
  return bestTeam;
}

function nonConstructibleChange(coins) {
  // start by sorting the array
  let coinArr = coins.sort((a, b) => a - b);
  // variable to store min returnable change:
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));
console.log(nonConstructibleChange([6, 4, 5, 1, 1, 8, 9]));
