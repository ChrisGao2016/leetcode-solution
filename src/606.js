/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  let strArr = [];
  function preOrder(root) {
    if (root === null) return;
    strArr.push(root.val);
    if (root.right === null && root.left === null) return;
    strArr.push('(');
    preOrder(root.left);
    strArr.push(')');
    if (root.right) {
      strArr.push('(');
      preOrder(root.right);
      strArr.push(')');
    }
  }
  preOrder(t);
  return strArr.join('');
};