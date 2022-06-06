const menu = [
  {
    path: "/",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Dashboard",
  },
  {
    path: "#",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Data Master",
    children: [
      {
        path: "/master-supplier-berlian",
        title: "Master Supplier Berlian",
        is_show: false,
      },
    ]
  },
];

export default menu;
