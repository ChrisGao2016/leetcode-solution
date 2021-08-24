/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  if (moves.length % 2 !== 0) return false;
  let horizontal = 0;
  let vertical = 0;
  for (let i = 0; i < moves.length; ++i) {
    switch(moves[i]) {
      case 'U': 
        ++vertical;
        break;
      case 'D':
        --vertical;
        break;
      case 'R':
        ++horizontal;
        break;
      case 'L':
        --horizontal;
        break;
    }
  }
  if (horizontal === 0 && vertical === 0) {
    return true;
  }
  return false;
};