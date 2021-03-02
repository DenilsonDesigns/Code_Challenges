// code challenges falling under the tag "logic"

function boolToString(flag) {
  return flag + "";
}

function returnNegative(n) {
  return n > 0 ? -n : n;
}

function repeatString(txt, n) {
  return typeof txt === "string" ? txt.repeat(n) : "Not A String !!";
}

function isEven(n) {
  return n % 2 === 0 ? true : false;
}

function whoWinsTonight(coins, space, price, size) {
  let bill = Math.floor(coins / price);
  let will = Math.floor(space / size);
  return will === bill ? "Tie" : will > bill ? "Will" : "Bill";
}

function shouldServeDrinks(age, onBreak) {
  return age >= 18 && !onBreak ? true : false;
}

function flipBool(b) {
  return b ? 0 : 1;
}

function twoDigitSum(n) {
  let strArr = n.toString().split("");
  return strArr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

function areTrue(a, b) {
  return a && b ? "both" : a ? "first" : b ? "second" : "neither";
}

function longestString(str1, str2) {
  return [...new Set((str1 + str2).split(""))].sort().join("");
}

function rotateMaxNumber(num) {
  return parseInt(
    String(num)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(rotateMaxNumber(123));
console.log(rotateMaxNumber(1546));
console.log(rotateMaxNumber("001"));
