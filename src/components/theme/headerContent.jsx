const HeaderContent = ({ title = "", menu = "", submenu = "" }) => (
  <section className="app-content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>{title}</h1>
        </div>
        {menu && (
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-end">
              <li className="breadcrumb-item">
                <div>{menu}</div>
              </li>
              <li className="breadcrumb-item active">{submenu}</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default HeaderContent;
