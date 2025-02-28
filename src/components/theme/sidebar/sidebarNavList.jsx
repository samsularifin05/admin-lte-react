import { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SidebarNavList = ({ data, submenu }) => {
  const icon = data?.icon && <i className={data.icon} />;
  const titlesub = data?.title && (
    <p>
      {data.title} <i className="nav-arrow fas fa-angle-right" />
    </p>
  );
  const title = data?.title && <p>{data.title}</p>;

  const [isMenuExtended, setIsMenuExtended] = useState(false);
  const mainMenuRef = useRef(null);
  const submenuRef = useRef(null);

  const handleMainMenuAction = (event) => {
    event.preventDefault();
    setIsMenuExtended((prev) => !prev);
  };

  useEffect(() => {
    const menuElement =
      submenu === "active" ? submenuRef.current : mainMenuRef.current;

    if (!menuElement) return;

    if (isMenuExtended) {
      menuElement.classList.add("show");
      menuElement.style.display = "block";
      menuElement.style.maxHeight = menuElement.scrollHeight + "px";
      menuElement.style.opacity = "1";
      menuElement.style.overflow = "auto";
      setTimeout(() => {
        menuElement.style.maxHeight = "none";
      }, 300);
    } else {
      menuElement.style.maxHeight = menuElement.scrollHeight + "px";
      menuElement.style.overflow = "hidden";

      requestAnimationFrame(() => {
        menuElement.style.maxHeight = "0px";
        menuElement.style.opacity = "0";
      });

      setTimeout(() => {
        menuElement.classList.remove("show");
        menuElement.style.display = "none";
      }, 300);
    }
  }, [isMenuExtended, submenu]);

  return (
    <>
      {data?.navheader && <li className="nav-header">{data.title}</li>}

      <li className={`nav-item${isMenuExtended ? " menu-open" : ""}`}>
        {data?.children ? (
          <Link
            href={data?.path}
            className="nav-link"
            onClick={handleMainMenuAction}
            style={{ cursor: "pointer" }}
          >
            {icon} {titlesub}
          </Link>
        ) : data?.navheader !== true ? (
          <Link
            href={data?.path || ""}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            {submenu === "active" ? (
              <i className="far fa-circle nav-icon" />
            ) : null}
            {icon} {title}
          </Link>
        ) : null}

        {data?.children && (
          <ul
            ref={submenu === "active" ? submenuRef : mainMenuRef}
            className="nav nav-treeview"
          >
            {data.children.map((submenu, i) => (
              <SidebarNavList data={submenu} key={i} submenu="active" />
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default memo(SidebarNavList);
