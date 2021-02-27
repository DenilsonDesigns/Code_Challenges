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

console.log(repeatString("Mubashir", 2));
console.log(repeatString(1990, 3));
