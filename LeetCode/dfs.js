var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  // internal DFS function:
  function dfs(r, c, index) {
    // if we matched all characters, return true:
    if (index === word.length) return true;

    // checking out of bounds or checking if the current char doesn't match current index of word:
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      board[r][c] !== word[index]
    ) {
      return false;
    }

    // Store current cell in temp var
    let temp = board[r][c];
    board[r][c] = "#";

    // check in all 4 directions:
    let found =
      dfs(r + 1, c, index + 1) ||
      dfs(r - 1, c, index + 1) ||
      dfs(r, c + 1, index + 1) ||
      dfs(r, c - 1, index + 1);

    // Backtrack: Restore original letter
    board[r][c] = temp;

    return found;
  }

  // Iterate through the board to find the first letter of the word
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === word[0] && dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false; // If no path found
};

// XXX: practice Q from GPT:
var findTarget = function (grid, target) {
  const rows = grid.length;
  const cols = grid[0].length;

  // implement dfs:
  function dfs(grid, r, c, target, visited) {
    // check for out of bounds:
    if (r < 0 || c < 0 || r >= rows || c >= cols) {
      return false;
    }

    if (visited[r][c]) {
      return false;
    }

    // Mark the current cell as visited
    visited[r][c] = true;

    // we found element, bubble up true:
    if (grid[r][c] === target) return true;

    // didn't find element, keep going

    let found =
      dfs(grid, r + 1, c, target, visited) ||
      dfs(grid, r - 1, c, target, visited) ||
      dfs(grid, r, c + 1, target, visited) ||
      dfs(grid, r, c - 1, target, visited);

    return found;
  }

  // Initialize visited array to keep track of visited cells
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  // call the method:
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(grid, r, c, target, visited)) {
        return true;
      }
    }
  }

  return false; // If no element found
};

console.log(
  // ***
  findTarget(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  ),
  // ***
  findTarget(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    11
  )
);

// ["A", "B", "C", "E"],
// ["S", "F", "C", "S"],
// ["A", "D", "E", "E"],
