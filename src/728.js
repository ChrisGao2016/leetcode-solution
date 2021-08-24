/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const result = [];
  for(let target = left; target <= right; ++target) {
    let b;
    let complement = target;
    let flag = true;
    while(complement) {
      b = complement%10;      
      complement = Math.floor(complement/10);      
      if (target%b !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(target);
    }
  }
  return result;
};

console.log(selfDividingNumbers(200,10000));
