import React from "react";
import style from "../style/button.module.css";

const Main = ({ children }) => {
  return <div className={style.btnContainer}>{children}</div>;
};

export default Main;
