function tickets(billArr) {
  let cashierBills = [];

  for (let i = 0; i < billArr.length; i++) {
    if (billArr[i] === 25) {
      cashierTotal.push(billArr[i]);
      continue;
    }
    if (billArr[i] > 25) {
      let changeNeeded = billArr[i] - 25;
      // check in array to get bills;
      if (hasCorrectChange(changeNeeded, cashierBills)) {
        // need to slice out bills from cashierBills

        cashierTotal.push(billArr[i]);
        continue;
      } else {
        return "NO";
      }
    }
  }

  return "YES";
}

function hasCorrectChange(amt, notesInHand) {
  // cycle through notes to find
}

// console.log(tickets([25, 25, 50])); // => YES
// console.log(tickets([25, 100])); // => NO. Vasya will not have enough money to give change to 100 dollars
// console.log(tickets([25, 25, 50, 50, 100])); // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

console.log(hasCorrectChange());
