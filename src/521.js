/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
// time limit
/*var maxCount = function(m, n, ops) {
  let arr = [];
  for(let i = 0;i < m; ++i) {
    arr.push([]);
    for(let j = 0; j < n; ++j) {
      arr[i][j] = 0;
    }
  }
  ops.forEach(item => {
    for(let x = 0; x < item[0]; ++x) {
      for(let y = 0; y < item[1]; ++y) {
        arr[x][y]++;
      }
    }
  });
  let max = 0;
  let result = 0;
  for(let i = 0; i < m; ++i) {
    for(let j = 0; j < n; ++j) {
      if (arr[i][j] > max) {
        max = arr[i][j];
        result = 1;
      } else if (arr[i][j] === max) {
        result++;
      }
    }
  }
  return result;
};*/
var maxCount = function(m, n, ops) {
  let xMax = m;
  let yMax = n;
  ops.forEach(item => {
    xMax = xMax > item[0] ? item[0] : xMax;
    yMax = yMax > item[1] ? item[1] : yMax;
  });
  return xMax*yMax;
}
console.log(maxCount(3,4, [[2,2],[3,3]]));