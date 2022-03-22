import { useDispatch, useSelector } from "react-redux";
import { getRandomArbitrary } from "../../utils/numbers";

import { RootState } from "./store";
import { toggle } from "./store/reducer";

const SquareColor = () => {
  const isActive = useSelector((state: RootState) => state.application.active);

  return (
    <div
      className="square-color"
      style={{ backgroundColor: isActive ? "#32a852" : "#a6304d" }}
    ></div>
  );
};

const SquareControl = () => {
  return (
    <div className="square-control">
      <p>Redux/Toolkit- {getRandomArbitrary()}</p>
    </div>
  );
};

export const ReduxScene = () => {
  const dispatch = useDispatch();

  console.log("Redux Provider rendering");

  return (
    <div className="scene">
      <button onClick={() => dispatch(toggle())}>change color</button>
      <SquareControl />
      <SquareColor />
    </div>
  );
};
