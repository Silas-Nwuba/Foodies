import React from "react";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(233 228 228)",
        padding: "4px",
        marginTop: "auto",
      }}
    >
      <p
        style={{
          marginLeft: "20px",
          fontSize: "14px",
          color: "#191919",
          marginTop: "20px",
        }}
      >
        {" "}
        <FaRegCopyright
          style={{ fontSize: 12 }}
        /> {new Date().getFullYear()} EbukaCoder All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
