/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const one = new Set(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']);
  const two = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']);
  const three = new Set(['z', 'x', 'c', 'v', 'b', 'n', 'm']);
  let set = [one, two, three];
  let result = [];
  words.forEach(item => {
    let target;
    let source = item.toLocaleLowerCase();
    set.forEach(data => {
      if (data.has(source[0])) {
        target=data;
      }
    });
    for(let i =1; i<item.length; ++i) {
      if (!target.has(source[i])) {
        return;
      }
    }
    result.push(item);
  });
  return result;
};
console.log(findWords(["Hello","Alaska","Dad","Peace"]));