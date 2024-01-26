import React, { useEffect } from "react";
import style from "../style/FoodModal.module.css";
import { FaBookmark, FaTimes } from "react-icons/fa";

const FoodModal = ({
  closeFoodModal,
  selectedFood,
  errorMessage,
  onBookMark,
  onTest,
}) => {
  console.log(onTest);
  useEffect(() => {
    if (selectedFood.strMeal === null) return;
    document.title = `Foodies | ${selectedFood.strMeal}`;
    return () => {
      document.title = "Foodies";
    };
  }, [selectedFood.strMeal]);
  useEffect(() => {
    function handleScroll() {
      const yOfSet = window.pageYOffset;
      if (yOfSet > 0) {
        closeFoodModal();
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [closeFoodModal]);
  if (!errorMessage) {
    return (
      <>
        <div className={style.container}>
          <div className={style.closeIcon} onClick={closeFoodModal}>
            <FaTimes style={{ color: "white", fontSize: 20, float: "right" }} />
          </div>
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

              <span className={style.footer}>
                {!onTest && (
                  <button
                    className={style.mobile}
                    onClick={() => onBookMark(selectedFood)}
                  >
                    <FaBookmark style={{ fontSize: 25, color: "white" }} />
                  </button>
                )}

                {!onTest && (
                  <button
                    className={style.desktop}
                    onClick={() => onBookMark(selectedFood)}
                  >
                    Add To Bookmark
                  </button>
                )}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default FoodModal;
