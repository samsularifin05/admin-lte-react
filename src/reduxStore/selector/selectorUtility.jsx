const loading = (state) => state.utility.getLoading;
const progress = (state) => state.utility.getProgres;
const getModal = (state) => state.utility.modalShow;

const selectorUtility = {
  loading,
  progress,
  getModal
};

export { selectorUtility };
