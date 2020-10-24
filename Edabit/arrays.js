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

console.log(nextElement([3, 5, 7, 9]));
