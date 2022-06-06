import LoadingBar from "react-top-loading-bar";

const LoadingTopBar = (color, progress) => {
  return(
    <LoadingBar color={color || "red"} progress={progress} />
  );
};


export {
    LoadingTopBar
}
