import React from "react";
import style from "../style/Recipe.module.css";
import FoodMenu from "./FoodMenu";
const LatestRecipe = ({ children }) => {
  return (
    <div className={style.container}>
      <FoodMenu name="Latest Recipes" title="Recent Recipe" />
      <div className={style.recipe}>{children}</div>
    </div>
  );
};
export default LatestRecipe;
