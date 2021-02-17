// Edabit filters: tags: algorithms, difficulty: easy;

function isSastry(number) {
  let n = parseInt(number + "" + (number + 1 + ""));
  return Math.sqrt(n) % 1 === 0;
}

function pingPong(arr, win) {
  let rLen = win ? arr.length * 2 : arr.length * 2 - 1;
  let r = [];
  for (let i = 1; i <= rLen; i++) {
    i % 2 == 0 ? r.push("Pong!") : r.push("Ping!");
  }
  return r;
}

function makesTen(a, b) {
  if (a === 10 || b === 10) return true;
  if (a + b === 10) return true;
  return false;
}

function countDs(sentence) {
  return sentence
    .split("")
    .map((el) => el.toLowerCase())
    .filter((el) => el === "d").length;
  // return [...sentence].filter(x=> x=='d'|| x=='D').length
}

function ageDifference(fAge, sAge) {
  return Math.abs((fAge - sAge) * 2 - fAge);
}

function nTablesPlusOne(n) {
  let r = [];
  for (let i = n; r.length < 10; i++) {
    if (i % n === 0) r.push(i + 1);
  }
  return r.join(",");
}

// print tests:
console.log(nTablesPlusOne(7));
console.log(ageDifference(55, 30));
console.log(ageDifference(22, 1));
