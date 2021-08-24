/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) return '0';
  const numMap = {
    '10': 'a',
    '11': 'b',
    '12': 'c',
    '13': 'd',
    '14': 'e',
    '15': 'f'
  };
  let result = [];
  let isNegative = false;
  if (num < 0) {
    isNegative = true;
    num = -num - 1;
  }
  while (num > 0) {
    result.push(num % 16);
    num = Math.floor(num / 16);
  }
  if (isNegative) {
    result = result.map(num => {
      num = 15 - num;
      if (num >= 10) {
        return numMap[num];
      } else {
        return num;
      }
    });
    for (let i = result.length; i < 8; ++i) {
      result.push('f');
    }
  } else {
    result = result.map(num => {
      if (num >= 10) {
        return numMap[num];
      } else {
        return num;
      }
    });
  }
  return result.reverse().join('');
};
console.log(toHex(-1));
