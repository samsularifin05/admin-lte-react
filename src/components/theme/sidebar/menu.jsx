const menu = [
  {
    path: "/admin/dashboard",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Dashboard"
  },
  {
    path: "/",
    icon: "nav-icon fas fa-database",
    title: "Data Master",
    children: [
      {
        path: "/admin/about",
        title: "Data Users"
      },
      {
        path: "/category",
        title: "Menu 2"
      }
    ]
  },
  {
    path: "/",
    icon: "nav-icon fas fa-database",
    title: "Menu Level",
    children: [
      {
        path: "/",
        title: "Level 1"
      },
      {
        path: "",
        title: "Level 2",
        icon: "nav-icon fas far fa-circle nav-icon",
        children: [
          {
            path: "/",
            title: "Sub Level 2"
          },
          {
            path: "/",
            title: "Sub Level 3"
          },
          {
            path: "/",
            title: "Sub Level 4"
          }
        ]
      },
      {
        path: "",
        title: "Level 2",
        icon: "nav-icon fas far fa-circle nav-icon",
        children: [
          {
            path: "/",
            title: "Sub Level 2"
          },
          {
            path: "/",
            title: "Sub Level 3"
          },
          {
            path: "/",
            title: "Sub Level 4"
          }
        ]
      },
      {
        path: "",
        title: "Level 2",
        icon: "nav-icon fas far fa-circle nav-icon",
        children: [
          {
            path: "/",
            title: "Sub Level 2"
          },
          {
            path: "/",
            title: "Sub Level 3"
          },
          {
            path: "/",
            title: "Sub Level 4"
          }
        ]
      },
      {
        path: "/",
        title: "Level 3"
      }
    ]
  }
];

export default menu;
