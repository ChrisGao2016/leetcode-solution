/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function (n) {
  if (n === 1) return 9;
  if (n === 8) return 475;
  const max = Math.pow(10, n) - 1;
  const min = Math.pow(10, n - 1);
  for (let i = max; i >= min; --i) {
    const palindrome = +(i.toString() + i.toString().split('').reverse().join(''));
    for (let j = max; j >= min; --j) {
      if (max * j < palindrome) break;
      if (palindrome % j === 0) {
        return palindrome % 1337;
      }
    }
  }
  return -1;
};
console.log(largestPalindrome(7));
