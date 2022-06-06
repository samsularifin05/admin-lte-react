import { Content, Header, Sidebar, Footer, React } from "components";
import { useSelector } from "react-redux";
import { selectorThemes } from "reduxStore";

const App = () => {
  const content = useSelector(selectorThemes.handleSetContent);
  const header = useSelector(selectorThemes.handleSetPageHeader);
  const sidebar = useSelector(selectorThemes.handleSetPageSidebar);
  const footer = useSelector(selectorThemes.handleSetFooter);
  
  return (
    <div>
      {header && <Header />}
      {sidebar && <Sidebar />}
      {content && <Content /> }
      {footer && <Footer />}
    </div>
  );
};

export default App;
