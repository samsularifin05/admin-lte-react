import { useSelector, React } from "components";
import { selectorUtility } from "reduxStore";

const Button = (props) => {
  const isLoading = useSelector(selectorUtility.loading);

  const { icon, title, onClick,textLoading, loading, type, color, block } = props;

  return (
    <button
      disabled={loading ? (isLoading.button ? "disabled" : "") : ""}
      type={type}
      onClick={onClick}
      className={`btn btn-${color} ${block === undefined ? "" : "btn-block"}`}
    >
      {loading ? (
        isLoading.button ? (
          <>
            <i className="fas fa-spinner fa-spin"></i> &nbsp; {textLoading}
          </>
        ) : (
          title || <i className={`fas ${icon}`}></i> 
        )
      ) : (
        title || <i className={`fas ${icon}`}></i> 
      )}
    </button>
  );
};

export default Button;
