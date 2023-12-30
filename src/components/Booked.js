import React from "react";
import style from "../style/booked.module.css";
import { ArrowRight } from "react-bootstrap-icons";
// import CartList from "./CartList";

const Booked = ({ item, children, handleCloseBooked, bookedDiv }) => {
  if (item === 0)
    return (
      <div className={style.booked} ref={bookedDiv}>
        <span className={style.header}>
          <h1>Bookmark Overview</h1>
          <span
            onClick={handleCloseBooked}
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
        {<p> No item has been booked</p>}
      </div>
    );

  return (
    <div className={style.booked}>
      <span className={style.header}>
        <h1>Bookmark Overview</h1>
        <span
          onClick={handleCloseBooked}
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
    </div>
  );
};

export default Booked;
