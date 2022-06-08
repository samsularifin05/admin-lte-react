import { useSelector, React } from "components";
import { selectorUtility } from "reduxStore";

const Button = (props) => {
  const isLoading = useSelector(selectorUtility.loading);

  return (
    <button
      disabled={props.loading ? (isLoading ? "disabled" : "") : ""}
      type={props.type}
      className={`btn btn-${props.color} ${props.block && "btn-block"}`}
    >
      {props.loading ? (
        isLoading ? (
          <>
            <i className="fas fa-spinner fa-spin"></i> &nbsp; {props.textLoading}
          </>
        ) : (
          props.title
        )
      ) : (
        props.title
      )}
    </button>
  );
};

export default Button;
