import { utilityAction } from "reduxStore/actions";

const initialState = {
  getLoading: false
};

const utility = (state = initialState, actions) => {
  switch (actions.type) {
    case utilityAction.ISLOADING:
      return {
        ...state,
        getLoading: actions.payload
      };
    default:
      return state;
  }
};

export default utility;
