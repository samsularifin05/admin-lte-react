import { createBrowserRouter } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Login from "./login";
import { AdminTheme } from "@/components";

export const route = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminTheme />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
  {
    path: "/",
    element: <Login />
  }
]);
