/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (s.length === 1) return true;
  let head = 0;
  let end = s.length - 1;
  let isDelete = false;
  while (head < end) {
    if (s[head] !== s[end]) {
      if (isDelete) {
        break;
      } else {
        isDelete = true;
        ++head;
      }
    } else {
      ++head;
      --end;
    }
  }
  if (head >= end) {
    return true;
  }
  head = 0;
  end = s.length - 1;
  isDelete = false;
  while (head < end) {
    if (s[head] !== s[end]) {
      if (isDelete) {
        return false;
      } else {
        isDelete = true;
        --end;
      }
    } else {
      ++head;
      --end;
    }
  }
  return true;
};

console.log(validPalindrome('cbbcc'));
