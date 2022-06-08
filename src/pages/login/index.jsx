import { Link, React, useDispatch, useEffect } from "components";
import { actionTheme, utilityAction } from "reduxStore";
import { withRouter } from "react-router-dom";
import FormLogin from "./form";

const Login = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionTheme.handleSetPageSidebar(false));
    dispatch(actionTheme.handleSetFooter(false));
    dispatch(actionTheme.handleSetPageHeader(false));
    return () => {
      dispatch(actionTheme.handleSetPageHeader(true));
      dispatch(actionTheme.handleSetPageSidebar(true));
      dispatch(actionTheme.handleSetFooter(true));
      dispatch(actionTheme.handleSetPageHeader(true));
    };
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(utilityAction.setProgres());
    dispatch(utilityAction.setLoading(true));
    setTimeout(() => {
    dispatch(utilityAction.setLoading(false));
      props.history.push("/dashboard");
      window.location.reload();
    }, 4000);
  };
  return (
    <div className="login-box container" style={{ marginTop: "10%" }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <Link to="#" className="h1">
            <b>Admin</b>LTE
          </Link>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <FormLogin onSubmit={(data)=>handleSubmit(data)} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);