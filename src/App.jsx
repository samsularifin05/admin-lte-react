import { Content, Header, Sidebar, Footer, React } from "components";
import { useSelector } from "react-redux";
import { selectorUtility } from "reduxStore";

const App = () => {
  const loading = useSelector(selectorUtility.loading)

  console.log(loading)
  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
