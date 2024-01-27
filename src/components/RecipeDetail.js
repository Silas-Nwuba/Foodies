import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkeletonLoaderSpinnerRecipe from "./SkeletonLoadingSpinnerRecipe";
import ErrorMessage from "./ErrorMessage";
import RecipeDetailList from "./RecipeDetailList";
const RecipeDetail = () => {
  const { idMeal } = useParams();
  const [recipeDetail, setRecipeDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const data = await res.json();
        if (data.meals === null) {
          setErrorMessage("Not Found");
          return;
        }
        setRecipeDetail(data.meals);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipeDetail();
  }, [idMeal]);

  return (
    <>
      {isLoading && <SkeletonLoaderSpinnerRecipe />}
      {!isLoading &&
        !errorMessage &&
        recipeDetail.map((recipeDetail) => (
          <RecipeDetailList
            recipeDetail={recipeDetail}
            key={recipeDetail.idMeal}
          />
        ))}
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default RecipeDetail;
