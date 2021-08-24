/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let result = 0;
  const strMap = {};
  for (let i = 0; i < J.length; ++i) {
    strMap[J[i]] = true;
  }
  console.log(strMap);
  for (let j = 0; j < S.length; ++j) {
    if (strMap[S[j]]) {
      ++result;
    }
  }
  return result;
};
