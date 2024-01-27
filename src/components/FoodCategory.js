import React from "react";
import style from "../style/FoodCategory.module.css";

const FoodCategory = () => {
  return (
    <div
      className={style.container}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <p>Choose Category</p>
      <h1>Recipe Categories</h1>
      <div className={style.category}>
        <div className={style.categoryItem}>
          <img src="/image/seafood.jpg" alt="seafood" />
          <h2>Seafood</h2>
        </div>
        <div className={style.categoryItem}>
          <img src="/image/vegetarian.jpg" alt="vegetarian" />
          <h2>Vegetarian</h2>
        </div>
        <div className={style.categoryItem}>
          <img src="/image/dessert.jpg" alt="Noo" />
          <h2>Dessert</h2>
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
