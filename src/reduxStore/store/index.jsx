import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "../reducers";
const composeEnhancers =
  process.env.REACT_APP_KEY === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;
const Store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default Store;
