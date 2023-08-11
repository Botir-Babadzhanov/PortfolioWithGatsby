import React from "react";
import { AppProvider } from "context/globalContext";
import "styles/global.css";

const GlobalLayout = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export { GlobalLayout };
