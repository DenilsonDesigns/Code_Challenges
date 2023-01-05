function absolute(n) {
  return Number(
    n
      .toString()
      .split("")
      .filter((e) => e !== "-")
      .join("")
  );
}
// better
// function absolute(n) {
// 	return( n**2)**0.5
// }\

function oddishOrEvenish(num) {
  return (num + "").split("").reduce((acc, el) => acc + +el, 0) % 2 === 0
    ? "Evenish"
    : "Oddish";
}

function doesBrickFit(a, b, c, w, h) {
  const sortedBrickDimensions = [a, b, c].sort();
  const sortedHoleDimensions = [w, h].sort();

  return (
    sortedBrickDimensions[0] <= sortedHoleDimensions[0] &&
    sortedBrickDimensions[1] <= sortedHoleDimensions[1]
  );
}

console.log(
  // ***
  doesBrickFit(1, 3, 1, 1, 1), // true,
  doesBrickFit(1, 2, 2, 1, 1) // false
  // ***
);
