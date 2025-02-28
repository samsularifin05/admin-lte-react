import React from "react";

const Card = ({ title, footer, children }) => (
  <div className="card mb-4">
    <div className="card-header">
      <h3 className="card-title">{title}</h3>
    </div>
    <div className="card-body">{children}</div>
    {footer && <div className="card-footer">{footer}</div>}
  </div>
);

export default Card;
