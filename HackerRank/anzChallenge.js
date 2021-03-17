function findNumber(arr, k) {
  return k in arr ? "YES" : "NO";
}

function oddNumbers(l, r) {
  let ret = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 !== 0) {
      ret.push(i);
    }
  }
  return ret;
}

function worstLosingStreak(nums) {
  let greatestLoss = 0;
  let leftIdx = 0;

  while (leftIdx < nums.length - 1) {
    let rightIdx = leftIdx + 1;

    while (nums[leftIdx] > nums[rightIdx]) {
      let diff = nums[leftIdx] - nums[rightIdx];
      if (diff > greatestLoss) greatestLoss = diff;
      rightIdx++;
    }

    leftIdx++;
  }
  return greatestLoss;
}

function countingUniversalSubarrays(arr) {
  let subs = [];
  let leftIdx = 0;
  while (leftIdx < arr.length - 1) {
    let rightIdx = leftIdx + 1;
    while (rightIdx < arr.length) {
      let subArr = arr.slice(leftIdx, rightIdx + 1);
      if (
        numOf(subArr, 4) === numOf(subArr, 2) &&
        areTog(subArr, 4) &&
        areTog(subArr, 2)
      ) {
        subs.push(subArr);
      }
      rightIdx++;
    }

    leftIdx++;
  }
  return subs.length;
  // ****
  function numOf(subArr, num) {
    let count = 0;
    for (let el of subArr) {
      if (el === num) count++;
    }
    return count;
  }

  function areTog(subArr, num) {
    let leftIdx = 0;
    while (leftIdx < subArr.length - 1) {
      if (subArr[leftIdx] === num) {
        let foundEnd = false;
        let rightIdx = leftIdx + 1;
        while (rightIdx <= subArr.length - 1) {
          if (subArr[rightIdx] !== num) {
            foundEnd = true;
          }
          if (foundEnd && subArr[rightIdx] === num) {
            return false;
          }
          rightIdx++;
        }
      }

      leftIdx++;
    }
    return true;
  }
}

// console.log(numOf([4, 4, 4, 2, 1, 3], 4)); // 3
// console.log(areTog([4, 4, 2, 4], 4)); // false
// areTog([4, 4, 2, 4], 4);
// console.log(areTog([4, 4, 2, 2], 4)); // true;
console.log(countingUniversalSubarrays([4, 4, 2, 2, 4])); // 3
console.log(countingUniversalSubarrays([2, 4, 4, 4, 2])); // 4
