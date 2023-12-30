import React from "react";
import style from "../style/foodList.module.css";
import { FaStar } from "react-icons/fa";

const FoodList = ({ id, item, showFoodModal }) => {
  const { idMeal, strMeal, strMealThumb, strCategory } = item;
  const rating = Math.floor(idMeal / 1000 + id);

  return (
    <div className={style.foodList} onClick={() => showFoodModal(idMeal)}>
      <img src={`${strMealThumb}`} alt={strMeal} />
      <div style={{ margin: "10px 0px", padding: "10px 20px" }}>
        <h3 style={{ fontSize: 15 }}>{strCategory}</h3>
        <h2 style={{ fontSize: 16, margin: "10px 0px" }}>{strMeal}</h2>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div>
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar key={i} style={{ color: "#ff922b", fontSize: "14px" }} />
            ))}
          </div>
          <span style={{ color: "#101010", fontSize: 12 }}>
            {rating} Ratings
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
