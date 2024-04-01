/**
 * @param {number[][]} mat
 * @return {number[]}
 */
// 假设二维数组每个元素坐标分别为[left][right]https://leetcode.cn/problems/coin-change/
// 实际上对角线就是第一轮先从[0,0]开始，第二轮从[0,1]开始，第n轮[0,n]开始，每次下个元素下标都是left+1,right-1，到第n轮后，下一轮从[1, n-1]开始，最后一轮是[m-1,n-1]，即先横向对角线，再纵向对角线;
var findDiagonalOrder = function(mat) {
    const result = [];
    if (!mat || mat.length <= 0) {
      return result;
    }
    const m = mat.length;
    const n = mat[0].length;
    let counter = 0;
    for (let i = 0; i < n; ++i) {
      let left = 0;
      let right = i;
      const temp = [];
      while (left < m && right >=0) {
        temp.push(mat[left][right]);
        ++left;
        --right;
      }
      if (counter % 2 === 0) {
        temp.reverse();
      }
      temp.forEach(ele => result.push(ele));
      ++counter;
    }
    for (let j = 1; j < m; ++j) {
      let left = j;
      let right = n - 1;
      const temp = [];
      while (left < m && right >=0) {
        temp.push(mat[left][right]);
        ++left;
        --right;
      }
      if (counter % 2 === 0) {
        temp.reverse();
      }
      temp.forEach(ele => result.push(ele));
      ++counter;
    }
    return result;
};

console.log(findDiagonalOrder([[1,2],[3,4]]));





