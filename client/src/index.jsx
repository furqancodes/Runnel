import React from "react";
import reactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import combineReducers from "./reducers";
reactDOM.render(
  <Provider store={createStore(combineReducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
