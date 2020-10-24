function sortDrinkByPrice(drinks) {
  let sorted = drinks.sort((a, b) => {
    return a.price - b.price;
  });
  return sorted;
}

const drinks1 = [
  { name: "lemonade", price: 90 },
  { name: "lime", price: 432 },
  { name: "peach", price: 23 },
];

// function maxTotal(nums) {
//   let sorted = nums.sort((a, b) => {
//     return a - b;
//   });

//   return sorted.slice(5).reduce((el, acc) => {
//     return el + acc;
//   }, 0);
// }

function maxTotal(nums) {
  return nums
    .sort((a, b) => a - b)
    .slice(5)
    .reduce((a, b) => a + b, 0);
}

function findLargestNums(arrList) {
  let final = [];
  arrList.forEach((element) => {
    final.push(Math.max(...element));
  });
  return final;
}

// @Better
// function findLargestNums(arr) {
//     return arr.map(x => Math.max(...x));
//   }

function sortDescending(num) {
  return parseInt(num.toString().split("").sort().reverse().join(""));
}

function sortNumsAscending(arr) {
  if (!arr) return [];
  return arr.sort(function (a, b) {
    return a - b;
  });
}

// better
// function sortNumsAscending(arr) {
//   return (arr || []).sort((a,b) => a - b)
// }

function highLow(str) {
  let numNums = str.split(" ").map((el) => parseInt(el));
  return `${Math.max(...numNums)} ${Math.min(...numNums)}`;
}

function leftDigit(num) {
  return parseInt(num.match(/\d+/)[0]);
}

function sortByLength(arr) {
  return arr.sort(function (a, b) {
    return a.length - b.length;
  });
}

function inBox(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].indexOf("*") !== -1 &&
      arr[i].indexOf("*") > 0 &&
      arr[i].indexOf("*") < arr[i].length - 1
    ) {
      return true;
    }
  }
  return false;
}

function uniqueSort(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}

function missingNum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  for (let i = 1; i <= 10; i++) {
    if (!sorted.includes(i)) {
      return i;
    }
  }
}

function reverse(str) {
  return str
    .split(" ")
    .map((el) => {
      if (el.length >= 5) {
        return el.split("").reverse().join("");
      }
      return el;
    })
    .join(" ");
}

function removeSmallest(arr) {
  if (!arr) return [];
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr;
}

function uniqueInOrder(sequence) {
  let splitter = typeof sequence === "string" ? sequence.split("") : sequence;
  return splitter.filter((el, i) => {
    if (i === 0) {
      return el;
    }
    if (i > 0) {
      if (splitter[i - 1] !== el) {
        return el;
      }
    }
    return null;
  });
}

// better
// function uniqueInOrder(sequence) {
//   return Array.from(sequence).filter((x,i,a) => x !== a[i-1]);
// }

// word builder
function wordBuilder(letters, positions) {
  let final = [];

  for (let i = 0; i < letters.length; i++) {
    final[positions[i]] = letters[i];
  }

  return final.join("");
}

// rearranged diff
function rearrangedDifference(num) {
  let max = num.toString().split("");
  max = parseInt(
    max
      .sort((a, b) => {
        return parseInt(b) - parseInt(a);
      })
      .map((el) => {
        return parseInt(el);
      })
      .join("")
  );
  let min = num.toString().split("");
  min = parseInt(
    min
      .sort((a, b) => {
        return parseInt(a) - parseInt(b);
      })
      .map((el) => {
        return parseInt(el);
      })
      .join("")
  );

  return max - min;
}

function risiko(att, def) {
  let finalCount = 0;

  let sortedAtt = att.sort((a, b) => {
    return b - a;
  });

  let sortedDef = def.sort((a, b) => {
    return b - a;
  });

  sortedAtt.forEach((el, i) => {
    if (el > sortedDef[i]) finalCount++;
  });

  return finalCount;
}

// better
// const risiko = (att, def) => {
// 	[att, def].forEach(roll => roll.sort().reverse());
// 	return att.filter((value, die) => value > def[die]).length;
// }

// unfinished *************
function sortByCharacter(arr, n) {
  return arr.sort((a, b) => {
    console.log(a[n - 1], b[n - 1]);
    return a[n - 1] + b[n - 1];
  });
}
// **************************

function sortByLength(arr) {
  return arr.sort((a, b) => {
    return a.length - b.length;
  });
}

function zipIt(women, men) {
  if (women.length !== men.length) return "sizes don't match";
  return women.map((el, i) => [el, men[i]]);
}

function sortIt(arr) {
  return arr.sort((a, b) => a - b);
}
// if int/arr checks were needed:
// const sortIt = arr => arr.sort((a,b) => (a[0] || a) - (b[0] || b));

function numberLenSort(arr) {
  return arr.sort((a, b) => {
    return a.toString().split("").length - b.toString().split("").length;
  });
}
// dont need to split: strings have a "length" prop?
// function number_len_sort(lst) {
//   return lst.sort((a, b) => a.toString().length - b.toString().length);
// }

function ascDesNone(arr, str) {
  if (str === "Asc") return arr.sort((a, b) => a - b);
  if (str === "Des") return arr.sort((a, b) => b - a);
  return arr;
}

console.log(ascDesNone([4, 3, 2, 1], "Asc"));
console.log(ascDesNone([7, 8, 11, 66], "Des"));
console.log(ascDesNone([1, 2, 3, 4], "None"));
