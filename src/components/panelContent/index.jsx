import { Link ,React} from "components";

const PanelContent = (props) => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>{props?.title}</h1>
            </div>
            {props?.menu && (
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="#">{props?.menu}</Link>
                  </li>
                  <li className="breadcrumb-item active">{props?.submenu}</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
          <div className="card-body">{props.children}</div>
        </div>
      </section>
    </div>
  );
};

export default PanelContent;
