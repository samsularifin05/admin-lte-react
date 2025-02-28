import React from "react";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="float-end d-none d-sm-inline">
        <b>Version</b> 0.1
      </div>
      <strong>
        Copyright © 2023{" "}
        <a href="https://github.com/samsularifin05/admin-lte-nextJs">
          Samsul Arifin
        </a>
        .
      </strong>{" "}
      All rights reserved.
    </footer>
  );
};

export default Footer;
