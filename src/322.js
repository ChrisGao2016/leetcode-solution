/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const list = [];
  for (let k = 0; k <= amount; ++k) {
    list.push(-1);
  }
  list[0] = 0;
  for (let j = 1; j <= amount; ++j) {
    for (let i = 0; i < coins.length; ++i) {
      const num = coins[i];
      if ((j-num) >= 0 && list[j-num] !== -1) {
        if (list[j] === -1 || list[j] > list[j-num] + 1) {
          list[j] = list[j-num] + 1;
        }
      }
    }
  }
  return list[amount];
};

console.log(coinChange([1,2,5], 11));