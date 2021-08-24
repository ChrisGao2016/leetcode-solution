/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
  const map = {};
  B.forEach((item, index) => {
    map[item] = index;
  });
  return A.map(item => map[item]);
};

console.log(anagramMappings([12,28,46,12,50],
  [50,12,12,46,28]))
