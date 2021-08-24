/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  if (!root) {
    return 0;
  }
  let result = 0;
  function DFS (root, value, isChild) {
    let left = 0;
    if (root.left && root.left.val === value) {
      left = DFS(root.left, value, false);
    }
    let right = 0;
    if (root.right && root.right.val === value) {
      right = DFS(root.right, value, false);
    }
    if (!isChild) {
      return Math.max(right, left) + 1;
    } else {
      return right + left + 1;
    }
  }
  function preOrder (root) {
    if (!root) {
      return;
    }
    result = Math.max(result, DFS(root, root.val, true));
    preOrder(root.left);
    preOrder(root.right);
  }
  preOrder(root);
  return result - 1;
};
