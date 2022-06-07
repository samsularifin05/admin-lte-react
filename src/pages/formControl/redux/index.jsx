import { utilityAction } from "reduxStore";

const handleSubmit = (data) => {
  return async (dispatch, getState) => {
    dispatch(utilityAction.setProgres());
    dispatch(utilityAction.setLoading(true));

    setTimeout(() => {
        alert(`Field 1 ${data.field_1} \nField 2 ${data.field_2}`)
        dispatch(utilityAction.setLoading(false));
    }, 5000);
  };
};

export { handleSubmit };
