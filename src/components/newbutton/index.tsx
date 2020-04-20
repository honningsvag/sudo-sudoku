import React, { FC } from "react";
import { Button } from "components";

const NewButton: FC = () => {
  return <Button onClick={() => alert("New game WIP")}>New Game</Button>;
};

export default NewButton;
