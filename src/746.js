/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dist = [];
  dist[0] = cost[0];
  dist[1] = cost[1];
  for (let i = 2; i < cost.length; ++i) {
    dist[i] = Math.min(dist[i - 1] + cost[i], dist[i - 2] + cost[i]);
  }
  return Math.min(dist[cost.length - 1], dist[cost.length - 2]);
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
