/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let result = x ^ y;
  let counter = 0;
  while (result !== 0) {
    result = result & (result - 1);
    counter++;
  }
  return counter;
};