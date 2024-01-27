import React from "react";
import style from "../style/FoodCategory.module.css";
import { Link } from "react-router-dom";

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
        <Link to="category/Seafood" className={style.categoryItem}>
          <img src="/image/seafood.jpg" alt="seafood" />
          <h2>Seafood</h2>
        </Link>
        <Link to={`category/Vegetarian`} className={style.categoryItem}>
          <img src="/image/vegetarian.jpg" alt="vegetarian" />
          <h2>Vegetarian</h2>
        </Link>
        <Link to={`category/Dessert`} className={style.categoryItem}>
          <img src="/image/dessert.jpg" alt="dessert" />
          <h2>Dessert</h2>
        </Link>
      </div>
    </div>
  );
};

export default FoodCategory;
