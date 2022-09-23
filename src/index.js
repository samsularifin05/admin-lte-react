import {React,ReactDOM,BrowserRouter,Provider} from "components";
import "./assets/css/index.css"
import App from "./App";
import { Store } from "./reduxStore";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "antd/dist/antd.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
);
