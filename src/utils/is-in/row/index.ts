import { GRID, NUMBERS } from "typings";

interface IInput {
  grid: GRID;
  row: number;
  value: NUMBERS;
}

/**
 * returns true if value in row of the grid
 * @param input an object with a 9x9 grid, a row number, and a value
 */
let isInRow = ({ grid, row, value }: IInput): boolean => {
  return grid[row].includes(value);
};

export default isInRow;
