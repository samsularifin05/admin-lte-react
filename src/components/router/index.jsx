import { Dashboard, DataMaster, PageNotFound } from "pages";

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
  {
    path: "*",
    exact: true,
    title: "Data Master",
    component: () => <PageNotFound />
  }
];

export default MenuRoutes;
