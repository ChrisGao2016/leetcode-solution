/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const str = [];
  const result = [];
  function DFS (S, len) {
    if (len < S.length) {
      if (S[len].toUpperCase() === S[len].toLowerCase()) {
        str.push(S[len]);
        DFS(S, len + 1);
      } else {
        str.push(S[len].toUpperCase());
        DFS(S, len + 1);
        str.pop();
        str.push(S[len].toLowerCase());
        DFS(S, len + 1);
      }
      str.pop();
    } else {
      result.push(str.join(''));
    }
  }
  DFS(S, 0);
  return result;
};

console.log(letterCasePermutation('A1b2'));
