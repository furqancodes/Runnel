import React from "react";
import reactDOM from "react-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import combineReducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

reactDOM.render(
  <Provider
    store={createStore(combineReducers, composeEnhancers(applyMiddleware()))}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
