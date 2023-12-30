import React from "react";
import style from "../style/foodCategory.module.css";

const FoodCategory = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default FoodCategory;
