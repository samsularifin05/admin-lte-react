import {React,ReactDOM,BrowserRouter,Provider} from "components";
import "./assets/css/index.css"
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Store } from "./reduxStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
);
