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

function calculator(str) {
  return eval(str);
}

function area(h, w) {
  if (h < 1 || w < 1) return -1;
  return h * w;
}

function divisibleByB(a, b) {
  let ceil = Math.max(a, b);
  while (true) {
    ceil++;
    if (ceil % b == 0) return ceil;
  }
}

function numLayers(n) {
  return 2 ** n * 0.0005 + "m";
}

function solve(eq) {
  let parts = eq.split(" ");
  let sign = parts[1] === "+" ? "-" : "+";
  console.log(parts);
  return eval(parts[parts.length - 1] + sign + " " + parts[2]);
}

function lastDig(a, b, c) {
  const last = (dig) => {
    let stringed = String(dig);
    return parseInt(stringed[stringed.length - 1]);
  };
  return last(a * b) == last(c);
}

function linesAreParallel(l1, l2) {
  return l1[1] / l1[0] === l2[1] / l2[0];
}

function isAutomorphic(n) {
  return Number(String(n ** 2).slice(-String(n).length)) === n;
}

function collatz(num) {}

console.log(collatz(10));
console.log(collatz(345));
console.log(collatz(72));
