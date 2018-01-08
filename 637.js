/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function leverOrder(root, results) {
  let numArr1 = [];
  let numArr2 = [];
  if (root) {
    numArr1.push(root);    
  }
  while(numArr1.length) {
    let sum = 0;
    const count = numArr1.length;  
    while(numArr1.length) {
      const node = numArr1.shift();
      sum += node.val;
      if (node.left) {
        numArr2.push(node.left);
      }
      if (node.right) {
        numArr2.push(node.right);
      }
    }
    results.push(sum/count);
    numArr1 = numArr2;
    numArr2 = [];
  }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const results = [];
  leverOrder(root, results);
  return results;
};
