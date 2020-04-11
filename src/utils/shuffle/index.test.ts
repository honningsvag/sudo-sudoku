import shuffle from "./index";

describe("shuffle", () => {
  it("returns array of same length after shuffling", () => {
    const array = [1, 2, 3];
    shuffle(array);
    expect(array).toHaveLength(3);
  });

  it("returns array with same elements after shuffling", () => {
    const array = [1, 2, 3];
    shuffle(array);
    expect(array).toContain(1);
    expect(array).toContain(2);
    expect(array).toContain(3);
  });
});
