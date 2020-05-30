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

console.log(reverse("This is a typical sentence."));
