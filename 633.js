/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if (Math.sqrt(c)%1 === 0) {
      return true;
    }
    let a = 1;
    let b = Math.floor(Math.sqrt(c));
    while(a<=b) {
      if (a*a+b*b > c) {
        --b;
      } else if (a*a+b*b < c) {
        ++a;
      } else {
        return true;
      }
    }
    return false;
};

console.log(judgeSquareSum(2));