import { Dashboard, FormControl, Jenis, Kategori, Login } from "pages";

const MenuRoutes = [
  {
    path: "/login",
    exact: true,
    title: "Login",
    component: () => <Login />
  },
  {
    path: "/",
    exact: true,
    title: "Dashboard",
    component: () => <Dashboard />
  },
  {
    path: "/master-kategori",
    exact: true,
    title: "Master Kategori",
    component: () => <Kategori />
  },
  {
    path: "/master-jenis",
    exact: true,
    title: "Master Jenis",
    component: () => <Jenis />
  },
  {
    path: "/form-control",
    exact: true,
    title: "Form Control",
    component: () => <FormControl />
  },
 
];

export default MenuRoutes;
