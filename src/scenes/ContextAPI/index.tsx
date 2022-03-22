import { useContext } from "react";
import { getRandomArbitrary } from "../../utils/numbers";

import { MyContext } from "./context";

const SquareColor = () => {
  const context = useContext(MyContext);

  return (
    <div
      className="square-color"
      style={{ backgroundColor: context.active ? "#32a852" : "#a6304d" }}
    ></div>
  );
};

// also I can use memo here
const SquareControl = () => {
  return (
    <div className="square-control">
      <p>Context API - {getRandomArbitrary()}</p>
    </div>
  );
};

// const ChangeColorButton = () => {
//   const context = useContext(MyContext);
//   return <button onClick={context.toggle}>change color</button>;
// };

export const ContextAPIScene = () => {
  const context = useContext(MyContext);

  return (
    <div className="scene">
      {/* I can prevent rerendering moving the useContext to ChangeColorButton */}
      <button onClick={context.toggle}>change color</button>
      <SquareControl />
      <SquareColor />
    </div>
  );
};
