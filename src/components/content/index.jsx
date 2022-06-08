import { React, useEffect, Route } from "components";
import { withRouter } from "react-router-dom";
import MenuRoutes from "../router";

const Content = (props) => {
  
  const setTitle = (path, routeArray) => {
    var pageTitle;
    for (var i = 0; i < routeArray.length; i++) {
      if (routeArray[i].path === path) {
        pageTitle = "Admin Lte | " + routeArray[i].title;
      }
    }
    document.title = pageTitle ? pageTitle : "Admin Lte | React App";
  };
  useEffect(() => {
    setTitle(props.history.location.pathname, MenuRoutes);
    return () => {
      setTitle(props.history.location.pathname, MenuRoutes);
    };
  });

  return (
    <div>
      {MenuRoutes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      })}
    </div>
  );
};

export default withRouter(Content);
