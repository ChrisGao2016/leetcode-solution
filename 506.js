/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let arr = nums.slice();
  arr.sort((a,b) => b - a);
  let numsMap = {};
  arr.forEach((num, index) => {
    numsMap[num] = (index +1).toString();
    if (index === 0) {
      numsMap[num] = "Gold Medal";
    }
    if (index === 1) {
      numsMap[num] = "Silver Medal";
    }
    if (index === 2) {
       numsMap[num] = "Bronze Medal";
    }
  });
  return nums.map(num => {
    return numsMap[num];
  });
};
console.log(findRelativeRanks([5, 2, 3, 4, 1]));