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
  // coins.sort((a, b) => a - b);

  // let currentChangeCreated = 0;
  // for (const coin of coins) {
  //   if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
  //   currentChangeCreated += coin;
  // }

  // return currentChangeCreated + 1;

  // O(n) time | O(1) space:
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

function sortedSquaredArray(array) {
  // **************************************************
  // easiest answer, not sure of time complexity
  // but I assume O(n)^2 as .map and .sort will both
  // @edit: may be nLogn for the sort as browsers may use mergesort etc
  // which are better than O(n)^2.
  // loop through the array once each. So its basically a nested loop.
  // this is considered a "brute force" approach.
  // return array.map((el) => el * el).sort((a, b) => a - b);
  // *******************************************************
  // this is the "brute force" attempt by algo expert.
  // actually noticeably faster than the above.
  // even tho it shouldnt be from a time complexity equation
  // point of view.
  // const sortedSquares = new Array(array.length).fill(0);

  // for (let idx = 0; idx < array.length; idx++) {
  //   const value = array[idx];
  //   sortedSquares[idx] = value * value;
  // }

  // sortedSquares.sort((a, b) => a - b);

  // return sortedSquares;
  // ******************************************
  // optimal approach: bring time complexity down to O(n)
  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--;
    }
  }
  return sortedSquares;
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
const t0 = new Date().getTime();
console.log(sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]));
const t1 = new Date().getTime();
console.log("Call took " + (t1 - t0) + " milliseconds.");
console.log(sortedSquaredArray([-2, -1]));
