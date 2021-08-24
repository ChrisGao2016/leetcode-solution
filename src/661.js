/**
 * @param {number[][]} M
 * @return {number[][]}
 */
const imageSmoother = function (M) {
  const result = [];
  for (let i = 0; i < M.length; ++i) {
    result[i] = [];
    for (let j = 0; j < M[i].length; ++j) {
      let sum = M[i][j];
      let count = 1;
      if (j - 1 >= 0) {
        count++;
        sum += M[i][j - 1];
        if (i - 1 >= 0) {
          ++count;
          sum += M[i - 1][j - 1];
        }
        if (i + 1 < M.length) {
          ++count;
          sum += M[i + 1][j - 1];
        }
      }
      if (j + 1 < M[i].length) {
        ++count;
        sum += M[i][j + 1];
        if (i + 1 < M.length) {
          ++count;
          sum += M[i + 1][j + 1];
        }
        if (i - 1 >= 0) {
          ++count;
          sum += M[i - 1][j + 1];
        }
      }
      if (i + 1 < M.length) {
        ++count;
        sum += M[i + 1][j];
      }
      if (i - 1 >= 0) {
        ++count;
        sum += M[i - 1][j];
      }
      result[i][j] = Math.floor(sum / count);
    }
  }
  return result;
};

console.log(imageSmoother([[1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]]));
