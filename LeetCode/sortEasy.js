// 1528. Shuffle String
function restoreString(s, indices) {
  // Time: O(n) | Space: O(n)
  let r = new Array(s.length);

  for (let i = 0; i < indices.length; i++) {
    r[indices[i]] = s[i];
  }

  return r.join("");
}

// 2724. Sort By
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

console.log(
  // ***
  sortBy([5, 4, 1, 2, 3], (x) => x)
  // ***
);
