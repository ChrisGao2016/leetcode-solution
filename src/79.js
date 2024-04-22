
function dfs(board, word, index, left, right) {
  if (left <0 || left >= board.length || right < 0 || right >=board[0].length) {
    return false;
  }
  if (board[left][right] !== word[index]) {
    return false;
  }
  if (index === word.length - 1) {
    return true;
  }
  const temp = board[left][right];
  board[left][right] = '\0';
  const result = dfs(board, word, index+1, left - 1, right) || 
    dfs(board, word, index + 1, left + 1, right) ||
    dfs(board, word, index+1, left, right - 1) ||
    dfs(board, word, index+1, left, right + 1);
  if (result) {
    return true;
  }
  board[left][right] = temp;
  return false;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i<m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (dfs(board, word, 0, i, j)) {
        return true;
      }
    }
  }
  return false;
};