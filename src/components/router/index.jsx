import { Dashboard, Jenis, Kategori } from "pages";

const MenuRoutes = [
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
 
];

export default MenuRoutes;
