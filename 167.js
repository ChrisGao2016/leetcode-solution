/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let index1 = 0;
  let index2 = numbers.length - 1;
  while(numbers[index1] + numbers[index2] !== target) {
    if (numbers[index1] + numbers[index2] < target) {
      index1++;
    } else {
      --index2;
    }
  }
  return [index1+1,index2+1];
};

console.log(twoSum([2,3,4],6));