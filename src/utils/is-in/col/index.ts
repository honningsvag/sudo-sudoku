import { GRID, NUMBERS } from "typings";

interface IInput {
  grid: GRID;
  col: number;
  value: NUMBERS;
}

/**
 * returns whether value in col of a grid
 * @param input an object with a 9x9 grid, a column number and a value
 */
let isInCol = ({ grid, col, value }: IInput): boolean => {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) {
      return true;
    }
  }
  return false;
};

export default isInCol;
