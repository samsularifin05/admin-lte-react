import {  ISLOADING,OPEN_MODAL,PROGRES } from "reduxStore/actions/utility_action";

const initialState = {
  getLoading: {
    content: false,
    button: false,
    tabel: false
  },
  getProgres : 0,
  modalShow: {
    isModalShow: false,
    isEdit: false,
    data: []
  },
};

const utility = (state = initialState, actions) => {
  switch (actions.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalShow: actions.payload
      };
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
