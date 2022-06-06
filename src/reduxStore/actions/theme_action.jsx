export const HEADER = "HEADER";
export const FOOTER = "FOOTER";
export const SIDEBAR = "SIDEBAR";
export const CONTENT = "CONTENT";

const handleSetPageSidebar = (data) => {
  return (dispatch) => {
    dispatch({
      type: SIDEBAR,
      payload: {
        data: data
      }
    });
  };
};

const handleSetPageHeader = (data) => {
  return (dispatch) => {
    dispatch({
      type: HEADER,
      payload: {
        data: data
      }
    });
  };
};
const handleSetContent = (data) => {
  return (dispatch) => {
    dispatch({
      type: CONTENT,
      payload: {
        data: data
      }
    });
  };
};
const handleSetFooter = (data) => {
  return (dispatch) => {
    dispatch({
      type: FOOTER,
      payload: {
        data: data
      }
    });
  };
};

const actionTheme = {
  handleSetContent,
  handleSetFooter,
  handleSetPageSidebar,
  handleSetPageHeader
};
export { actionTheme };
