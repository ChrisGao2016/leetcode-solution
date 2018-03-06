/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function (chars) {
  let k = 0;
  for (let i = 1; i < chars.length; ++i) {
    if (chars[i] !== chars[i - 1]) {
      const count = i - k;
      if (count > 1) {
        chars.splice(k + 1, i - k - 1, ...count.toString().split(''));
        k = k + count.toString().length + 1;
        i = k;
      } else {
        k = i;
      }
    }
  }
  const count = chars.length - k;
  if (count > 1) {
    chars.splice(k + 1, chars.length - k - 1, ...count.toString().split(''));
  }
  return chars.length;
};
