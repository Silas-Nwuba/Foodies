import React from "react";
import style from "../style/backdrop.module.css";

const Backdrop = ({ closeModal, errorMessage }) => {
  if (!errorMessage) {
    return <div onClick={closeModal} className={style.backdrop}></div>;
  }
};

export default Backdrop;
