import React from "react";
import style from "../style/FoodMenu.module.css";

const FoodMenu = ({ name, title }) => {
  return (
    <>
      <div className={style.menu}>
        <p>{title}</p>
        <h2>{name}</h2>
      </div>
    </>
  );
};

export default FoodMenu;
