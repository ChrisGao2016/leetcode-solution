/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(' ');
  arr = arr.map(item => item.split('').reverse().join(''));
  return arr.join(' ');
};
console.log(reverseWords("Let's take LeetCode contest"));