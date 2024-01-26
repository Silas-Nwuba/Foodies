import React, { useEffect } from "react";
import style from "../style/SearchPage.module.css";
import { Link } from "react-router-dom";

const SearchRecipePageList = ({ searchRecipe }) => {
  const { strMeal, strCategory, strMealThumb, idMeal } = searchRecipe;
  useEffect(() => {
    document.title = `Foodies - ${strCategory}`;
    return () => {
      document.title = "Foodies";
    };
  }, [strCategory]);
  return (
    <Link to={`/recipe/${idMeal}`} className={style.recipe}>
      <img src={strMealThumb} alt={strMeal} />
      <p>{strCategory}</p>
      <h4>{strMeal}</h4>
    </Link>
  );
};
export default SearchRecipePageList;
