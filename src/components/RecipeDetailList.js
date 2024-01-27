import React, { useEffect } from "react";
import style from "../style/RecipePage.module.css";
import { Heart } from "react-bootstrap-icons";
import { FaHeart, FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { useBooked } from "../context/BookedContext";

const RecipeDetailList = ({ recipeDetail }) => {
  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strYoutube,
  } = recipeDetail;

  const { idMeal } = useParams();
  const { bookedItem, setBookedItem, dispatch, itemBooked } = useBooked();

  const handleAddToBookmark = () => {
    const booked = bookedItem.find(
      (booked) => booked.idMeal === recipeDetail.idMeal
    );
    if (!booked) {
      setBookedItem((booked) => [...booked, recipeDetail]);
      toast.success("Recipe successfully booked", {
        toastId: "success1",
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({ type: "itemBooked", payload: true });
    } else if (booked) {
      toast.warning("Recipe already booked", {
        toastId: "warning1",
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({ type: "itemBooked", payload: true });
    } else {
      dispatch({ type: "itemBooked", payload: false });
    }
  };
  useEffect(() => {
    document.title = `Foodies - ${strMeal}`;
    return () => {
      document.title = "Foodies";
    };
  }, [strMeal]);

  useEffect(() => {
    const booked = bookedItem.find((booked) => booked.idMeal === idMeal);
    if (booked) {
      dispatch({ type: "itemBooked", payload: true });
    } else {
      dispatch({ type: "itemBooked", payload: false });
    }
  }, [idMeal, dispatch, bookedItem]);
  return (
    <>
      <div className={style.content}>
        <div className={style.title}>
          <h1>{strMeal}</h1>

          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              style={{ color: "#ff922b", fontSize: "16px", marginTop: 5 }}
            />
          ))}
        </div>
        <div className={style.main}>
          <img src={strMealThumb} alt={strMeal} />
          <div className={style.recipeDetailContent}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ lineHeight: 2 }}>
                <span style={{ display: "flex", gap: 5, alignItem: "center" }}>
                  <h4>Category</h4>
                  <p> - {strCategory}</p>
                </span>

                <span style={{ display: "flex", gap: 5, alignItem: "center" }}>
                  <h4>Area</h4>
                  <p> - {strArea}</p>
                </span>
              </div>

              <div className={style.bookmark} onClick={handleAddToBookmark}>
                {itemBooked ? (
                  <FaHeart
                    style={{
                      color: "white",
                      fontSize: "25px",
                      marginTop: 10,
                    }}
                  />
                ) : (
                  <Heart
                    style={{
                      color: "white",
                      fontSize: "25px",
                      marginTop: 10,
                    }}
                  />
                )}
              </div>
            </div>
            <span className={style.description}>
              <h3>Description</h3>
              <p>{strInstructions}</p>
            </span>
            <div className={style.prescription}>
              <div className={style.ingredient}>
                <h3>Ingredient</h3>
                <ul>
                  <li>{strIngredient1}</li>
                  <li>{strIngredient2}</li>
                  <li>{strIngredient3}</li>
                  <li>{strIngredient4}</li>
                  <li>{strIngredient5}</li>
                  <li>{strIngredient6}</li>
                  <li>{strIngredient7}</li>
                  <li>{strIngredient8}</li>
                </ul>
              </div>
              <div className={style.measurement}>
                <h3>Measurement</h3>
                <ul>
                  <li>{strMeasure1}</li>
                  <li>{strMeasure2}</li>
                  <li>{strMeasure3}</li>
                  <li>{strMeasure4}</li>
                  <li>{strMeasure5}</li>
                  <li>{strMeasure6}</li>
                  <li>{strMeasure7}</li>
                  <li>{strMeasure8}</li>
                </ul>
              </div>
            </div>

            <ReactPlayer
              url={strYoutube}
              width={"100%"}
              height={360}
              controls
              style={{ marginTop: 30, marginBottom: 40 }}
            ></ReactPlayer>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default RecipeDetailList;
