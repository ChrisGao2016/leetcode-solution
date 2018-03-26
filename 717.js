function DFS (bits, start, size) {
  if (start === size - 1) {
    return true;
  }
  if (start === size - 2) {
    return false;
  }
  if (bits[start] === 0) {
    return DFS(bits, start + 1, size);
  } else {
    return DFS(bits, start + 2, size);
  }
}
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  const length = bits.length;
  if (length === 1 && bits[0] === 0) {
    return true;
  }
  if (bits[length - 1] === 0 && bits[length - 2] === 0) {
    return true;
  }
  return DFS(bits, 0, length);
};

console.log(isOneBitCharacter([0, 1, 0]));
