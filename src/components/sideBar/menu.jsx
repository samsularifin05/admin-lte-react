const menu = [
  {
    path: "/dashboard",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Dashboard",
  },
  {
    path: "/form-control",
    icon: "nav-icon fas fa-pen-to-square",
    title: "Form Control",
  },
  {
    path: "#",
    icon: "nav-icon fas fa-database",
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
  {
    path: "/",
    icon: "nav-icon fas fa-arrow-right-from-bracket",
    title: "Logout",
  },
];


export default menu;
