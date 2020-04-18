import { GRID } from "typings";

/**
 * removes numbers from a filled grid to start the sudoku challenge
 * @param grid a 9x9 sudoku grid
 * @param attempts number of attempts to solve (higher # equals more difficulty), defaults to 5
 */
const removeNumbers = (grid: GRID, attempts = 5): GRID => {
  return grid;
};

export default removeNumbers;
