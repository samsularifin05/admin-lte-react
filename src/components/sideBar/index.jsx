import { Link, Route, React } from "components";
import menuApps from "./menu";
import SidebarNavList from "./SidebarNavList";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link text-center">
        <span className="brand-text font-weight-light text-center">AdminLTE 3</span>
      </Link>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {menuApps.map((menu, i) => (
              <Route
                path={menu.path}
                exact={menu.exact}
                key={i}
                children={({ match }) => <SidebarNavList data={menu} key={i} />}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
