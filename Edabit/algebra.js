function squareAreasDifference(r) {
  let outerArea = (r * 2) ** 2;
  let innerArea = (r * 2) ** 2 / 2;
  return outerArea - innerArea;
}

function abcmath(a, b, c) {
  let first = a;
  for (let i = 1; i <= b; i++) {
    first += first;
  }
  return first % c === 0;
}

function totalDistance(height, length, tower) {
  return Number(((tower / height) * (height + length)).toFixed(1));
}

function factorial(int) {
  if (int === 0) {
    return 1;
  }
  return int * factorial(int - 1);
}

function amplify(num) {
  let r = [];
  for (let i = 1; i <= num; i++) {
    let p = i % 4 === 0 ? i * 10 : i;
    r.push(p);
  }
  return r;
}

function isRepdigit(num) {
  if (num < 0) return false;
  let digits = num.toString().split("").map(Number);
  return Array.from(new Set(digits)).every((n) => n === digits[0]);
}
// better?
// const isRepdigit = n => new Set(`${n}`).size === 1;

function marathonDistance(d) {
  return [...d].reduce((a, b) => Math.abs(a) + Math.abs(b));
}

function numbersSum(arr) {
  return arr
    .filter((n) => typeof n === "number")
    .reduce((sum, el) => sum + el, 0);
}

console.log(numbersSum([1, 2, "13", "4", "645"]));
