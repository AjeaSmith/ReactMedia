import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./Store/reducers/rootReducer";
import { Provider } from "react-redux";
import App from "./App";
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
