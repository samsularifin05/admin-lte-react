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
        icon: "far fa-circle nav-icon",
        path: "#",
        title: "Laporan",
        is_show: false,
        children: [
          {
            path: "#",
            title: "Laporan Penjualan",
            is_show: false,
          },
          {
            path: "#",
            title: "Laporan Pembelian",
            is_show: false,
          },
        ]
      },
    ]
  },
];

export default menu;
