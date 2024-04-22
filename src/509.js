/**
 * @param {number} n
 * @return {number}
 */

// var fib = function(n) {
//   const numList = new Array(n+1);
//   numList[0] = 0;
//   numList[1] = 1;
//   for (let i = 2; i <= n; ++i) {
//     numList[i] = numList[i-1] + numList[i-2];
//   }
//   return numList[n];
// };

var fib = function(n) {
  if (n <= 1) {
    return n;
  }
  let first = 0;
  let second = 1;
  let result;
  let i = 2;
  while (i <=n) {
    result = first + second;
    first = second;
    second = result;
    ++i;
  }
  return result;
};