/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    const sLen = s.length;
    const tLen = t.length;
    let sPos = 0 ;
    let tPos = 0;
    while(tPos < tLen) {
      if (t[tPos] === s[sPos]) {
        ++sPos;
      }
      ++tPos;
    }
    if (sPos === sLen) {
      return true;
    }
    return false;
};
