/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function midOrder(root, numArr) {
  if (!root) {
    return;
  }
  midOrder(root.left, numArr);
  numArr.push(root.val);
  midOrder(root.right, numArr);
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (!root) {
    return false;
  }
  let numArr = [];
  midOrder(root, numArr);
  let pos1=0;
  let pos2=numArr.length-1;
  while(pos1 !== pos2) {
    const sum = numArr[pos1] + numArr[pos2];
    if (sum === k) {
      return true;
    } else if (sum > k){
      --pos2;
    } else {
      ++pos1;
    }
  }
  return false;
};
