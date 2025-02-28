import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./assets/css/index.css";
import { route } from "./pages/routes";

createRoot(document.getElementById("app")).render(
  <RouterProvider router={route} />
);
