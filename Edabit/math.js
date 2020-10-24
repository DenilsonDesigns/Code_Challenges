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
// }

console.log(absolute(250));
