/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  const primeSet = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  let result = 0;
  for (let i = L; i <= R; ++i) {
    let num = i;
    let count = 0;
    while (num) {
      num &= num - 1;
      ++count;
    }
    if (primeSet.has(count)) {
      ++result;
    }
  }
  return result;
};

console.log(countPrimeSetBits(10, 15));
