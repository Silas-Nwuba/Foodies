import React from "react";
import style from "../style/errorMessage.module.css";
import { FaBan } from "react-icons/fa";
import { WifiOff } from "react-bootstrap-icons";

const ErrorMessage = ({ message }) => {
  const handleReload = () => {
    window.location.reload();
  };

  if (message === "not match") {
    return (
      <div className={style.container}>
        <FaBan
          style={{
            color: "rgb(151, 2, 2)",
            fontSize: 40,
            margin: "20px 0px",
          }}
        />
        <h1> There is no result found for your search</h1>
        <p>Please try another search term</p>
      </div>
    );
  }
  return (
    <div className={style.container}>
      <WifiOff
        style={{
          fontSize: 40,
          color: "darkred",
          margin: "20px 0px",
        }}
      />
      <h1>No internet connection</h1>
      <p>Make sure Wi-Fi or cellular data is turned on, then try again.</p>
      <button
        onClick={handleReload}
        style={{
          backgroundColor: "#ff922b",
          padding: "10px",
          color: "#ffff",
          fontSize: 16,
          fontWeight: 600,
          outline: "none",
          width: "130px",
          border: "1px solid #ff922b",
          margin: "15px 0px",
          cursor: "pointer",
        }}
      >
        Retry
      </button>
    </div>
  );
};
export default ErrorMessage;
