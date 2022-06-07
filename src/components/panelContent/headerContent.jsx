import { React, Link } from "components";
const HeaderContent = (props) => {
  return (
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
  );
};

export default HeaderContent;
