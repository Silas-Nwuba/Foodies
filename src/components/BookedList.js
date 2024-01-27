import React from "react";
import { FaTimes } from "react-icons/fa";
import style from "../style/Booked.module.css";
import { useBooked } from "../context/BookedContext";
import { useNavigate } from "react-router-dom";

const BookedList = () => {
  const { bookedItem, onDeleteBookItem, dispatch } = useBooked();
  const navigate = useNavigate();
  const handleViewRecipe = (idMeal) => {
    navigate(`/recipe/${idMeal}`);
    dispatch({ type: "closeBookMenu", payload: false });
  };
  return (
    <>
      {bookedItem.map((booked) => (
        <div className={style.bookedContent} key={booked.idMeal}>
          <div
            style={{ display: "flex", gap: 12 }}
            onClick={() => handleViewRecipe(booked.idMeal)}
            key={booked.idMeal}
          >
            <img src={booked.strMealThumb} alt={booked.strMeal} />
            <span>
              <h3>{booked.strMeal}</h3>
              <p> Category - {booked.strCategory}</p>
            </span>
          </div>
          <span
            className="closeBookedIcon"
            onClick={() => onDeleteBookItem(booked.idMeal)}
          >
            <FaTimes
              style={{
                color: "rgb(151, 2, 2)",
                fontSize: 16,
                cursor: "pointer",
              }}
            />
          </span>
        </div>
      ))}
    </>
  );
};

export default BookedList;
