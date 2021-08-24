/* function canBreak(s, str) {
  if (str.has(s)){
    return true;
  } else {
    let result = false;
    for(let i = 1; i<s.length; ++i) {
      const target = s.slice(0,i);
      if (str.has(target) && canBreak(s.slice(i), str)) {
        result = true;
      }
    }
    return result;
  }
} */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let str = new Set(wordDict);
  const dp = [true];
  for(let i = 1; i <= s.length; ++i) {
    for(let j=0;j<i;++j){
      if (dp[j] && str.has(s.slice(j,i))) {
        dp[i] = true;
      }
    }
  }
  return !!dp[s.length];
};

console.log(wordBreak("leetcode",["leet", "code"]))
