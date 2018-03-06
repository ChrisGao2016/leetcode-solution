/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let numMap = {};
  const result = [];
  nums.forEach(item => {
    if (numMap[item]) {
      result.push(item);
    } else {
      numMap[item] = true;
    }
  });
  for (let i = 1; i <= nums.length; ++i) {
    if (!numMap[i]) {
      result.push(i);
    }
  }
  return result;
};

console.log(findErrorNums([1, 2, 2, 4]));
