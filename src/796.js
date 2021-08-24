// /**
//  * @param {string} A
//  * @param {string} B
//  * @return {boolean}
//  */
// var rotateString = function (A, B) {
//   if (A.length !== B.length) return false;
//   if (A === B) return true;
//   let pos;
//   for (let i = 0; i < B.length; ++i) {
//     if (B[i] === A[0]) {
//       pos = i;
//       let j;
//       for (j = 0; j < A.length; ++j) {
//         if (A[j] === B[pos]) {
//           ++pos;
//           if (pos === B.length) {
//             pos = 0;
//           }
//         } else {
//           break;
//         }
//       }
//       if (j === A.length) { return true; }
//     }
//   }
//   return false;
// };

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  return (A.length === B.length) && (A + A).indexOf(B) !== -1;
};
