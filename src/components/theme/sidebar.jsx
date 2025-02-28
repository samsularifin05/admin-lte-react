import React, { useEffect, useRef } from "react";
import menu from "./sidebar/menu";
import SidebarNavList from "./sidebar/SidebarNavList";
import { OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";

const Sidebar = () => {
  const scrollRef = useRef(null);
  const osInstance = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      osInstance.current = OverlayScrollbars(scrollRef.current, {
        scrollbars: {
          autoHide: "leave"
        }
      });
    }
    return () => {
      if (osInstance.current) {
        osInstance.current.destroy();
      }
    };
  }, []);

  return (
    <aside
      className="app-sidebar bg-body-secondary shadow"
      data-bs-theme="dark"
    >
      <div className="sidebar-brand text-center py-3">
        <span className="brand-text font-weight-light">ADMIN</span>
      </div>

      <div
        className="sidebar-wrapper"
        ref={scrollRef}
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <nav className="mt-2">
          <ul className="nav sidebar-menu flex-column">
            {menu.map((item, index) => (
              <SidebarNavList data={item} key={index} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
