import React from "react";
import style from "../style/header.module.css";

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src="/image/logo.jpeg" alt="logo" />
      <h1>Foodies</h1>
    </div>
  );
};

export default Logo;
