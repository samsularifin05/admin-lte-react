const loading = (state) => state.utility.getLoading;
const progress = (state) => state.utility.getProgres;

const selectorUtility = {
  loading,
  progress
};

export { selectorUtility };
