import React, { useEffect, useState } from "react";
import style from "../style/CategoryPage.module.css";
import CategoryList from "./CategoryList";
import { useParams } from "react-router-dom";
import SkeletonLoadingSpinnerRecipe from "../components/SkeletonLoadingSpinnerRecipe";
import ErrorMessage from "./ErrorMessage";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { name } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        );
        const data = await res.json();
        setCategory(data.meals);
        setError("");
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [name]);

  return (
    <div className={style.category}>
      {isLoading && <SkeletonLoadingSpinnerRecipe />}
      {!isLoading && !error && (
        <>
          <h1> Recipe Category</h1>
          <p>{name}</p>
          <div className={style.content}>
            {category.map((category) => (
              <CategoryList category={category} key={category.idMeal} />
            ))}
          </div>
        </>
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default Category;
