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

console.log(uniqueInOrder("12333355555522211133"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
