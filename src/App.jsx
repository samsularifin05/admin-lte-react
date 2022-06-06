import {
  Content,
  Header,
  Sidebar,
  Footer,
  React,
  LoadingBar,
  useSelector
} from "components";

import { selectorThemes, selectorUtility } from "reduxStore";

const App = () => {
  const content = useSelector(selectorThemes.handleSetContent);
  const header = useSelector(selectorThemes.handleSetPageHeader);
  const sidebar = useSelector(selectorThemes.handleSetPageSidebar);
  const footer = useSelector(selectorThemes.handleSetFooter);
  const progress = useSelector(selectorUtility.progress);
  return (
    <div>
      {header && <Header />}
      {sidebar && <Sidebar />}
      {content && <Content />}
      {footer && <Footer />}
      <LoadingBar color={"red"} progress={progress} />
    </div>
  );
};

export default App;
