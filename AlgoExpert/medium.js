function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}

function arrayOfProducts(array) {
  // this passes but is O(n)^3
  // runtime ~10 milliseconds.
  //   let fin = [];
  //   for (let i = 0; i < array.length; i++) {
  //     let newArr = array.filter((_, idx) => idx !== i);
  //     fin[i] = newArr.reduce((x, y) => x * y);
  //   }
  //   return fin;
  // ***********
  // Algoexpert brute force style:
  // Space = O(n)
  // Time = O(n)^2
  // runtime ~ 3 milliseconds.
  //   const products = [];
  //   for (let i = 0; i < array.length; i++) {
  //     let runningProduct = 1;
  //     for (let j = 0; j < array.length; j++) {
  //       if (i !== j) {
  //         runningProduct *= array[j];
  //       }
  //       products[i] = runningProduct;
  //     }
  //   }
  //   return products;
  // **************
  //  Algoexpert multiple array style
  // O(n) time | O(n) space
  const products = new Array(array.length).fill(1);
  const leftProducts = new Array(array.length).fill(1);
  const rightProducts = new Array(array.length).fill(1);

  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i > -1; i--) {
    rightProducts[i] = rightRunningProduct;
    rightRunningProduct *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    products[i] = leftProducts[i] * rightProducts[i];
  }

  return products;
}

function smallestDifference(arrayOne, arrayTwo) {
  // brute force approach.
  // definitely O(n)^2 time.
  // how to calc. space?
  // let smallestDiff = Infinity;
  // let retPair = [];

  // for (let i = 0; i < arrayOne.length; i++) {
  //   for (let j = 0; j < arrayTwo.length; j++) {
  //     let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
  //     if (diff < smallestDiff) {
  //       smallestDiff = diff;
  //       retPair = [arrayOne[i], arrayTwo[j]];
  //     }
  //   }
  // }
  // return retPair;
  // *****************************
  // Algo expert solution #1
  // uses two pointers and compares each number.
  // Time = O(Nlog(N) + Mlog(M))
  // Space = O(1) (sorting arrays in place)
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }

  return smallestPair;
}

function moveElementToEnd(array, toMove) {
  // i think this is O(n);
  // but solution doesnt seem optimal.
  // let leftIdx = 0;
  // let rightIdx = array.length - 1;

  // while (leftIdx < rightIdx) {
  //   if (array[rightIdx] === toMove) {
  //     rightIdx--;
  //     if (array[leftIdx] !== toMove) {
  //       leftIdx++;
  //       continue;
  //     }
  //     continue;
  //   }
  //   if (array[leftIdx] === toMove && array[rightIdx] !== toMove) {
  //     let left = array[leftIdx];
  //     array[leftIdx] = array[rightIdx];
  //     array[rightIdx] = left;
  //   }
  //   leftIdx++;
  // }
  // return array;
  // ******************************************
  // Algo expert solution:
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) swap(i, j, array);
    i++;
  }
  return array;

  function swap(i, j, swap) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
}

function isMonotonic(array) {
  // check if len <= 1, if yes return true;
  // if (array.length <= 1) return true;

  // let dir = "";

  // for (let i = 0; i < array.length; i++) {
  //   if (i > 0 && array[i] > array[i - 1]) dir = "asc";
  //   if (i > 0 && array[i] < array[i - 1]) dir = "desc";

  //   if (dir === "asc" && array[i + 1] < array[i]) return false;
  //   if (dir === "desc" && array[i + 1] > array[i]) return false;
  // }

  // return true;
  // ************************
  // Algo expert solution (cleaner)
  let isNonDec = true;
  let isNonInc = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDec = false;
    if (array[i] > array[i - 1]) isNonInc = false;
  }

  return isNonDec || isNonInc;
}

function firstDuplicateValue(array) {
  // my solution
  // time: O(n) :)
  // space: O(n) also :( -> its possible to solve in ->
  // O(1) space.
  // let check = {};

  // for (const num of array) {
  //   if (num in check) return num;
  //   else check[num] = true;
  // }
  // return -1;
  // *******************************
  // same thing but nice use of sets:
  // const seen = new Set();
  // for(const value of array){
  //   if(seen.has(value)) return value;
  //   seen.add(value)
  // }
  // return -1;
  // ********************************
  // O(n) time | O(1) space
  for (const value of array) {
    const absValue = Math.abs(value);
    if (array[absValue - 1] < 0) return absValue;
    array[absValue - 1] *= -1;
  }
  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])); // 2
console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4])); // 3
const t0 = new Date().getTime();
console.log(firstDuplicateValue([3, 1, 3, 1, 1, 4, 4])); //3
const t1 = new Date().getTime();
console.log("Call took " + (t1 - t0) + " milliseconds.");
