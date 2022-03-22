import { createContext, useState } from "react";

interface myContext {
  active: boolean;
  toggle: () => void;
}

export const MyContext = createContext({} as myContext);

export const MyContextProvider: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);

  function toggle() {
    setActive((active) => !active);
  }

  console.log("Context API Provider rendering");

  return (
    <MyContext.Provider value={{ toggle, active }}>
      {children}
    </MyContext.Provider>
  );
};
