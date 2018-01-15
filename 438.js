/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/* var findAnagrams = function(s, p) {
  let pMap = {};
  let count = 0;
  p.split('').forEach(char => {
    if (!pMap[char]) {
      pMap[char] = ++count;
    }
  });
  count = 0;
  for(let i = 0; i<p.length; ++i) {
    count += pMap[p[i]];
  }
  let result = [];
  for(let i = 0; i < s.length-p.length + 1; ++i) {
    let sum = 0;
    for(let j = 0; j < p.length; ++j) {
      if (pMap[s[i+j]]) {
        sum += pMap[s[i+j]];
      } else {
        break;
      }
    }
    if (sum === count) {
      result.push(i);
    }
  }
  return result;
}; */
/* var findAnagrams = function (s, p) {
  let pMap = {};
  for (let i = 0; i < p.length; ++i) {
    if (pMap[p[i]]) {
      pMap[p[i]]++;
    } else {
      pMap[p[i]] = 1;
    }
  }
  let result = [];
  let count = p.length;
  let start = 0;
  let end = 0;
  while (end < s.length) {
    if (pMap[s[end]] !== undefined && pMap[s[end]]-- > 0) {
      --count;
    }
    ++end;
    if (count === 0) {
      result.push(start);
    }
    if (end - start === p.length) {
      if (pMap[s[start]] !== undefined && pMap[s[start]]++ >= 0) {
        ++count;
      }
      ++start;
    }
  }
  return result;
}; */
var findAnagrams = function (s, p) {
  let pMap = {};
  for (let i = 0; i < p.length; ++i) {
    if (pMap[p[i]]) {
      pMap[p[i]]++;
    } else {
      pMap[p[i]] = 1;
    }
  }
  let result = [];
  let count = p.length;
  for (let i = 0; i < p.length; ++i) {
    if (pMap[s[i]] !== undefined && pMap[s[i]]-- > 0) {
      --count;
    }
  }
  for (let i = 0; i < s.length - p.length + 1; ++i) {
    if (count === 0) {
      result.push(i);
    }
    if (pMap[s[i]] !== undefined && pMap[s[i]]++ >= 0) {
      ++count;
    }
    if (pMap[s[i + p.length]] !== undefined && pMap[s[i + p.length]]-- > 0) {
      --count;
    }
  }
  return result;
};
console.log(findAnagrams('abacbabc', 'abc'));
