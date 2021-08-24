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
var minDiffInBST = function (root) {
  let preNum;
  let diff = Infinity;
  function inOrder (root) {
    if (root === null) {
      return;
    }
    inOrder(root.left);
    if (preNum) {
      diff = Math.min(diff, root.val - preNum);
    }
    preNum = root.val;
    inOrder(root.right);
  }
  inOrder(root);
  return diff;
};
