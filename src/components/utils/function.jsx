/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { Logo } from "../../assets/img";

export const LoadingApp = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 position-fixed w-100 top-0 start-0 bg-white"
      style={{ zIndex: 9999 }}
    >
      <Image
        className="animation__shake"
        src={Logo}
        alt="AdminLTELogo"
        height={60}
        width={60}
      />
    </div>
  );
};

export const LoadingContent = ({ loading }) => {
  return (
    <div id="cover-spin" style={{ display: loading ? "block" : "none" }}></div>
  );
};

export const addWindowClass = (classList) => {
  const windowElement = document && document.getElementById("app");
  if (windowElement) {
    windowElement.classList.add(classList);
  }
};

export const calculateWindowSize = (windowWidth) => {
  if (windowWidth >= 1200) {
    return "lg";
  }
  if (windowWidth >= 992) {
    return "md";
  }
  if (windowWidth >= 768) {
    return "sm";
  }
  return "xs";
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export const removeWindowClass = (classList) => {
  const windowElement = document && document.getElementById("app");
  if (windowElement) {
    windowElement.classList.remove(classList);
  }
};
