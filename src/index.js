import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppContextProvider } from "./context/AppContextProvider";

ReactDOM.render(
  <Provider store={store}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Provider>,

  document.getElementById("root")
);
