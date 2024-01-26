import React from "react";
import style from "../style/ErrorMessage.module.css";
import { FaBan, FaExclamation } from "react-icons/fa";
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
  if (message === "Not Found") {
    return (
      <div className={style.container}>
        <div
          style={{
            backgroundColor: "#f1eeee",
            borderRadius: "25px",
            width: 50,
            height: 50,
            margin: "10px auto 20px auto",
          }}
        >
          <FaExclamation
            style={{
              fontSize: 35,
              color: "darkred",
              marginTop: "7px",
            }}
          />
        </div>
        <h1>Not Found</h1>
        <p>The recipe you requested can't be found we are working on it</p>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div
        style={{
          backgroundColor: "#f1eeee",
          borderRadius: "25px",
          width: 50,
          height: 50,
          margin: "  10px auto 20px auto",
        }}
      >
        <WifiOff
          style={{
            fontSize: 35,
            color: "darkred",
            marginTop: "7px",
          }}
        />
      </div>

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
