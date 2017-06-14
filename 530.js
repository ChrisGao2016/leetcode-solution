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
  let root = new TreeNode(0);
  let right1 = new TreeNode(2236);
  let left1 = new TreeNode(1227);
  let left2 = new TreeNode(519);
  root.right = right1;
  right1.left = left1;
  left1.left = left2;
// recursive solution
/*var getMinimumDifference = function(root) {
  let pre = undefined;
  let diff = Infinity;
  function inOrder(root) {
    if (root === null) {
      return;
    }
    inOrder(root.left);
    if (pre !== undefined && diff > root.val - pre) {
      diff = root.val - pre;
    }
    pre = root.val;
    inOrder(root.right);
  }
  inOrder(root);
  return diff;
};*/

var getMinimumDifference = function(root) {
  let pre = undefined;
  let diff = Infinity;
  var stack = [];
  let curNode = root;
  stack.push(root);
  while(curNode.left) {
    curNode = curNode.left;
    stack.push(curNode);
  }
  while(stack.length !== 0) {
    curNode = stack.pop();
    if (pre !== undefined && diff > curNode.val - pre) {
      diff = curNode.val - pre;
    }
    pre = curNode.val;
    if (curNode.right) {
      curNode = curNode.right;
      stack.push(curNode);
      while(curNode.left) {
        curNode = curNode.left;
        stack.push(curNode);
      }
    }
  }
  return diff;
}
console.log(getMinimumDifference(root));