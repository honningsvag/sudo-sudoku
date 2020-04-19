import { AnyAction, bindActionCreators } from "redux";
import { IReducer } from "./interfaces";
import { createFullGrid, removeNumbers, copyGrid } from "utils";
import * as types from "./types";

const initialState: IReducer = {};

const reducer = (state = initialState, action: AnyAction): IReducer => {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy);
      const workingGrid = copyGrid(challengeGrid);

      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      };

    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      };

    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert("Incorrect Option!");
          return state;
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        if ()
      }
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
