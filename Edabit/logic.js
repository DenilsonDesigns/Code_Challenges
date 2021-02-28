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

console.log(shouldServeDrinks(17, true));
console.log(shouldServeDrinks(30, true));
console.log(shouldServeDrinks(18, false));
