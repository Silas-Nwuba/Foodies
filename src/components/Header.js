import React from "react";
import style from "../style/header.module.css";
const Header = ({ children }) => {
  return (
    <header className={style.header}>
      <div className={style.headerContent}>{children}</div>
    </header>
  );
};

export default Header;
