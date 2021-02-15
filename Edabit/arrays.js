function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}

function length(s) {
  return s.split("").reduce((sum, _) => sum + 1, 0);
}

function arrBetween(num1, num2, arr) {
  return arr.filter((e) => e > num1 && e < num2);
}

function sayWhat(obj) {
  let str = "";
  for (let i = 1; i <= Object.keys(obj).length; i++) {
    str += obj[i] + " ";
  }
  return str + obj[2];
}
// Better
// return `${Object.values(obj).join(" ")} ${obj[2]}`;

function getFilename(path) {
  return path.split("/").pop();
}

function integerBoolean(n) {
  return n.split("").map((e) => (e === "1" ? true : false));
}

function filterArray(arr) {
  return arr.filter((e) => Number.isInteger(e));
}

function existsHigher(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] >= n) return true;
  }
  return false;
}
// better
// function existsHigher(arr, n) {
// 	return Math.max(...arr)>=n
// }

function calcDeterminant(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

function checkFactors(factors, num) {
  return factors.every((el) => num % el === 0);
}
// better
// function checkFactors(factors, num) {
// 	return !factors.find(n => num % n)
// }

function nextElement(arr) {
  return arr[arr.length - 1] + (arr[arr.length - 1] - arr[arr.length - 2]);
}
// same but shorter
// function nextElement(arr) {
// 	return arr[arr.length - 1] + (arr[1] - arr[0]);
// }

function canCapture([yourRook, opponentsRook]) {
  return yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1];
}

function findBob(names) {
  return names.indexOf("Bob");
}

function oddProduct(arr) {
  return arr.filter((el) => el % 2 !== 0).reduce((acc, el) => (el *= acc), 1);
}

function countdown(start) {
  let arr = [];
  for (let i = start; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}
// Slick Daddy
// const countdown = start => [...Array(start + 1).keys()].reverse();

function formatDate(date) {
  return date.split("/").reverse().join("");
}

function transform(arr) {
  return arr.map((el) => (el % 2 === 0 ? el - 1 : el + 1));
}

function unlucky13(nums) {
  return nums.filter((el) => el % 13 !== 0);
}

function mysteryFunc(arr, num) {
  return arr.map((el) => el % num);
}

function filterDigitLength(arr, num) {
  return arr.filter((el) => el.toString().length === num);
}

function checkEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
// Slick Daddy
// function checkEquals(arr1, arr2) {
// 	return arr1.every((x, i) => x === arr2[i])
// }

function correctStream(user, correct) {
  return user.map((el, i) => (el === correct[i] ? 1 : -1));
}

function greetPeople(names) {
  return names.map((el) => `Hello ${el}`).join(", ");
}

function lastItem(input) {
  return input[input.length - 1];
}

function evenOddPartition(arr) {
  let evens = arr.filter((el) => el % 2 === 0);
  let odds = arr.filter((el) => el % 2 !== 0);
  return [evens, odds];
}

function mean(nums) {
  return parseFloat(
    (nums.reduce((acc, el) => acc + el, 0) / nums.length).toFixed(1)
  );
}

function convertCartesian(x, y) {
  return x.map((el, i) => [el, y[i]]);
}

function getExtension(arr) {
  return arr.map((el) => el.split(".")[el.split(".").length - 1]);
}
// Official Slick Daddy Club
// function getExtension(arr) {
// 	return arr.map(x => x.split(".").pop())
// }

function minimumRemovals(arr) {
  return arr.reduce((acc, el) => acc + el, 0) % 2 === 0 ? 0 : 1;
}
// more simplified
// const minimumRemovals = a => a.reduce((t,c) => t+c)%2

function findEvenNums(num) {
  return [...Array(num + 1).keys()].filter((el) => el % 2 === 0 && el > 0);
}

function getSequence(low, high) {
  return Array.from({ length: high - low + 1 }, (_, i) => low + i);
}

function last(a, n) {
  return a.length === 0 || a.length < n ? "invalid" : n > 0 ? a.splice(-n) : [];
}

function acceptedWords(list) {
  return list.filter((x) => /^[^C]/.test(x));
}

function countCharacters(arr) {
  let sum = 0;
  arr.forEach((el) => (sum += el.length));
  return sum;
}

function divisible(arr) {
  return arr.reduce((a, b) => a * b) % arr.reduce((a, b) => a + b) === 0;
}

function arrayLessThan100(arr) {
  return arr.reduce((a, b) => a + b) < 100;
}

function sum(arr) {
  return arr.length === 0 ? 0 : arr.pop() + sum(arr);
}

function same(a1, a2) {
  return new Set(a1).size === new Set(a2).size;
}

function deNest(arr) {
  return arr.flat(Infinity)[0];
}

function mirror(arr) {
  return arr.concat([...arr].reverse().slice(1));
}

function rogerShots(arr) {
  let bottles = 6;
  let seconds = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Bang!") {
      bottles--;
      seconds += 0.5;
    } else if (arr[i] === "BangBang!") {
      bottles -= 2;
      seconds += 0.5;
    }
    if (bottles === 0) break;
  }
  return seconds;
}

function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]];
}

function numberSplit(n) {
  return [Math.floor(n / 2), n - Math.floor(n / 2)];
}

function getOnlyEvens(nums) {
  return nums.filter((el, i) => el % 2 === 0 && i % 2 === 0);
}

function isAvgWhole(arr) {
  return Number.isInteger(arr.reduce((acc, el) => acc + el) / arr.length);
}

function calculateDifference(obj, limit) {
  return Object.values(obj).reduce((t, n) => t + n, 0) - limit;
}

function societyName(friends) {
  return friends
    .map((el) => el[0])
    .sort()
    .join("");
}

function formatPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 7)
    .join("")}-${numbers.slice(7, 11).join("")}`;
}
// I like this solution:
// function formatPhoneNumber(numbers) {
//   let masked = '(###) ###-####';
//   numbers.forEach(v => masked = masked.replace("#", v));
//   return masked;
// }

function valueAt(arr, i) {
  return arr[Math.floor(i)];
}

function fiftyThirtyTwenty(ati) {
  let r = {};
  r["Needs"] = ati * 0.5;
  r["Wants"] = ati * 0.3;
  r["Savings"] = ati * 0.2;
  return r;
}

function determineLever(arr) {
  return arr[1] == "f"
    ? "first class lever"
    : arr[2] == "f"
    ? "second class lever"
    : "third class lever";
}

function outlierNumber(arr) {
  let odds = [],
    evens = [];
  arr.forEach((el) => {
    el % 2 == 0 ? evens.push(el) : odds.push(el);
  });
  return odds.length == 1 ? odds[0] : evens[0];
}

function parseArray(arr) {
  return arr.map((el) => el + "");
}

function binaryToDecimal(arr) {
  return parseInt(arr.map(String).join(""), 2);
}

function findFactors(num) {
  let r = [];
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      r.push(i);
    }
  }
  return r;
}
// cleaner
// [...Array(n+1).keys()].filter(a => n % a == 0);

function rotateByOne(arr) {
  return [arr[arr.length - 1]].concat(arr.slice(0, arr.length - 1));
  // best
  // [a.pop(), ...a]
}

function fruitSalad(arr) {
  let chunks = [];
  arr.forEach((el) => {
    chunks.push(el.slice(0, el.length / 2));
    chunks.push(el.slice(el.length / 2));
  });
  return chunks.sort().join("");
}

function forbiddenLetter(char, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(char)) {
      return false;
    }
  }
  return true;
  // better
  // ![...a.join('')].includes(c)
}

function arithmeticProgression(start, diff, n) {
  let arr = [];
  arr[0] = start;
  for (let i = 1; i < n; i++) {
    arr[i] = arr[i - 1] + diff;
  }
  return arr.join(", ");
}

function arrayValuesTypes(arr) {
  return arr.map((el) => typeof el);
}

function invertArray(arr) {
  return arr.map((el) => (el === 0 ? 0 : -el));
}

function birthdayCakeCandles(candles) {
  return candles.filter((el) => el === Math.max(...candles)).length;
}

function sumMinimums(arr) {
  return arr.map((el) => Math.min(...el)).reduce((a, b) => a + b, 0);
}

function sumFive(arr) {
  return arr.filter((el) => el > 5).reduce((a, b) => a + b, 0);
}

function battingAvg(arr) {
  let H = 0,
    B = 0;
  for (let [h, b] of arr) {
    H += h;
    B += b;
  }
  return (H / B).toFixed(3).slice(1);
}

function trimmedAverages(arr) {
  return Math.round(
    arr
      .sort((a, b) => a - b)
      .slice(1, arr.length - 1)
      .reduce((a, b) => a + b, 0) /
      (arr.length - 2)
  );
}

console.log(trimmedAverages([4, 5, 7, 100]));
console.log(trimmedAverages([10, 25, 5, 15, 20]));
console.log(trimmedAverages([14, 8, 8]));
// console.log(findEvenNums(9));
