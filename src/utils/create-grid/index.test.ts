import createFullGrid from "./index";

describe("createFullGrid", () => {
  it("creates a 9x9 grid, each index with values 1-9", () => {
    const grid = createFullGrid();

    for (let row in grid) {
      for (let col in grid) expect(grid[row][col]).toBeGreaterThanOrEqual(1);
      for (let col in grid) expect(grid[row][col]).toBeLessThanOrEqual(9);
    }
  });
});
