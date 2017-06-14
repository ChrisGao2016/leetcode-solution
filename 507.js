/**
 * @param {number} num
 * @return {boolean}
 */
/*var checkPerfectNumber = function(num) {
  if (num === 1) return false;
  let sum = 1;
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); ++i) {
    if ( num % i === 0) {
      sum  += (num/i) + i; 
    }
  }
  if (sum === num) {
    return true;
  } else {
    return false;
  }
};*/
var checkPerfectNumber = function(num) {
  return num === 6 || num === 28 || num === 496 || num === 8128 || num === 33550336;
}
console.log(checkPerfectNumber(6));