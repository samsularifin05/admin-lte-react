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
        path: "/master-kategori",
        title: "Kategori",
        is_show: false,
      },
      {
        path: "/master-jenis",
        title: "Jenis",
        is_show: false,
      },
    ]
  },
];

export default menu;
