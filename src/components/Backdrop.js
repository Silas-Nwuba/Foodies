import React from "react";
import style from "../style/Backdrop.module.css";
import { useBooked } from "../context/BookedContext";

const Backdrop = () => {
  const { onCloseMenu } = useBooked();
  return <div onClick={onCloseMenu} className={style.backdrop}></div>;
};

export default Backdrop;
