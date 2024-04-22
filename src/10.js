/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isSubMath(s, target, sIndex) {
  let tIndex = 0;
  let curSIndex = sIndex;
  while (tIndex < target.length && curSIndex < s.length) {
    if (target[tIndex] !== s[curSIndex] && target[tIndex] !== '.') {
      return false;
    } else {
      ++tIndex;
      ++curSIndex;
    }
  }
  if (tIndex === target.length) {
    return true;
  }
  return false;
}

function isCommonMath(str, targetList) {

}

var isMatch = function(s, p) {
  const tempList = p.split('*');
  let targetList = [];
  tempList.forEach((str, index) => {
    if (index !== tempList.length - 1) {
      targetList.push(str.slice(0, str.length - 1));
      targetList.push(str.slice(str.length - 1));
    } else {
      targetList.push(str);
    }
  }); 
  targetList = targetList.filter(Boolean);
  let sIndex = 0;
  let preIndex = 0;
  let tIndex = 0;
  let preTIndex = 0;
  while (sIndex < s.length && tIndex < targetList.length) {
    const subStr = targetList[tIndex];
    if (subStr[1] !== '*') {
      while (!isSubMath(s, subStr, sIndex) && sIndex < s.length) {
        ++sIndex;
      }
      if (sIndex === s.length) {
        return false;
      }
      const subTargetList = targetList.slice(preTIndex, tIndex);
      const subTargetStr = s.slice(preIndex, sIndex);
      if (subTargetList.length > 0 && subTargetStr.length > 0) {
        if (!isCommonMath(subStr, subTargetList)) {
          return false;
        }
      }
      sIndex += subStr.length;
      preIndex = sIndex;
      ++tIndex;
      preTIndex = tIndex;
    } else {
      ++tIndex;
    }
  }
  return false;
};

console.log(isMatch("aaa", "a*a"));
