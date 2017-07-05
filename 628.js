/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let result = 1;
  if (nums.length === 3) {
    nums.forEach(item => result *= item);
    return result;
  }
  let zero = false;
  let positive = [];
  let negative = [];
  nums.forEach(item => {
    if (item > 0) {
      positive.push(item);
    } else if (item < 0) {
      negative.push(item);
    } else {
      zero = true;
    }
  });
  positive = positive.sort((a,b) => a-b);
  negative = negative.sort((a,b) => Math.abs(a)-Math.abs(b));
  if (positive.length === 0) {
    if (zero) {
      return 0;
    } else {
      return negative[0]*negative[1]*negative[2];
    }
  }
  const pLen = positive.length - 1;
  const nLen = negative.length - 1;
  if (negative.length === 0 || negative.length === 1) {
    if (positive.length < 3) {
      return 0;
    } else {
      console.log(positive);
      return positive[pLen]*positive[pLen-1]*positive[pLen-2];
    }
  }

  if (positive.length > 3) {
    return Math.max(positive[pLen]*positive[pLen-1]*positive[pLen-2],negative[nLen]*negative[nLen-1]*positive[pLen]);
  } else {
    return negative[nLen]*negative[nLen-1]*positive[pLen];
  }
};