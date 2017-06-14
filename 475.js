/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  let cur = 0;
  let next = 0;
  let start = 0;
  let radius = 0;
  houses.sort((a,b) => a-b);
  heaters.sort((a,b) => a-b);
  for(let i = 0; i < houses.length; ++i) {
    while(next <= heaters.length - 1 && houses[i] > heaters[next]) {
      cur = next;
      ++next;
    }
    if (next > heaters.length - 1) {
      next = cur;
    }
    if (cur === next) {
      radius = Math.max(radius, Math.abs(heaters[cur] - houses[i]));
    } else {
      radius = Math.max(radius, Math.min(heaters[next] - houses[i],houses[i]-heaters[cur]));
    }
  }
  return radius;
};
// 注意这个输入的数组是无序的
console.log(findRadius([282475249,622650073,984943658,144108930,470211272,101027544,457850878,458777923],[823564440,115438165,784484492,74243042,114807987,137522503,441282327,16531729,823378840,143542612]));