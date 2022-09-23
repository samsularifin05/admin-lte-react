const menu = [
  {
    path: "/dashboard",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Dashboard",
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
        path: "/demo-tabel",
        title: "Demo Tabel",
        is_show: false,
      },
      {
        path: "/form-control",
        title: "Form Control",
        is_show: false,

      },
      {
        path: "/404",
        title: "Page Not Found",
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
