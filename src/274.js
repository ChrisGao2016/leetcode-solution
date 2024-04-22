/**
 * @param {number[]} citations
 * @return {number}
 */
// var hIndex = function(citations) {
//   if (citations.length === 1) {
//     return citations[0] === 0 ? 0 : 1;
//   }
//   let max = Number.MIN_VALUE;
//   citations.forEach(num => {
//     if (num > max) {
//       max = num;
//     }
//   });
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

var hIndex = function(citations) {
  citations.sort((a,b) => a-b);
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

console.log(hIndex([3, 0, 5,6,1]));