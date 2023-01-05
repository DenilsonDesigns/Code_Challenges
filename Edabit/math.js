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

console.log(
  // ***
  oddishOrEvenish(250), // oddish,
  oddishOrEvenish(251) // evenish
  // ***
);
