/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {
  if (!root) {
    return null;
  }
  if (root.val < L) {
    root = trimBST(root.right, L, R);
  } else if (root.val > R) {
    root = trimBST(root.left, L, R);
  } else {
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
  }
  return root;
};
