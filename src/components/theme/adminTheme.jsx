import { useEffect } from "react";
import {
  useLoadingStore,
  useScreenSizeStore,
  useSidebarStore
} from "../../store/utils";
import {
  addWindowClass,
  calculateWindowSize,
  LoadingApp,
  removeWindowClass,
  useWindowSize
} from "../utils/function";

import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export default function AdminTheme() {
  const { screenSize, setScreenSize } = useScreenSizeStore();
  const loading = useLoadingStore((state) => state.loading);
  const { menuSidebarCollapsed, toggleSidebar } = useSidebarStore();

  const handleToggleMenuSidebar = () => {
    toggleSidebar();
  };

  const windowSize = useWindowSize();
  useEffect(() => {
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");
    removeWindowClass("sidebar-expand-lg");

    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      setScreenSize(size);
    }

    if (menuSidebarCollapsed && screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if (menuSidebarCollapsed && screenSize === "xs") {
      addWindowClass("sidebar-open");
      addWindowClass("sidebar-expand-lg");
    } else if (!menuSidebarCollapsed && screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }, [
    menuSidebarCollapsed,
    screenSize,
    setScreenSize,
    windowSize.width,
    loading
  ]);

  return (
    <>
      {loading.content && <LoadingApp />}

      <div className="app-wrapper">
        <Sidebar />
        <main className="app-main">
          <Header />
          <main>
            {" "}
            <Outlet />
          </main>
        </main>
        <Footer />

        <div
          id="sidebar-overlay"
          className="sidebar-overlay glass-effect"
          onClick={handleToggleMenuSidebar}
          onKeyDown={() => {}}
        />
      </div>
    </>
  );
}
