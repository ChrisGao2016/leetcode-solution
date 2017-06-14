/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  if (root === null) return [];
  let stack = [];
  let node = root;
  while(node) {
    stack.push(node);
    node = node.left;    
  }
  let val = stack[stack.length - 1].val;
  let count = 0;
  let max = 0;
  let result = [];
  while(stack.length > 0) {
    node = stack.pop();
    if (val === node.val) {
      count++;
    } else {
      count = 1;
      val = node.val;
    }
    if (count > max) {
      max = count;
      result = [node.val];
    } else if(count === max) {
      result.push(node.val);
    }
    if (node.right) {
      node = node.right;
      while(node) {
        stack.push(node);
        node = node.left;
      }
    }
  }

  return result;
};