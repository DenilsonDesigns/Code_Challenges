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

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
console.log(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]));
const t0 = new Date().getTime();
console.log(
  smallestDifference([10, 0, 20, 25], [1005, 1006, 1014, 1032, 1031])
);
const t1 = new Date().getTime();
console.log("Call took " + (t1 - t0) + " milliseconds.");
