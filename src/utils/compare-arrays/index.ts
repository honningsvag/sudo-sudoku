/**
 * compares any two arrays (any dimensions). returns true if they are equal, false otherwise.
 * @param arr1 first array to compare
 * @param arr2 second array to compare
 */
const compareArrays = (arr1: any[], arr2: []): boolean => {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return arr1 === arr2;
  if (arr1.length !== arr2.length) return false;

  for (let i = 0, len = arr1.length; i < len; i++) {
    if (!compareArrays(arr1[i], arr2[i])) return false;
  }
  return true;
};

export default compareArrays;
