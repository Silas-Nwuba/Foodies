import React from "react";
import { FaTimes } from "react-icons/fa";
import style from "../style/booked.module.css";

const BookedList = ({ item, onDelete, onBookedDetail }) => {
  const { idMeal, strMealThumb, strMeal, strCategory } = item;
  return (
    <div className={style.bookedContent}>
      <span
        style={{ display: "flex", gap: 12 }}
        onClick={() => onBookedDetail(idMeal)}
      >
        <img src={strMealThumb} alt={strMeal} />
        <span>
          <h3>{strMeal}</h3>
          <p> Category - {strCategory}</p>
        </span>
      </span>
      <FaTimes
        onClick={() => onDelete(idMeal)}
        style={{ color: "rgb(151, 2, 2)", fontSize: 16, cursor: "pointer" }}
      />
    </div>
  );
};

export default BookedList;
