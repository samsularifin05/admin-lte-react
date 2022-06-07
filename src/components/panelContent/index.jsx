import { React } from "components";
import HeaderContent from "./headerContent";

const PanelContent = (props) => {
  return (
    <div className="content-wrapper">
      {props.headerContent && (
        <HeaderContent
          title={props.title}
          menu={props.menu}
          submenu={props.submenu}
        />
      )}
      <section className="content">
        <div className="container-fluid">{props.children}</div>
      </section>
    </div>
  );
};

export default PanelContent;
