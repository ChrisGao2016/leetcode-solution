/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let right = nums.reduce((sum, item) => sum += item, 0);
  let left = 0;
  for (let i = 0; i < nums.length; ++i) {
    right -= nums[i];
    if (right === left) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
