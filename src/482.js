/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
/* var licenseKeyFormatting = function (S, K) {
  const result = [];
  let count = 0;
  for (let i = S.length - 1; i >= 0; --i) {
    if (S[i] !== '-') {
      if (count < K) {
        ++count;
      } else {
        result.push('-');
        count = 1;
      }
      result.push(S[i]);
    }
  }
  return result.reverse().join('').toLocaleUpperCase();
}; */
var licenseKeyFormatting = function (S, K) {
  let raw = S.replace(/-/g, '');
  const charChunk = [];
  let count = raw.length;
  while (count > 0) {
    charChunk.push(raw.slice(count - K >= 0 ? count - K : 0, count));
    count -= K;
  }
  return charChunk.reverse().join('-').toLocaleUpperCase();
};
console.log(licenseKeyFormatting('5F3Zaad-2e-sd9-wad', 4));
