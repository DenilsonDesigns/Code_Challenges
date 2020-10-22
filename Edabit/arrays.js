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

console.log(filterArray([1, 2, 3, "a", "b", 4]));
