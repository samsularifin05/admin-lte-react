import React from "react";

const Row = ({ className, children }) => (
  <div className={`row ${className ? className : ""}`}>{children}</div>
);

export default Row;
