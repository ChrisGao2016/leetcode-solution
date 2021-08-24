
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0;
  function rightOrder(root) {
    if (!root) {
      return 0;
    }
    rightOrder(root.right);
    root.val += sum;
    sum = root.val;
    rightOrder(root.left);
  }
  rightOrder(root);
  return root;
};
