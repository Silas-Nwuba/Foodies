import React from "react";
import style from "../style/header.module.css";
import { Bookmark, Person, Telephone } from "react-bootstrap-icons";

const Menu = ({ onClickBookMark, itemCount }) => {
  return (
    <div className={style.menu}>
      <>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            cursor: "defaults",
          }}
        >
          <Telephone style={{ color: " rgb(151, 2, 2)", fontSize: 25 }} />
          <span style={{ lineHeight: 0.7 }}>
            <p style={{ fontSize: 16, fontWeight: 500 }}>Call us now</p>
            <h4 style={{ color: "#ff922b", fontSize: 18 }}>09126576061</h4>
          </span>
        </span>

        <Person style={{ fontSize: 25 }} />
      </>
      <span onClick={onClickBookMark} style={{ position: "relative" }}>
        <Bookmark
          style={{ fontSize: 25, color: "#ff922b" }}
          className={style.count}
        />
        <p
          style={{
            position: "absolute",
            top: "-18px",
            right: "-10px",
            backgroundColor: "rgb(151, 2, 2)",
            borderRadius: "50%",
            fontSize: 14,
            padding: "2px 5px",
            color: "white",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {itemCount}
        </p>
      </span>
    </div>
  );
};

export default Menu;
