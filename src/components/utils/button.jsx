import { useLoadingStore } from "../../store/utils";

const Button = (props) => {
  const { title, icon, onClick, textLoading, disabled, type, color, block } =
    props;

  const { loading } = useLoadingStore();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading.button}
      className={`btn btn-${color} ${block ? "btn-block" : ""}`}
    >
      {loading.button ? (
        <>
          <i className="fas fa-spinner fa-spin" /> &nbsp; {textLoading}
        </>
      ) : (
        title || (icon && <i className={`fas ${icon}`} />)
      )}
    </button>
  );
};

export default Button;
