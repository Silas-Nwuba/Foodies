import React from "react";
import style from "../style/header.module.css";
import MobileSearch from "./MobileSearch";
const Header = ({ children, query, setQuery }) => {
  return (
    <header className={style.header}>
      <div className={style.headerContent}>{children}</div>
      <MobileSearch query={query} setQuery={setQuery} />
    </header>
  );
};

export default Header;
