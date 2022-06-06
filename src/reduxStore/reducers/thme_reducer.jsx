import { CONTENT, FOOTER, HEADER, SIDEBAR } from "reduxStore/actions/theme_action";

const initialState = {
    handleSetPageSidebar: true,
    handleSetPageHeader: true,
    handleSetContent: true,
    handleSetFooter: true,
  };
  const themes = (state = initialState, actions) => {
    switch (actions.type) {
        case SIDEBAR:
          return {
            ...state,
            handleSetPageSidebar: actions.payload.data,
          };
          case HEADER:
            return {
              ...state,
              handleSetPageHeader: actions.payload.data,
            };
          case CONTENT:
            return {
              ...state,
              handleSetContent: actions.payload.data,
            };
          case FOOTER:
            return {
              ...state,
              handleSetFooter: actions.payload.data,
            };
        default:
          return state;
      }
  }

export default themes;
