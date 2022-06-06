import { Link, Route ,React} from "components";
import menuApps from "./menu";
import SidebarNavList from "./SidebarNavList";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: 0.8 }}
            />
          </div>
          <div className="info">
            <Link to="#" className="d-block">
              Alexander Pierce
            </Link>
          </div>
        </div>
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {menuApps.map((menu, i) => (
              <Route
                path={menu.path}
                exact={menu.exact}
                key={i}
                children={({ match }) => (
                  <SidebarNavList
                    data={menu}
                    key={i}
                  />
                )}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
