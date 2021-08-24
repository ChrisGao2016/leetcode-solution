/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  // top-left
  for (let i = 0; i < matrix.length; ++i) {
    let x = i;
    let y = 0;
    const target = matrix[x][y];
    while (x < matrix.length && y < matrix[x].length) {
      if (target !== matrix[x][y]) {
        return false;
      }
      ++x;
      ++y;
    }
  }
  for (let j = 0; j < matrix[0].length; ++j) {
    let y = j;
    let x = 0;
    const target = matrix[x][y];
    while (x < matrix.length && y < matrix[x].length) {
      if (target !== matrix[x][y]) {
        return false;
      }
      ++x;
      ++y;
    }
  }
  return true;
};
