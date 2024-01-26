import React from "react";
import style from "../style/FoodCategory.module.css";

const FoodCategory = () => {
  return (
    <div className={style.container}>
      <p>Choose Category</p>
      <h1>Recipe Categories</h1>
      <div className={style.category}>
        <div className={style.categoryItem}>
          <img src="/image/pexels-rajesh-tp-1600727.jpg" alt="food" />
          <h2>Bugar</h2>
        </div>
        <div className={style.categoryItem}>
          <img src="/image/images (7).jpeg" alt="food" />
          <h2>Pizza</h2>
        </div>
        <div className={style.categoryItem}>
          <img src="/image/images (23).jpeg" alt="food" />
          <h2>Noodles</h2>
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
