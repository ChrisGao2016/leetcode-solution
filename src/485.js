/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let count = 0;
  for(i = 0;i < nums.length; ++i) {
    count = 0;
    while(i < nums.length && nums[i] === 1) {
      ++count;
      ++i;
    }
    if (count > max) {
      max = count;
    }
  }
  return max;
};
console.log(findMaxConsecutiveOnes([1,0,1,1,1]));