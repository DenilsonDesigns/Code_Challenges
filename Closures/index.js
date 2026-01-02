// function makeCounter() {
//   let count = 0;
//   let word = "a";

//   return function () {
//     count++;
//     word += "b";
//     return [count, word];
//   };
// }

// const counterA = makeCounter();
// const counterB = makeCounter();

// console.log(counterA());
// console.log(counterA());
// console.log(counterB());
// console.log(counterA());
// console.log(counterB());

// ***
let count = 0;
function makeCounter() {
  let innerCount = 0;
  return function () {
    count++;
    innerCount++;
    return [count, innerCount];
  };
}

const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA());
console.log(counterA());
console.log(counterB());
console.log(counterA());
console.log(counterB());
