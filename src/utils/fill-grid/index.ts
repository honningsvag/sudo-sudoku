import { GRID, NUMBERS } from "typings";
import { shuffle, isInRow, isInCol } from "utils";

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
          //value in row?
          if (isInCol({ grid, col, value })) {
            //value in box?
            const box = [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ];
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
