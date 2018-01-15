/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let count = 0;
  let increasingNum = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1]) {
      ++increasingNum;
    } else {
      if (count < increasingNum) {
        count = increasingNum;
      }
      increasingNum = 1;
    }
  }
  if (count < increasingNum) {
    count = increasingNum;
  }
  return count;
};

console.log(findLengthOfLCIS([1]));
