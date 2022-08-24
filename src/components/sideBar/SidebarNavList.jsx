import { Link, Route, React, useState } from "components";

const SidebarNavList = (props) => {
  const icon = props.data.icon && <i className={props.data.icon}></i>;
  const titlesub = props.data.title && (
    <p>
      {props.data.title} 
      <i className="right fas fa-angle-left"></i>
    </p>
  );
  const title = props.data.title && (
    <p>
      {props.data.title} 
    </p>
  );

  const [active, setActive] = useState(-1);
  const [clicked, setclicked] = useState(-1);
  const handleExpand = (e, i, match) => {
    e.preventDefault();
    setActive(active === i ? -1 : i);
    setclicked(1);
  };
  return (
    <Route
      path={props.data.path}
      exact={props.data.exact}
      children={({ match }) => (
        <>
        {props.data.navheader && <li className="nav-header">{props.data.title}</li>}
        <li className="nav-item">
          {props.data.children ? (
            <Link to={props.data.path} className="nav-link">
              {icon} {titlesub}
             
            </Link>
          ) : (
            props.data.navheader !== true ?
            <Link to={props.data.path} className="nav-link">
              {props.submenu === "active" ? (
                <i className="far fa-circle nav-icon"></i>
              ) : null}
              {icon} {title}
            </Link> : null
          )}
          {props.data.children && (
            <ul className="nav nav-treeview">
              {props.data.children &&
                props.data.children.map((submenu, i) => (
                  <SidebarNavList
                    data={submenu}
                    key={i}
                    submenu="active"
                    expand={(e) => handleExpand(e, i, match)}
                    active={i === active}
                    clicked={clicked}
                  />
                ))}
            </ul>
          )}
        </li>
        </>
      )}
    />
  );
};

export default SidebarNavList;
