function fourNumberSum(array, targetSum) {
  const allPairSums = {};
  const quadruplets = [];
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j];
      const difference = targetSum - currentSum;
      if (difference in allPairSums) {
        for (const pair of allPairSums[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]));
        }
      }
    }
    for (k = 0; k < i; k++) {
      const currentSum = array[i] + array[k];
      if (!(currentSum in allPairSums)) {
        allPairSums[currentSum] = [[array[k], array[i]]];
      } else {
        allPairSums[currentSum].push([array[k], array[i]]);
      }
    }
  }

  return quadruplets;
}

function largestRange(array) {
  let bestRange = [];
  let longestLength = 0;
  const nums = {};

  // building the numMap;
  for (const num of array) {
    nums[num] = true;
  }

  for (const num of array) {
    // the num has already been marked false
    // by a previous run, we dont need to check again.
    if (!nums[num]) continue;
    // mark each num false in the map as we iterate.
    nums[num] = false;
    // current range length starts at current number (ie 1)
    let currentLength = 1;
    // start our checking to the left and right of the current num.
    let left = num - 1;
    let right = num + 1;
    // iterate left seeing how far we can go.
    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }
    // iterate right seeing how far we can go.
    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++;
    }
    // check if its our best
    if (currentLength > longestLength) {
      longestLength = currentLength;
      // these have been interate left(left) and right(right)
      // in the above 2 while loops, however wont be verified
      // to be in the range til the next iteration. so for now
      // we add/substract one from each to update our current
      // bestRange.
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
}

// Subarray sort
function subarraySort(array) {
  // *** My first solution. Passes a few tests. Not optimal Time/space.
  // Also fails many tests/edge cases.
  // let template = [...array].sort((a, b) => a - b);

  // let r = [false, false];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] !== template[i]) {
  //     if (!r[0]) r[0] = i;
  //     else {
  //       if (i > r[1]) r[1] = i;
  //     }
  //   }
  // }

  // return r;
  // *** AlgoExpert answer:
  // Time: O(n) | Space: O(n)
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }

  console.log(minOutOfOrder, maxOutOfOrder);

  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }

  let subarrayLeftIdx = 0;
  while (minOutOfOrder >= array[subarrayLeftIdx]) {
    subarrayLeftIdx++;
  }

  let subarrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subarrayRightIdx]) {
    subarrayRightIdx--;
  }

  return [subarrayLeftIdx, subarrayRightIdx];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
}

console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
// console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
