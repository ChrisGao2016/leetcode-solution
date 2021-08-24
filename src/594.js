/**
 * @param {number[]} nums
 * @return {number}
 */
/*var findLHS = function(nums) {
  let numMap = {};
  nums.forEach(num => {
    if (numMap[num]) {
      ++numMap[num];
    } else {
      numMap[num] = 1;
    }
  });
  let keys = Object.keys(numMap).sort((a,b) => a-b);
  if (keys.length === 1) {
    return 0;
  }
  let max = 0;
  for(i = 0; i < keys.length - 1; ++i) {
    if ((keys[i+1] - keys[i] == 1) && (numMap[keys[i]] + numMap[keys[i+1]])> max) {
      max =numMap[keys[i]] + numMap[keys[i+1]];
    }
  } 
  return max;
};*/
var findLHS = function(nums) {
  if (nums.length === 0) return 0;
  nums = nums.sort((a,b) => a-b);
  let start = 0;
  let res = 0;
  let next = 0;
  for(let i = 1; i < nums.length; ++i) {
    if (nums[i] - nums[start] > 1) {
      start = ++next;
    } else if (nums[i] - nums[start] === 1) {
      res = Math.max(i - start +1, res);
    } else {
      next++;
    }
  }
  return res;
}
console.log(findLHS([1,3,2,2,5,2,3,7]));