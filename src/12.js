/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function(num) {
//   let romanStrList = [];
//   let rest = num;
//   if (rest / 1000 >= 1) {
//     let mNum = Math.floor(rest / 1000);
//     while (mNum > 0) {
//       romanStrList.push('M');
//       --mNum;
//     }
//     rest = num % 1000;
//   }
//   if (rest / 100 >= 1) {
//     let hNum = Math.floor(rest / 100);
//     if (hNum === 9) {
//       romanStrList.push('CM');
//     } else if (hNum === 4) {
//       romanStrList.push('CD');
//     } else if (hNum >= 5) {
//       romanStrList.push('D');
//       hNum -= 5;
//       while (hNum > 0) {
//         romanStrList.push('C');
//         --hNum;
//       } 
//     } else {
//         while(hNum > 0) {
//           romanStrList.push('C');
//           --hNum;
//         }
//     }
//     rest = rest % 100;
//   }
//   if (rest / 10 >= 1) {
//     let tNum = Math.floor(rest / 10);
//     if (tNum === 9) {
//       romanStrList.push('XC');
//     } else if (tNum === 4) {
//       romanStrList.push('XL');
//     } else if (tNum >= 5) {
//       romanStrList.push('L');
//       tNum -= 5;
//       while (tNum > 0) {
//         romanStrList.push('X');
//         --tNum;
//       } 
//     } else {
//         while(tNum > 0) {
//           romanStrList.push('X');
//           --tNum;
//         }
//     }
//     rest = rest % 10;
//   }
//   if (rest === 9) {
//     romanStrList.push('IX');
//   } else if (rest === 4) {
//     romanStrList.push('IV');
//   } else if (rest >= 5) {
//     romanStrList.push('V');
//     rest -= 5;
//     while (rest > 0) {
//       romanStrList.push('I');
//       --rest;
//     }
//   } else {
//     while (rest > 0) {
//       romanStrList.push('I');
//       --rest;
//     }
//   }
//   return romanStrList.join('')
// };
var intToRoman = function(num) { 
  const nums = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const tNums = ['','X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const hNums = ['','C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const thNums = ['','M', 'MM', 'MMM'];
  return thNums[Math.floor(num/1000)] + hNums[Math.floor((num%1000)/100)] + tNums[Math.floor((num%100)/10)] + nums[num%10];
}