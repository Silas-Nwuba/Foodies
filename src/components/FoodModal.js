import React, { useEffect } from "react";
import style from "../style/foodModal.module.css";
import { FaTimes } from "react-icons/fa";

const FoodModal = ({
  closeFoodModal,
  selectedFood,
  errorMessage,
  onBookMark,
  onClickBooked,
}) => {
  useEffect(() => {
    if (selectedFood.strMeal === null) return;
    document.title = `Foodies | ${selectedFood.strMeal}`;
    return () => {
      document.title = "Foodies";
    };
  }, [selectedFood.strMeal]);

  if (!errorMessage) {
    return (
      <div className={style.container}>
        <div className={style.product}>
          <img
            src={`${selectedFood.strMealThumb}`}
            alt={selectedFood.strMeals}
          />
          <div className={style.foodContent}>
            <div>
              <h3>{selectedFood.strMeal}</h3>
              <p> Category - {selectedFood.strCategory} </p>
              <p
                style={{
                  textAlign: "justify",
                  lineHeight: 1.8,
                  fontSize: 16,
                }}
              >
                Instructions - {selectedFood.strInstructions}
              </p>
            </div>
            {!onClickBooked ? (
              <span className={style.footer}>
                <button
                  className={style.cartBtn}
                  onClick={() => onBookMark(selectedFood)}
                >
                  Add to Bookmark
                </button>
                <button className={style.close} onClick={closeFoodModal}>
                  Close
                </button>
              </span>
            ) : (
              <button className={style.close} onClick={closeFoodModal}>
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
};
export default FoodModal;
