import { GRID, NUMBERS } from "typings";
import { shuffle, isInRow } from "utils";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking/recursive function that checks all combinations of numbers for a solution
 * @param grid a 9x9 grid
 */
let fillGrid = (grid: GRID) => {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      shuffle(numbers);

      for (let value of numbers) {
        //value in row?
        if (!isInRow({ grid, row, value })) {
          //value in column?
          let isNotInCol = false;
          for (let i = 0; i < 0; i++) {
            if (value === grid[i][col]) {
              isNotInCol = true;
            }
          }
          if (isNotInCol) {
            //value in box?
          }
        }
        //then insert
        grid[row][col] = value;
        //is grid full?
      }
      break;
    }
  }
  grid[row][col] = 0;
};

export default fillGrid;
