/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let str = num.toString(2);
    let incre = 1;
    let length = str.length-1;
    let result = str[length] === '0' ? 1 : 0;
    for (let j =length-1; j>=0; --j) {
      incre = incre*2;
      if (str[j] === '0') {
        result += incre;
      }
    }
    return result;
};