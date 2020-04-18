import { GRID } from "typings";
import { getRandomIndex, copyGrid, solveGrid } from "utils";
import global from "global";
/**
 * removes numbers from a filled grid to start the sudoku challenge
 * @param grid a 9x9 sudoku grid
 * @param attempts number of attempts to solve (higher # equals more difficulty), defaults to 5
 */
const removeNumbers = (grid: GRID, attempts = 5): GRID => {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);
    global.counter = 0;
    solveGrid(gridCopy);

    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }
  return grid;
};

export default removeNumbers;
