/**
 * @param {number[]} nums
 * @return {number}
 */
/* var findShortestSubArray = function(nums) {
  let numMap = new Map();
  nums.forEach(item => {
    if (numMap.has(item)) {
      numMap.set(item, numMap.get(item)+1);
    } else {
      numMap.set(item, 1);
    }
  });
  let maxNums = 0;
  for(let value of numMap.values()) {
    if (value > maxNums) {
      maxNums = value;
    }
  }
  const maxNumsArr = [];
  for(let [key, value] of numMap.entries()) {
    if (value === maxNums) {
      maxNumsArr.push(key);
    }
  }
  let minLength = nums.length;
  maxNumsArr.forEach(item => {
    let start = 0;
    let end = nums.length-1;
    while(nums[start] !== item) {
      ++start;
    }
    while(nums[end] !== item) {
      --end;
    }
    if (end-start+1 < minLength) {
      minLength = end-start+1;
    }
  })
  return minLength;
};  */

/* var findShortestSubArray = function(nums) {
  let numMap = {};
  nums.forEach(item => {
    if (numMap[item]) {
      ++numMap[item];
    } else {
      numMap[item] = 1;
    }
  });
  let maxNums = 0;
  Object.values(numMap).forEach(item => {
    if (item > maxNums) {
      maxNums = item;
    }
  })
  const maxNumsArr = [];
  for(let key in numMap) {
    if (numMap[key] === maxNums) {
      maxNumsArr.push(key);
    }
  }
  let minLength = nums.length;
  console.log(maxNumsArr)
  maxNumsArr.forEach(item => {
    item = +item;
    let start = 0;
    let end = nums.length-1;
    while(nums[start] !== item) {
      ++start;
    }
    while(nums[end] !== item) {
      --end;
    }
    if (end-start+1 < minLength) {
      minLength = end-start+1;
    }
  })
  return minLength;
}; */

var findShortestSubArray = function (nums) {
  let numsMap = {}
  let maxCount = 0
  nums.forEach((item, index) => {
    if (numsMap[item]) {
      numsMap[item].right = index
      ++numsMap[item].count
    } else {
      numsMap[item] = {
        left: index,
        right: index,
        count: 1
      }
    }
    maxCount = Math.max(maxCount, numsMap[item].count)
  })
  let minLength = nums.length
  for (let key in numsMap) {
    if (numsMap[key].count === maxCount) {
      minLength = Math.min(minLength, numsMap[key].right - numsMap[key].left + 1)
    }
  }
  return minLength
}
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]))
