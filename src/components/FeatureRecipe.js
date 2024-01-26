import React from "react";
import style from "../style/Recipe.module.css";
import FoodMenu from "./FoodMenu";
const FeaturedRecipe = ({ children }) => {
  return (
    <div className={style.container}>
      <FoodMenu name="Featured Recipes" title="Delicious Recipe" />
      <div className={style.recipe}>{children}</div>
    </div>
  );
};
export default FeaturedRecipe;
