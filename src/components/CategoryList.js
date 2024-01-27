import React from "react";
import style from "../style/CategoryPage.module.css";
import { Link } from "react-router-dom";
const CategoryList = ({ category }) => {
  return (
    <Link to={`/recipe/${category.idMeal}`} className={style.contentItem}>
      <img src={category.strMealThumb} alt="seafood" />
      <h2>{category.strMeal}</h2>
    </Link>
  );
};

export default CategoryList;
