import { PanelContent, React } from "components";
import { useDispatch } from "react-redux";
import { utilityAction } from "reduxStore";

const DataMaster = () => {
  const dispatch = useDispatch();

  return (
    <PanelContent title="Data Master">
      <button onClick={() => dispatch(utilityAction.setLoading(true))}>
        {" "}
        Loading On{" "}
      </button>{" "}
      &nbsp;
      <button onClick={() => dispatch(utilityAction.setLoading(false))}>
        {" "}
        Loading Of{" "}
      </button>
    </PanelContent>
  );
};

export default DataMaster;
