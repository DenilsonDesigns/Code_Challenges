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

console.log(arrayOfProducts([5, 1, 4, 2]));
console.log(arrayOfProducts([1, 8, 6, 2, 4]));
const t0 = new Date().getTime();
console.log(arrayOfProducts([-5, 2, -4, 14, -6]));
const t1 = new Date().getTime();
console.log("Call took " + (t1 - t0) + " milliseconds.");
