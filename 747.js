/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let maxIndex = 0;
  for(let i = 1; i < nums.length; ++i) {
    if (nums[maxIndex] < nums[i]) {
      maxIndex = i;
    }
  }
  let second = -1;
  for(let j=0;j<nums.length;++j) {
    if (second<nums[j] && j!==maxIndex) {
      second = nums[j];
    }
  }
  if (second*2 <= nums[maxIndex]) {
    return maxIndex;
  } else {
    return -1;
  }
};

console.log(dominantIndex([3, 6, 1, 0]))
