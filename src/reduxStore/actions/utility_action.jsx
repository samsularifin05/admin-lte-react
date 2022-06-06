export const ISLOADING = "ISLOADING";
export const PROGRES = "PROGRES";

const setLoading = (data) => {
  return (dispatch) => {
    dispatch({
      type: ISLOADING,
      payload: data
    });
  };
};
const setProgres = (data) => {
  return (dispatch) => {
    let i = 0;
    if (i === 0) {
      i = 1;
      let width = 1;
      let id = setInterval(frame, 30);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          document.body.style.cursor = "initial";
        } else {
          document.body.style.cursor = "wait";
          width++;
          dispatch({
            type: PROGRES,
            payload: width
          });
        }
      }
    }
  };
};

const utilityAction = {
  setLoading,
  setProgres
};

export { utilityAction };
