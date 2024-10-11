// 100. Same Tree
var isSameTree = function (p, q) {
  if (!p && !q) return true;

  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.left, q.right);
};

// 101. Symmetric Tree
var isSymmetric = function (root) {
  return dfs(root.left, root.right);

  function dfs(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      dfs(left.left, right.right) &&
      dfs(left.right, right.left)
    );
  }
};

// 104. Maximum Depth of Binary Tree
var maxDepth = function (root) {
  // recursion:
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  // bfs:

  // dfs:
};
