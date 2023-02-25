import {
  ISLOADING,
  OPEN_MODAL,
  PROGRES,
  SCREEN,
  SIDEBAR_TOOGLE
} from "reduxStore/actions";

const initialState = {
  getLoading: {
    content: false,
    button: false,
    tabel: false
  },
  getProgres: 0,
  modalShow: {
    isModalShow: false,
    isEdit: false,
    data: []
  },
  screenSize: 0,
  menuSidebarCollapsed: false
};

const utility = (state = initialState, actions) => {
  switch (actions.type) {
    case SIDEBAR_TOOGLE:
      return {
        ...state,
        menuSidebarCollapsed: actions.payload
      };
    case SCREEN:
      return {
        ...state,
        screenSize: actions.payload
      };
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
