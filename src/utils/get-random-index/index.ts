/**
 * returns a random sudoku grid range in the 0-8 range.
 */
const getRandomIndex = () => {
  return Math.floor(Math.random() * 9);
};

export default getRandomIndex;
