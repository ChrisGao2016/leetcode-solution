/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let candiesSet = new Set(candies);
    return candiesSet.size > (candies.length/2) ? candies.length/2 : candiesSet.size;
};