import React, { Children, FC, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import useMousetrap from "react-hook-mousetrap";

import Block from "./block";
import { Container, Row } from "./styles";
import { createGrid } from "reducers";
import { INDEX } from "typings";

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);

  useEffect(() => {
    create();
  }, [create]);

  const moveDown = () => {};
  const moveUp = () => {};
  const moveRight = () => {};
  const moveLeft = () => {};

  useMousetrap("down", moveDown);
  useMousetrap("up", moveUp);
  useMousetrap("left", moveLeft);
  useMousetrap("right", moveRight);

  return (
    <Container>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  colIndex={colIndex as INDEX}
                  rowIndex={rowIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
