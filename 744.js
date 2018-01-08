/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  const lettersMap = { 
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false }
  for(let i = 0; i<letters.length;++i) {
    lettersMap[letters[i]] = true;
  }
  const keys = Object.keys(lettersMap);
  let pos = 0;
  for(let i=0; i<keys.length; ++i) {
    if (keys[i] === target) {
      pos = i;
      break;
    }
  }
  for(let i=pos+1;i<keys.length;++i) {
    if (lettersMap[keys[i]]) {
      return keys[i];
    }
  }
  for(let i = 0;i<keys.length;++i) {
    if (lettersMap[keys[i]]){
      return keys[i];
    }
  }
};

console.log(nextGreatestLetter(["c", "f", "j"], ''))
