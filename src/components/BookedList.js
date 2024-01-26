import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import style from "../style/Booked.module.css";

const BookedList = ({ bookedItem, onDelete, dispatch }) => {
  const { idMeal, strMealThumb, strMeal, strCategory } = bookedItem;
  const [iconClass, setIconClass] = useState(null);
  const BookedIcon = useRef();

  useEffect(() => {
    const icon = BookedIcon.current.className;
    setIconClass(icon);
  }, []);

  const handleViewRecipe = (e) => {
    const element = e.target.parentElement.parentElement;
    if (!element.classList.contains(iconClass)) {
      window.location.href = `/recipe/${idMeal}`;
      dispatch({ type: "closeBookMenu", payload: false });
    } else {
      dispatch({ type: "closeBookMenu", payload: true });
    }
  };
  return (
    <div className={style.bookedContent}>
      <div style={{ display: "flex", gap: 12 }} onClick={handleViewRecipe}>
        <img src={strMealThumb} alt={strMeal} />
        <span>
          <h3>{strMeal}</h3>
          <p> Category - {strCategory}</p>
        </span>
      </div>
      <span
        className="closeBookedIcon"
        ref={BookedIcon}
        onClick={() => onDelete(idMeal)}
      >
        <FaTimes
          style={{ color: "rgb(151, 2, 2)", fontSize: 16, cursor: "pointer" }}
        />
      </span>
    </div>
  );
};

export default BookedList;
