import React from "react";
import style from "../style/RecipeList.module.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedRecipeList = ({ id, item }) => {
  const { idMeal, strMeal, strMealThumb, strCategory } = item;
  const rating = Math.floor(idMeal / 1000 + id);
  return (
    <Link to={`recipe/${idMeal}`} className={style.recipelist}>
      <img src={`${strMealThumb}`} alt={strMeal} />
      <div style={{ margin: "10px 0px", padding: "10px 20px" }}>
        <h3 style={{ fontSize: "15px" }}>{strCategory}</h3>
        <h2 style={{ fontSize: "18px", margin: "10px 0px" }}>{strMeal}</h2>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div>
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar key={i} style={{ color: "#ff922b", fontSize: "16px" }} />
            ))}
          </div>
          <span style={{ color: "#101010", fontSize: "14px" }}>
            {rating} Ratings
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedRecipeList;
