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
    navheader : true,
    title: "MULTI LEVEL EXAMPLE",
  },
  {
    path: "#",
    icon: "nav-icon fas fa-database",
    title: "Menu Level",
    children: [
      {
        path: "#",
        title: "Level 1",
        is_show: false,
      },
      {
        path: "#",
        title: "Level 2",
        icon : "nav-icon fas far fa-circle nav-icon",
        is_show: false,
        children: [
          {
            path: "#",
            title: "Sub Level 2",
            is_show: false,
          },
          {
            path: "#",
            title: "Sub Level 3",
            is_show: false,
          },
          {
            path: "#",
            title: "Sub Level 4",
            is_show: false,
          },
        ]
      },
      {
        path: "#",
        title: "Level 3",
        is_show: false,
      },
    ]
  },

  {
    navheader : true,
    title: "EXAMPLES",
  },
  {
    path: "#",
    icon: "nav-icon fas fa-database",
    title: "Demo Page",
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
