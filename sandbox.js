function firstFunc(str) {
  return str.split(" ");
}

function secondFunc(str) {
  const reversedStr = reverseString(str);

  return reversedStr;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(firstFunc("asdf"));
console.log(secondFunc("asdf"));
