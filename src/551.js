/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let countA = 0;
  let hasTripleL = false;
  for (let j = 0; j <= s.length - 3; ++j) {
    if (s[j]=== 'L' && s[j+1] === 'L' && s[j+2] === 'L') {
      return false;
    }
  }
  for(let i = 0; i < s.length; ++i) {
    if (s[i] === 'A') {
      countA++;
    }
  }
  if (countA > 1) {
    return false
  } else {
    return true;
  }
};