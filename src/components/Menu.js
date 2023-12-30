import React from "react";
import style from "../style/header.module.css";
import { Bookmark, Person, Telephone } from "react-bootstrap-icons";

const Menu = ({ onClickBookMark, bookedDiv }) => {
  return (
    <div className={style.menu} ref={bookedDiv}>
      <>
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Telephone style={{ color: " rgb(151, 2, 2)", fontSize: 25 }} />
          <span>
            <p style={{ fontSize: 14 }}>Call us now</p>
            <h4 style={{ color: "#ff922b", fontSize: 20 }}>09126576061</h4>
          </span>
        </span>

        <Person style={{ fontSize: 25 }} />
      </>
      <span onClick={onClickBookMark}>
        <Bookmark style={{ fontSize: 25, color: "#ff922b" }} />
      </span>
    </div>
  );
};

export default Menu;
