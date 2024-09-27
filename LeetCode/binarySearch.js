// 704. Binary Search
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // find middle point:
    // how to for even size arrays?
    let middle = left + Math.floor((right - left) / 2);
    let currentElement = nums[middle];

    // if we found it, return it
    if (currentElement === target) {
      return middle;
    }

    // if its higher, move left point across to it (+1 cos we dont need to check it again)
    if (currentElement < target) {
      left = middle + 1;
    }

    // if its lower, move rightg down (-1 cos we dont need to check it again)
    if (currentElement > target) {
      right = middle - 1;
    }
  }

  return -1;
};

// 35. Search Insert Position
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    let currentElement = nums[middle];

    if (currentElement === target) {
      return middle;
    }

    if (currentElement < target) {
      left = middle + 1;
    }

    if (currentElement > target) {
      right = middle - 1;
    }
  }

  return left;
};

// 374. Guess Number Higher or Lower
var guessNumber = function (n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    // find middle point:
    // how to for even size arrays?
    let middle = left + Math.floor((right - left) / 2);
    let currentElement = guess(middle);

    // if we found it, return it
    if (middle === currentElement) {
      return middle;
    }

    // if its higher, move left point across to it (+1 cos we dont need to check it again)
    if (currentElement === -1) {
      left = middle + 1;
    }

    // if its lower, move rightg down (-1 cos we dont need to check it again)
    if (currentElement === 1) {
      right = middle - 1;
    }
  }

  return -1;
};

console.log(
  // ***
  guessNumber(2) // 2
  // ***
);
