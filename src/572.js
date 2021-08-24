/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
/*var isSubtree = function(s, t) {
  let nodeArr = [];
  function findRoot(root) {
    if (root === null) return;
    findRoot(root.left);
    if (root.val === t.val) {
      nodeArr.push(root);
    }
    findRoot(root.right);
  }
  findRoot(s);
  if (nodeArr.length === 0) {
    return false;
  }
  let result = true;
  function inOrder(s, t) {
    if (s === null || t === null) {
      if (s === null && t === null) {
        return;
      }
      return result = false;
    }
    inOrder(s.left,t.left);
    if (s.val !== t.val) {
      result = false;
    }
    inOrder(s.right,t.right);
  }
  console.log(nodeArr);
  for(let i = 0; i < nodeArr.length; ++i) {
    result = true;
    inOrder(nodeArr[i], t);
    if (result) return true;
  }
  return false;
};*/

/*var isSubtree = function(s, t) {
  let strS = [];
  let strT = [];
  function preOrder(root, arr) {
    if (root === null) {
      arr.push('X');
      return;
    }
    arr.push(root.val);  
    preOrder(root.left, arr);
    preOrder(root.right, arr);
  }
  preOrder(s, strS);
  preOrder(t, strT);
  return (',' + strS.join(',')+',').indexOf(',' + strT.join(',')+',') !== -1 ? true : false;
}*/
function check(s, t) {
  if (s === null && t === null) {
    return true;
  } else if (s === null || t === null) {
    return false;
  }
  if (s.val !== t.val) return false;
  const left = check(s.left, t.left);
  const right = check(s.right, t.right);
  return left && right;
}
var isSubtree = function(s, t) {
  let result = true;
  let stack = [s];
  while(stack.length > 0) {
    let node = stack.pop();
    if (node.val === t.val) {
      if (check(node, t)) return true;
    }
    node.left !== null && stack.push(node.left);
    node.right !== null && stack.push(node.right);
  }
  return false;
};
/*var isSubtree = function(s, t) {
  let strS = [];
  let strT = [];
  function preOrder(root, arr) {
    if (root === null) {
      arr.push('X');
      return;
    }
    arr.push(root.val);  
    preOrder(root.left, arr);
    preOrder(root.right, arr);
  }
  preOrder(s, strS);
  preOrder(t, strT);
  return (',' + strS.join(',')+',').indexOf(',' + strT.join(',')+',') !== -1 ? true : false;
}*/
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
};
let n0 = new TreeNode(0);
let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
n3.left = n4;
n3.right = n5;
n4.left = n1;
n4.right = n2;
n1.left = n0;
let m0 = new TreeNode(4);
let m1 = new TreeNode(1);
let m2 = new TreeNode(2);
m0.left = m1;
m0.right = m2;
let f1 = new TreeNode(2);
let f2 = new TreeNode(12);
console.log(isSubtree(n3,m0));