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
var diameterOfBinaryTree = function(root) {
  let max = 0;
  function postOrder(root) {
    if (root === null) {
      return 0;
    }
    const left = postOrder(root.left);
    const right = postOrder(root.right);
    let path = left + right;
    if (max < path) {
      max = path;
    }
    return Math.max(left+1, right+1);
  }
  postOrder(root);
  return max;
};