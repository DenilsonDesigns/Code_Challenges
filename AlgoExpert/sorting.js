// ***BuBBle Sort***
// What is Bubble sort?
// Simplest sorting algo that works by repeatedly swapping
// adjacent elements if they are in the wrong order.
// https://www.geeksforgeeks.org/bubble-sort/
// Swapping happens in place.
// Best use case:
// Bubble sort is Space: O(1). This is useful when memory is a consideration.
// Worst case Time: O(n^2) therefore it is not very fast.
// Best case Time: O(n): this is for an array that is already sorted.
function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    // setting to true, if below if cond. doesnt trigger
    // it will stay true (meaning it found no swaps)
    // and return the array.
    isSorted = true;
    // this will only ever go to the second last element.
    // and keep moving right with each iteration.
    for (let i = 0; i < array.length - 1 - counter; i++) {
      // if current element is greater than the element
      // to the right, swap them.
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        // we've found an out of order pair.
        // set this flag to false to iterate through again.
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

// ***Insertion Sort***
// What is insertion sort?
// Insertion sort looks for the elements place and moves all elements across
// as needed.
// Time: O(n^2) | Space: O(1)
// Use case: num of elements is small, or its known that only a small amt
// of elements have been misplaced.
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // start j at i position.
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }

  return array;
}

// ***Selection Sort***
// What is selection sort?
// Iterates through [0 ... end] and finds min element, places it at beginning.
// Then starts from [1... end] etc.
// Time: O(n^2) | Space O(1)
function selectionSort(array) {
  // startIdx will start at zero and move right as we shift numbers to left.
  let startIdx = 0;
  // no need to check last one.
  while (startIdx < array.length - 1) {
    // smallestIdx will be idx of smallest num we find.
    // start it at the beginning.
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < array.length; i++) {
      // if we find an i thats smaller than smallestIdx,
      // that i now becomes smallestIdx;
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }
    swap(startIdx, smallestIdx, array);
    startIdx++;
  }
  return array;
}
