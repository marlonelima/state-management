import { Provider } from "react-redux";

import { MyContextProvider } from "./scenes/ContextAPI/context";

import { ContextAPIScene } from "./scenes/ContextAPI";
import { ReduxScene } from "./scenes/Redux";

import { store } from "./scenes/Redux/store";

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <ContextAPIScene />
      </MyContextProvider>
      {/* // */}
      <Provider store={store}>
        <ReduxScene />
      </Provider>
    </div>
  );
}

export default App;
