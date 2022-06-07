import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.css"
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { Store } from "./reduxStore";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
);
