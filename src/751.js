
function numToCIDR(num, step) {
  let result = [];
  for(let i = 0; i < 4; ++i) {
    result.push(num%256);
    num = Math.floor(num/256);
  }
  result = result.reverse().join('.');
  let len = 33;
  while(step > 0) {
    --len;
    step = Math.floor(step/2);
  }
  return result += `/${len}`;
}

/**
 * @param {string} ip
 * @param {number} n
 * @return {string[]}
 */
var ipToCIDR = function(ip, n) {
  let results = [];
  ip = ip.split('.');
  let num = 0;
  for(let i = 0; i < ip.length; ++i) {
    num = (+ip[i]) + num*256;
  }
  while(n > 0) {
    let step = num & (-num);
    console.log(step)
    while(step > n) step /=2;
    results.push(numToCIDR(num, step));
    n -= step;
    num += step;
  }
  return results;
};

console.log(ipToCIDR("255.0.0.10",10))
