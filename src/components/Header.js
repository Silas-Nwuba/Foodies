import React from "react";
import style from "../style/Header.module.css";
import MobileSearch from "./MobileSearch";
const Header = ({ query, setQuery, children }) => {
  return (
    <header className={style.header}>
      <div className={style.headerContent}>{children}</div>
      <MobileSearch query={query} setQuery={setQuery} />
    </header>
  );
};

export default Header;
