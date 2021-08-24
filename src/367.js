/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num <= 0) return false;
  let start = 1;
  let end = num;
  let mid;
  while(start<=end) {
    mid = Math.floor((start+end)/2);
    if (mid*mid > num) {
      end = mid - 1;
    } else if (mid*mid === num) {
      return true;
    } else {
      start = mid + 1;
    }
  }
  return false;
};

console.log(isPerfectSquare(9));