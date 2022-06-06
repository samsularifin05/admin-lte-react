import { Link, React, useDispatch, useEffect } from "components";
import { actionTheme } from "reduxStore";
import { withRouter } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
        props.history.push("/dashboard");
        window.location.reload();
    }, 300);

  };
  return (
    <div className="login-box container" style={{marginTop : "10%"}}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <Link to="#" className="h1">
            <b>Admin</b>LTE
          </Link>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form method="post" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
