import React, { useEffect, useRef } from "react";
import style from "../style/Booked.module.css";
import { ArrowRight } from "react-bootstrap-icons";
import { useBooked } from "../context/BookedContext";

const Booked = ({ children }) => {
  const bookedDiv = useRef(null);
  const { bookedItem, onCloseMenu, onClearAllBookItem } = useBooked();

  useEffect(() => {
    bookedDiv.current.style.right = "0px";
  }, []);

  if (bookedItem.length === 0)
    return (
      <div className={style.booked} ref={bookedDiv}>
        <span className={style.header}>
          <h1>Bookmark</h1>
          <span
            onClick={onCloseMenu}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              cursor: "pointer",
            }}
          >
            <p>Close </p>
            <ArrowRight style={{ fontSize: 20, color: "rgb(151, 2, 2)" }} />
          </span>
        </span>

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="\image\empty-bookmark.png"
            alt="empty-booked-icon"
            style={{ width: "100px", height: "100px" }}
          />
          <p style={{ fontSize: "16px" }}> No item has been booked</p>
        </div>
      </div>
    );

  return (
    <div className={style.booked} ref={bookedDiv}>
      <span className={style.header}>
        <h1>Bookmark</h1>
        <span
          onClick={onCloseMenu}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            cursor: "pointer",
          }}
        >
          <p>Close </p>
          <ArrowRight style={{ fontSize: 20, color: "rgb(151, 2, 2)" }} />
        </span>
      </span>
      <div className={style.bookedContainer}>{children}</div>
      <button onClick={onClearAllBookItem}>Clear All</button>
    </div>
  );
};

export default Booked;
