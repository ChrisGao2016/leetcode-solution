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
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  let root = new TreeNode(1);
  let right1 = new TreeNode(2);
  let left1 = new TreeNode(3);
  let left2 = new TreeNode(5);
  root.right = right1;
  root.left = left1;
  left1.left = left2;
var findTilt = function(root) {
  let tilt = 0;
  function postOrder(root) {
    if (root === null) {
      return 0;
    }
    let left = postOrder(root.left);
    let right = postOrder(root.right);
    tilt += Math.abs(left - right);
    return root.val + left + right;
  }
  postOrder(root);
  return tilt;
};
console.log(findTilt(root));