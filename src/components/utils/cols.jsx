const Col = ({ className, children, size }) => (
  <div className={`col-${size || "4"} ${className || ""}`}>{children}</div>
);

export default Col;
