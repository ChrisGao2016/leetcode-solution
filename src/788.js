/**
 * @param {number} N
 * @return {number}
 */
const numMap = {
  '0': 0,
  '1': 1,
  '2': 5,
  '5': 2,
  '8': 8,
  '6': 9,
  '9': 6
};
var rotatedDigits = function (N) {
  let result = 0;
  for (let i = 2; i <= N; ++i) {
    let num = i.toString();
    let rotated = '';
    let j = 0;
    for (; j < num.length; ++j) {
      if (numMap[num[j]] !== undefined) {
        rotated += numMap[num[j]];
      } else break;
    }
    if (j === num.length && rotated !== num) {
      ++result;
    }
  }
  return result;
};

console.log(rotatedDigits(10000));
