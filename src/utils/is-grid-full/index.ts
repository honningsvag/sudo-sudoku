import { GRID } from "typings";

/**
 * Returns true if grid is full, else false
 * @param grid a 9x9 grid
 */
let isGridFull = (grid: GRID): boolean => {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) if (grid[i][j] === 0) return false;

  return true;
};

export default isGridFull;
