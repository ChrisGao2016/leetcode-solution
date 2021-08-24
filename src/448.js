/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*var findDisappearedNumbers = function(nums) {
  let hasSwap = true;
  while (hasSwap) {
    hasSwap = false;
    for(let i = 0; i < nums.length; ++i) {
      if (nums[i] !== i+1 && nums[i] !== nums[nums[i] - 1]) {
        let temp = nums[nums[i] - 1];
        nums[nums[i] - 1] = nums[i];
        nums[i] = temp;
        hasSwap = true;
      }
    }
  }
  let result = [];
  nums.forEach((item, index) => {
    if (item !== index + 1 ) {
      result.push(index + 1);
    }
  });
  return result;
};*/
var findDisappearedNumbers = function(nums) {
  let n = nums.length;
  for(let i = 0; i < nums.length; ++i) {
    nums[(nums[i] - 1) % n] += n;
  }
  let result = [];
  nums.forEach((item, index) => {
    if (item <= n) {
      result.push(index + 1);
    }
  });
  return result;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);