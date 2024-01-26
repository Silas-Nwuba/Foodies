import { useEffect, useState } from "react";

export const useFetch = (query) => {
  const [searchRecipe, setSearchRecipe] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchFood = async () => {
      setErrorMessage("");
      if (query === "") return;
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
          { signal: controller.signal }
        );
        setLoading(true);
        const data = await response.json();
        if (data.meals === null) setErrorMessage("not match");
        else {
          setSearchRecipe(data.meals);
          setErrorMessage("");
        }
      } catch (err) {
        if (err.name !== "AbortError") setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFood();
    return () => {
      controller.abort();
    };
  }, [query]);
  return {
    searchRecipe,
    isLoading,
    errorMessage,
  };
};
