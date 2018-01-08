function calPos(grid, x, y, visit) {
  let sum = 0;
  if (visit[x] && visit[x][y]) {
    return sum;
  } else {
    if (!visit[x]) {
      visit[x] = [];
    }
    visit[x][y] = 1;
    sum = 1
    if(grid[x-1] && grid[x-1][y] === 1) {
      sum += calPos(grid, x-1, y, visit);
    }
    if(grid[x][y-1] === 1) {
      sum += calPos(grid, x, y-1, visit);
    }
    if(grid[x][y+1] === 1) {
      sum += calPos(grid, x, y+1, visit);
    }
    if (grid[x+1] && grid[x+1][y] === 1) {
      sum += calPos(grid, x+1, y, visit);
    }
    return sum;
  }
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0;
  const visit=[];
  for(let x = 0; x<grid.length; ++x) {
    for(let y = 0; y<grid[x].length; ++y) {
      if (grid[x][y] === 1) {
        const area = calPos(grid, x, y, visit);
        if (max < area) {
          max = area;
        }
      }
    }
  }
  return max;
};

console.log(maxAreaOfIsland(
  [[0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]]))
