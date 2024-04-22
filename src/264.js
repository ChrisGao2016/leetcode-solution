/**
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function(n) {
  const list = new Array(n);
  list[0] = 1;
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  for (let i = 1; i < n; ++i) {
    const num1 = list[p2] * 2;
    const num2 = list[p3] * 3;
    const num3 = list[p5] * 5;
    const min = Math.min(num1, num2, num3);
    list[i] = min;
    if (num1 === min) ++p2;
    if (num2 === min) ++p3;
    if (num3 === min) ++p5;
  }
  return list[n-1];
};