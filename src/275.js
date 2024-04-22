/**
 * @param {number[]} citations
 * @return {number}
 */
// var hIndex = function(citations) {
//   const len = citations.length;
//   if (len === 1) {
//     return citations[0] === 0 ? 0 : 1;
//   }
//   const max = citations[len - 1];
//   const numList = new Array(max+1);
//   citations.forEach(num => {
//     if (numList[num] !== undefined) {
//       ++numList[num];
//     } else {
//       numList[num] = 1;
//     }
//   });
//   for (let i = numList.length - 1; i >=1; --i) {
//     if (numList[i-1] !== undefined) {
//       numList[i-1] += numList[i];
//     } else {
//       numList[i-1] = numList[i];
//     }
//   }
//   let result;
//   for (let i = numList.length - 1; i >=0; --i) {
//     if (i > numList[i] ) {
//       continue;
//     } else {
//       result = i;
//       break;
//     }
//   }
//   return result;
// };


// var hIndex = function(citations) {
//   const len = citations.length;
//   for (let i = 0; i < len; ++i) {
//     const paperNum = len - i;
//     if (paperNum <= citations[i]) {
//       return paperNum;
//     }
//   }
//   return 0;
// };


var hIndex = function(citations) {
  const len = citations.length;
  let start = 0;
  let end = len - 1;
  let result = 0;
  while (start <= end) {
    const mid = Math.floor((end + start + 1)/2);
    const paperNum = len - mid;
    if (paperNum > citations[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
      result = Math.max(paperNum, result);
    }
  }
  return result;
};

console.log(hIndex());