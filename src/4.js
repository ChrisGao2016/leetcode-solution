/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const midNum = Math.floor((len1 + len2) / 2);
    const isEven = (len1 + len2) % 2 === 0;
    if (len1 === 0 || len2 === 0) {
      const nums = len1 === 0 ? nums2 : nums1;
      if (isEven) {
        return (nums[midNum-1] + nums[midNum]) / 2
      }
      return nums[midNum];
    }
    let pos1 = 0;
    let pos2 = 0;
    let mid;
    let pre;
    let count = 1;
    while (pos1 < len1  && pos2 < len2) {
      if (count === midNum + 1) {
        if (nums1[pos1] >= nums2[pos2]) {
          mid = nums2[pos2];
        } else {
          mid= nums1[pos1];
        }
        break;
      }
      if (nums1[pos1] <= nums2[pos2]) {
        ++pos1;
        ++count;
        pre = nums1[pos1 - 1];
      } else {
        ++pos2;
        ++count;
        pre = nums2[pos2 - 1]
      }
    }
    if (count === midNum + 1) {
      if (pos1 === len1) {
        mid = nums2[pos2];
      }
      if (pos2 === len2) {
        mid = nums1[pos1];
      }
    }
    if (pos1 < len1 && count < midNum + 1) {
      pos1 = pos1 + (midNum + 1 - count);
      mid = nums1[pos1];
      pre = nums1[pos1 - 1];
    }
    if (pos2 < len2 && count < midNum + 1) {
      pos2 = pos2 + (midNum + 1 - count);
      mid = nums2[pos2];
      pre = nums2[pos2 - 1]
    }
    if (isEven) {
      return (mid + pre) / 2;
    }
    return mid;
};


var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const result = [];
  let pos1 = 0;
  let pos2 = 0;
  while (pos1 < len1 && pos2 < len2) {
    if (nums1[pos1] <= nums2[pos2]) {
      result.push(nums1[pos1]);
      ++pos1;
    } else {
      result.push(nums2[pos2]);
      ++pos2;
    }
  }
  while (pos1 < len1) {
    result.push(nums1[pos1]);
    ++pos1;
  }
  while (pos2 < len2) {
    result.push(nums2[pos2]);
    ++pos2;
  }
  const midNum = Math.floor((len1 + len2) / 2);
  if ((len1 + len2) % 2 === 0) {
    return (result[midNum] + result[midNum - 1]) / 2;
  }
  return result[midNum];
}