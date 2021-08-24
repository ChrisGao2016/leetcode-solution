/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let cur = nums[0];
  let next;
  let hasDecreating = false;
  let result = true;
  for (let i = 1; i < nums.length; ++i) {
    next = nums[i];
    if (next < cur) {
      if (hasDecreating) {
        result = false;
        break;
      } else {
        hasDecreating = true;
        continue;
      }
    }
    cur = next;
  }
  if (!result) {
    hasDecreating = false;
    cur = nums[0];
    for (let i = 1; i < nums.length; ++i) {
      next = nums[i];
      if (next < cur) {
        if (hasDecreating) {
          return false;
        } else {
          hasDecreating = true;
          if (i > 1) {
            cur = nums[i - 2];
            --i;
            continue;
          }
        }
      }
      cur = next;
    }
  }
  return true;
};

console.log(checkPossibility([3, 4, 2, 3]));
