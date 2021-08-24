/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function searchSmaller (root) {
  if (!root) {
    return null;
  }
  let left;
  if (root.left && root.left.val > root.val) {
    left = root.left.val;
  }
  let right;
  if (root.right && root.right.val > root.val) {
    right = root.right.val;
  }
  if (!left) {
    left = searchSmaller(root.left);
  }
  if (!right) {
    right = searchSmaller(root.right);
  }
  if (left && right) {
    return Math.min(left, right);
  } else {
    return left || right;
  }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  if (!root) {
    return -1;
  }
  return searchSmaller(root) || -1;
};
