import { utilityAction } from "reduxStore";

const handleSubmit = (e) => {
    return async (dispatch,getState) => {
        dispatch(utilityAction.setProgres());
        setTimeout(() => {
            window.location.href = '/dashboard';
            // window.location.reload();

        }, 200);
        // if (progress === 100) {
        //     console.log('masuk')
        //     // dispatch(history.push("/dashboard"));
        // }
    };
  };
  

  export {
    handleSubmit
  }