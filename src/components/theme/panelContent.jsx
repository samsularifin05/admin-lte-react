import HeaderContent from "./headerContent";

const PanelContent = ({ headerContent, title, menu, submenu, children }) => {
  return (
    <div className="app-content">
      {headerContent && (
        <HeaderContent title={title} menu={menu} submenu={submenu} />
      )}
      <div className="container-fluid">
        <h2>{menu}</h2>
        {children}
      </div>
    </div>
  );
};

export default PanelContent;
