import global from "global";
import { NUMBERS, GRID } from "typings";
import { isInRow, isInCol, identifyBox, isInBox, isGridFull } from "utils";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * Solves the 9x9 sudoku grid by backtracking until a solution is found.
 * @param grid a 9x9 grid
 */
const solveGrid = (grid: GRID) => {
  let row = 0;
  let col = 0;
  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            const box = identifyBox({ grid, row, col });
            if (!isInBox({ box, value })) {
              grid[row][col] = value;
              if (isGridFull(grid)) {
                global.counter++;
                break;
              } else if (solveGrid(grid)) {
                return true;
              }
            }
          }
        }
      }
    }
  }

  grid[row][col] = 0;
};

export default solveGrid;
