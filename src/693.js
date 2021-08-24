/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let expectVal = n%2;
  n=Math.floor(n/2);
  while(n) {
    if (n%2 !== 1-expectVal) {
      return false;
    }
    expectVal = 1-expectVal;
    n = Math.floor(n/2);
  }
  return true;
};

console.log(hasAlternatingBits(21))
