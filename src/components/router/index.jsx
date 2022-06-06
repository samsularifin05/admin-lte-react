import { Dashboard, Jenis, Kategori, Login } from "pages";

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
 
];

export default MenuRoutes;
