import React from "react";
import style from "../style/Backdrop.module.css";

const Backdrop = ({ onHideSideMenu }) => {
  return <div onClick={onHideSideMenu} className={style.backdrop}></div>;
};

export default Backdrop;
