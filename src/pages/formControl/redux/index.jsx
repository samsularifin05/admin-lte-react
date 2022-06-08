import { utilityAction } from "reduxStore";

const handleSubmit = (data) => {
  return async (dispatch, getState) => {
    dispatch(utilityAction.setProgres());
    dispatch(utilityAction.setLoading(true));

    setTimeout(() => {
        alert(`Username ${data.username} \nLevel ${data.level.value}`)
        dispatch(utilityAction.setLoading(false));
    }, 5000);
  };
};

export { handleSubmit };
