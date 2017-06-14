/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return 1>=n;
  }
  let result = 0;
  let start = 0;
  while(start < flowerbed.length) {
    if (start === 0) {
      if (flowerbed[start] === 0 && flowerbed[start+1] === 0) {
        result++;
        start+=2;
      } else {
        ++start;
      }
      continue;
    }
    if (start === flowerbed.length - 1) {
      if (flowerbed[start] === 0 && flowerbed[start-1] === 0) {
        ++result;
      }
      ++start;
      continue;
    }
    if (flowerbed[start] === 0 &&flowerbed[start-1]  === 0 && flowerbed[start+1] === 0) {
      result++;
      start += 2;
    } else {
      ++start;
    }
  }
  return result>=n;
};
console.log(canPlaceFlowers([0,0,1,0,0,0,0,0,0,0,1],4));