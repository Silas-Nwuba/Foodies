import React from "react";
import style from "../style/Header.module.css";
import { Bookmark, Person, Telephone } from "react-bootstrap-icons";
import { useBooked } from "../context/BookedContext";

const Menu = () => {
  const { bookedItem, onShowMenu } = useBooked();

  return (
    <div className={style.menu}>
      <>
        <span className={style.contactInfo}>
          <Telephone style={{ color: " rgb(151, 2, 2)", fontSize: 25 }} />
          <span style={{ lineHeight: 0.7 }}>
            <p style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>
              Call us now
            </p>
            <h4 style={{ color: "#ff922b", fontSize: 18 }}>09126576061</h4>
          </span>
        </span>

        <Person style={{ fontSize: 25 }} />
      </>
      <span onClick={onShowMenu} style={{ position: "relative" }}>
        <Bookmark
          style={{ fontSize: 25, color: "#ff922b" }}
          className={style.count}
        />
        <p
          style={{
            position: "absolute",
            top: "-6px",
            right: "-6px",
            backgroundColor: "rgb(151, 2, 2)",
            borderRadius: "100%",
            color: "white",
            fontWeight: 600,
            width: "1.2rem",
            height: "1.2rem",
            textAlign: "center",
          }}
        >
          {bookedItem.length}
        </p>
      </span>
    </div>
  );
};

export default Menu;
