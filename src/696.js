/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  const numArr = [];
  let curPos = 0;
  let count = 0;
  while(curPos < s.length) {
    count = 0;
    let i = curPos;
    for(; i < s.length; ++i) {
      if (s[i] === s[curPos]) {
        ++count;
      } else {
        numArr.push(count);      
        break;
      }
    }
    curPos = i;
  }
  numArr.push(count);
  let result = 0;
  for(let j = 0; j<numArr.length - 1; ++j) {
    result += Math.min(numArr[j], numArr[j+1]);
  }
  return result;
};
