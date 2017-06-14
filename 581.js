/**
 * @param {number[]} nums
 * @return {number}
 */
/*var findUnsortedSubarray = function (nums) {
  let targetArr = new Array(...nums).sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  while(nums[start] === targetArr[start] && start < nums.length) {
    ++start;
  }
  if (start === nums.length) return 0;
  while (end >= start && nums[end] === targetArr[end] ) {
    --end;
  }
  if (end === start) return 0;
  return end - start + 1;
};*/
var findUnsortedSubarray = function (nums) {
  let last = 0;
  let max = nums[0];
  for(let i = 0; i < nums.length; ++i) {
    if (max < nums[i]) {
      max = nums[i];
    }
    if (max !== nums[i]) {
      last = i;
    }
  }
  let first = nums.length - 1;
  let min = nums[first];
  for (let i = nums.length-1; i >= 0; --i) {
    if (min > nums[i]) {
      min = nums[i];
    }
    if (min !== nums[i]) {
      first = i;
    }
  }
  if(last <= first) return 0;
  return last - first + 1;
}
console.log(findUnsortedSubarray([ 2, 6, 4, 8, 10, 9, 15 ]));