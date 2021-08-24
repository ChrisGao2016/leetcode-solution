/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let average = 0;
  for (let i = 0; i < k; ++i) {
    average += nums[i];
  }
  let sum = average;
  for (let i = k; i < nums.length; ++i) {
    sum -= nums[i - k];
    sum += nums[i];
    if (sum > average) {
      average = sum;
    }
  }
  return average / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
