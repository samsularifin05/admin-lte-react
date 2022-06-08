import React from "react";
const Col = (props) => {
  return (
    <div className={`col-${props.size || "4"} ${props.className ||""}`}>
      {props.children}
    </div>
  );
};

export default Col;