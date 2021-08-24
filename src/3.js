/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    for (let i = 0; i < s.length; ++i) {
      const charSet= new Set();
      for (let j=i; j < s.length; ++j) {
        if (charSet.has(s[j])) {
          break;
        }
        charSet.add(s[j]);
      }
      maxLen = Math.max(maxLen, charSet.size);
    }
    return maxLen;
};
