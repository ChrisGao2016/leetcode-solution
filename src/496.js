/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
/* var nextGreaterElement = function(findNums, nums) {
    let numMap = new Map();
    if (nums.length <= 0) return [];
    for(let i = 0 ; i<nums.length-1; ++i) {
      for(let j=i+1; j<nums.length; ++j) {
        if (nums[i] < nums[j]) {
          numMap.set(nums[i], nums[j]);
          break;
        }
      }
      if (!numMap.has(nums[i])) {
        numMap.set(nums[i], -1);
      }
    }
    numMap.set(nums[nums.length-1], -1);
    return findNums.map(item => numMap.get(item));
};*/
var nextGreaterElement = function(findNums, nums) {
    let numStack = [nums[0]];
    let numsMap = new Map();
    for(let i=1; i<nums.length; ++i) {
      while (numStack.length > 0 && numStack[numStack.length - 1] < nums[i]) {
        numsMap.set(numStack[numStack.length - 1],nums[i]);
        numStack.pop();
      }
      numStack.push(nums[i]);
    }
    while(numStack.length > 0) {
      numsMap.set(numStack[numStack.length - 1], -1);
      numStack.pop();
    }
    return findNums.map(item => numsMap.get(item));
};
console.log(nextGreaterElement([4,1,2],[1,3,4,2]));