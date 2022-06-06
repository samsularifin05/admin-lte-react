import { ISLOADING,PROGRES } from "reduxStore/actions/utility_action";

const initialState = {
  getLoading: false,
  getProgres : 0
};

const utility = (state = initialState, actions) => {
  switch (actions.type) {
    case ISLOADING:
      return {
        ...state,
        getLoading: actions.payload
      };
    case PROGRES:
      return {
        ...state,
        getProgres: actions.payload
      };
    default:
      return state;
  }
};

export default utility;
