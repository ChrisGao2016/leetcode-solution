/* function changeColor(visit,image,sr, sc, oldColor, newColor) {
  if (!visit[sr]){
    visit[sr] = []
  } else if (visit[sr][sc]) {
    return;
  }
  if (!visit[sr][sc]&&image[sr]&&image[sr][sc] === oldColor) {
    image[sr][sc] = newColor;
    visit[sr][sc] = true;
    changeColor(visit,image,sr-1,sc, oldColor, newColor);
    changeColor(visit,image, sr+1, sc, oldColor, newColor);
    changeColor(visit,image, sr, sc-1, oldColor, newColor);
    changeColor(visit,image, sr, sc+1, oldColor, newColor);
  }
} */
function changeColor(image, sr, sc, oldColor, newColor) {
  image[sr][sc] = newColor;
  if (image[sr-1]&&image[sr-1][sc] === oldColor) {
    changeColor(image,sr-1,sc, oldColor, newColor);    
  }
  if (image[sr+1]&&image[sr+1][sc] === oldColor) {
    changeColor(image, sr+1, sc, oldColor, newColor);    
  }
  if (image[sr][sc-1] === oldColor) {
    changeColor(image, sr, sc-1, oldColor, newColor);    
  }
  if (image[sr][sc+1] === oldColor) {
    changeColor(image, sr, sc+1, oldColor, newColor);
  }
}
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const oldColor = image[sr][sc];
  if (oldColor === newColor) return image;
  changeColor(image, sr, sc, oldColor, newColor);
  return image;
};

console.log(floodFill([[0,0,0],[0,1,1]],1,1,1))
