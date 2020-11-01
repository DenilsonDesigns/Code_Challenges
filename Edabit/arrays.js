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

console.log(getSequence(1, 5));
console.log(getSequence(-10, 1));
// console.log(findEvenNums(9));
