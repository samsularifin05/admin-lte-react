export const ISLOADING = "ISLOADING";

const setLoading = (data) => {
  return (dispatch) => {
    dispatch({
      type: ISLOADING,
      payload: data
    });
  };
};

const utilityAction = {
  setLoading
};

export { utilityAction };
