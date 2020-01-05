// Create a function that finds the maximum range of a triangle's third edge.

// Examples
// nextEdge(8, 10) ➞ 17

// nextEdge(5, 7) ➞ 11

// nextEdge(9, 2) ➞ 10
// Notes
// (side1 + side2) - 1 = maximum range of third edge.
// All given triangles have side lengths that are positive integers.
// Don't foget to return the result.

function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}

console.log(nextEdge(9, 2));
