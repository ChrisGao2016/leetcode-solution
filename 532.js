/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;
  if (k === 0) {
    let keys = new Set();
    let resultSet = new Set();
    for(let i = 0; i < nums.length; ++i) {
      if (keys.has(nums[i])) {
        resultSet.add(nums[i]);
      } else {
        keys.add(nums[i]);
      }
    }
    return resultSet.size;
  }
  let keys = new Set(nums);
  let result = 0;
  keys.forEach(key => {
    if(keys.has(key - k)) {
      result++;
    }
  });
  return result;
};