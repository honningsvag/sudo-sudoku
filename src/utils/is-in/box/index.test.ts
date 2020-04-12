import { BOX } from "typings";

import isInBox from "./index";

describe("isInBox", () => {
  it("returns true when the value is in the box", () => {
    const box: BOX = [
      [1, 3, 4],
      [8, 2, 7],
      [6, 9, 5],
    ];
    expect(isInBox({box, value: 3})).toBeTruthy();
  });

  it("returns false when the value is not in the box", () => {
    const box: BOX = [
      [1, 3, 9],
      [8, 2, 7],
      [6, 9, 5],
    ];
    expect(isInBox({box, value: 4})).toBeFalsy();
  });
});
