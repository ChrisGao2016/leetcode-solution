/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 1) return 0;
  let high = x;
  let low = 1;
  let mid = 0;
  while(low + 1 < high) {
    mid = Math.floor((high + low)/2);
    if (mid * mid > x) {
      high = mid;
    } else if (mid * mid < x) {
      low = mid;
    } else {
      return mid;
    }
  }
  return low;
};
console.log(mySqrt(109));