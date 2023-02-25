const loading = (state) => state.utility.getLoading;
const progress = (state) => state.utility.getProgres;
const getModal = (state) => state.utility.modalShow;
const screenSize = (state) => state.utility.screenSize;
const menuSidebarCollapsed = (state) => state.utility.menuSidebarCollapsed;

const selectorUtility = {
  loading,
  progress,
  getModal,
  screenSize,
  menuSidebarCollapsed
};

export { selectorUtility };
