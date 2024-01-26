import React from "react";
import style from "../style/Button.module.css";

const Button = ({ children, activeClass, onToggle }) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className={activeClass ? style.active : style.btn}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
