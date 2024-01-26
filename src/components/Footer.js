import React from "react";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      style={{
        padding: "4px",
        marginTop: "auto",
      }}
    >
      <p
        style={{
          marginLeft: "20px",
          fontSize: "14px",
          marginTop: "20px",
        }}
      >
        <FaRegCopyright style={{ fontSize: 12 }} /> {new Date().getFullYear()}{" "}
        EbukaCoder All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
