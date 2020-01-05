// Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step. See step 1, 2 and 3 in the image above.

// Examples
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21

// matchHouses(87) ➞ 436

function matchHouses(step) {
  if (step === 0) {
    return 0;
  }

  return step * 6 - (step - 1);
}

console.log(matchHouses(0));
