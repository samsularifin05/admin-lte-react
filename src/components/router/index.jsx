import { Dashboard, DemoTabel, FormControl, Login } from "pages";

const MenuRoutes = [
  {
    path: "/",
    exact: true,
    title: "Login",
    component: () => <Login />
  },
  {
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    component: () => <Dashboard />
  },
  {
    path: "/demo-tabel",
    exact: true,
    title: "Demo Tabel",
    component: () => <DemoTabel />
  },

  {
    path: "/form-control",
    exact: true,
    title: "Form Control",
    component: () => <FormControl />
  },
 
];

export default MenuRoutes;
