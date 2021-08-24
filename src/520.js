/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word === word.toLocaleLowerCase() || word === word.toLocaleUpperCase()) {
    return true;
  }
  if (word[0] === word[0].toLocaleUpperCase() && word.slice(1,word.length) === word.slice(1,word.length).toLocaleLowerCase()) {
    return true;
  }
  return false;
};
console.log(detectCapitalUse('Usa'));