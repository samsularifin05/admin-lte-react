import { ISLOADING } from "reduxStore/actions/utility_action";

const initialState = {
  getLoading: false
};

const utility = (state = initialState, actions) => {
  switch (actions.type) {
    case ISLOADING:
      return {
        ...state,
        getLoading: actions.payload
      };
    default:
      return state;
  }
};

export default utility;
