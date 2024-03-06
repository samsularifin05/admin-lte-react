import {
  Content,
  Header,
  Sidebar,
  Footer,
  React,
  LoadingBar,
  useSelector,
  LoadingContent,
  useEffect,
  addWindowClass,
  calculateWindowSize,
  useWindowSize,
  removeWindowClass,
  useDispatch
} from "components";
import { selectorThemes, selectorUtility, utilityAction } from "reduxStore";
const App = () => {
  const windowSize = useWindowSize();
  const screenSize = useSelector(selectorUtility.screenSize);
  const menuSidebarCollapsed = useSelector(
    selectorUtility.menuSidebarCollapsed
  );

  const dispatch = useDispatch();
  useEffect(() => {
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");
    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      dispatch(utilityAction.screenSize(size));
    }
    if (menuSidebarCollapsed && screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if (menuSidebarCollapsed && screenSize === "xs") {
      addWindowClass("sidebar-open");
    } else if (!menuSidebarCollapsed && screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }, [windowSize, menuSidebarCollapsed, dispatch, screenSize]);

  const content = useSelector(selectorThemes.handleSetContent);
  const header = useSelector(selectorThemes.handleSetPageHeader);
  const sidebar = useSelector(selectorThemes.handleSetPageSidebar);
  const footer = useSelector(selectorThemes.handleSetFooter);
  const progress = useSelector(selectorUtility.progress);
  const loading = useSelector(selectorUtility.loading);

  const handleToggleMenuSidebar = () => {
    dispatch(utilityAction.toggleSidebarMenu(!menuSidebarCollapsed));
  };
  return (
    <div className="wrapper">
      {header && <Header />}
      {sidebar && <Sidebar />}
      {content && <Content />}
      {footer && <Footer />}
      <LoadingBar color={"red"} progress={progress} />
      {loading.content && <LoadingContent />}
      <div
        id="sidebar-overlay"
        role="presentation"
        onClick={handleToggleMenuSidebar}
      />
    </div>
  );
};

export default App;
