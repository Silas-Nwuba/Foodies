import React from "react";
import style from "../style/Header.module.css";
import MobileSearch from "./MobileSearch";
const Header = ({ children }) => {
  return (
    <header className={style.header}>
      <div className={style.headerContent}>{children}</div>
      <MobileSearch />
    </header>
  );
};

export default Header;
