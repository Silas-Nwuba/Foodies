import React from "react";
import style from "../style/food.module.css";
const Food = ({ children }) => {
  return <div className={style.food}>{children}</div>;
};
export default Food;
