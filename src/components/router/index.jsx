import { Dashboard, DataMaster } from "pages";

const MenuRoutes = [
  {
    path: "/",
    exact: true,
    title: "Dashboard",
    component: () => <Dashboard />
  },
  {
    path: "/data-master",
    exact: true,
    title: "Data Master",
    component: () => <DataMaster />
  },
];

export default MenuRoutes;
