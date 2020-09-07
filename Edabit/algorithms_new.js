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

// print tests:
console.log(pingPong(["Ping!", "Ping!", "Ping!"], true));
console.log(pingPong(["Ping!", "Ping!"], false));
console.log(pingPong(["Ping!"], true));
