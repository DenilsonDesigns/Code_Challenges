function middleEarth(arr) {
  return Math.abs(arr.indexOf("Sam") - arr.indexOf("Frodo")) === 1;
}

function getDiscounts(nums, d) {
  return nums.map((el) => {
    return el * `.${parseInt(d)}`;
  });
}

function areaShape(base, height, shape) {
  return shape === "triangle" ? 0.5 * base * height : base * height;
}

function acceptIntoMovie(age, isSupervised) {
  return age >= 15 || isSupervised;
}

function carsNeeded(n) {
  return Math.ceil(n / 5);
}

function stutter(word) {
  return `${word.slice(0, 2)}... ${word.slice(0, 2)}... ${word}?`;
}

function centuryFromYear(year) {
  return Math.ceil(year / Math.pow(10, 2));
}

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

function paths(n) {
  return n < 2 ? 1 : n * paths(n - 1);
}

function triangle(n) {
  return (n * (n + 1)) / 2;
}

function dnaToRna(dna) {
  let map = {
    A: "U",
    T: "A",
    G: "C",
    C: "G",
  };
  return dna
    .split("")
    .map((el) => {
      return map[el];
    })
    .join("");
}

function boomIntensity(n) {
  let head = n >= 2 ? "B" : "b";
  let ohs = n > 2 ? "o".repeat(n) : "oo";
  let tail = n % 2 === 0 && n > 0 ? "!" : "";
  let r = `${head}${ohs}m${tail}`;
  return n % 5 === 0 && n > 0 ? r.toUpperCase() : r;
}

function solveForExp(a, b) {
  return Math.round(Math.log(b) / Math.log(a));
}

function fizzBuzz(number) {
  let r = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      r.push("FizzBuzz");
    } else if (i % 3 === 0) {
      r.push("Fizz");
    } else if (i % 5 === 0) {
      r.push("Buzz");
    } else {
      r.push(i);
    }
  }
  return r;
}

function diceGame(arr) {
  let doubles = false;
  let score = 0;

  arr.forEach((ar) => {
    if (ar[0] === ar[1]) {
      doubles = true;
    }
    score += ar[0] + ar[1];
  });

  return doubles ? 0 : score;
}

function alphNum(str) {
  return [...str]
    .map((el) => {
      return el.toLowerCase().charCodeAt(0) - 97;
    })
    .join(" ");
}

console.log(alphNum("ABCD"));
