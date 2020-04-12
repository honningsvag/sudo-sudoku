import { NUMBERS, BOX } from "typings";

interface IInput {
  box: BOX;
  value: NUMBERS;
}

let isInBox = ({ box, value }: IInput): boolean => {
  return [...box[0], ...box[1], ...box[2]].includes(value);
};

export default isInBox;
