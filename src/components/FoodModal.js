import React from "react";
import style from "../style/foodModal.module.css";
import { FaTimes } from "react-icons/fa";

const FoodModal = ({
  closeFoodModal,
  selectedFood,
  errorMessage,
  onBookMark,
  onClickBooked,
}) => {
  if (!errorMessage) {
    return (
      <div className={style.container}>
        <FaTimes
          style={{ float: "right", fontSize: "18px", cursor: "pointer" }}
          onClick={closeFoodModal}
        />
        <div className={style.product}>
          <img
            src={`${selectedFood.strMealThumb}`}
            alt={selectedFood.strMeals}
          />
          <div className={style.selectedFood}>
            <div className={style.foodContent}>
              <h3>{selectedFood.strMeal}</h3>
              <p> Category - {selectedFood.strCategory} </p>
              <p
                style={{
                  textAlign: "justify",
                  lineHeight: 1.3,
                  fontSize: 16,
                }}
              >
                Instructions - {selectedFood.strInstructions}
              </p>
            </div>
            {!onClickBooked ? (
              <button
                className={style.cartBtn}
                onClick={() => onBookMark(selectedFood)}
              >
                Add to Bookmark
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
};
export default FoodModal;
