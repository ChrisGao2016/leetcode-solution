/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
  let str = A;
  let count = 1;
  while (str.length < B.length) {
    str += A;
    ++count;
  }
  if (str.indexOf(B) !== -1) {
    return count;
  }
  str += A;
  ++count;
  if (str.indexOf(B) !== -1) {
    return count;
  }
  return -1;
};
