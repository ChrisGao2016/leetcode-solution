/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (r*c !== nums.length * nums[0].length) {
    return nums;
  }
  let results = [];
  let index = 0;
  let row = nums[0].length;
  for(let i = 0; i < r; ++i) {
    results[i] = [];
    for (let j =0; j< c; ++j) {
      results[i][j] = nums[Math.floor(index/row)][index%row];
      ++index;
    }
  }
  return results;
};