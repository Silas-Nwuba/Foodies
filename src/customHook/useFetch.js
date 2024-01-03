import { useEffect, useState } from "react";

export const useFetch = (query) => {
  const [food, setFood] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const fetchFood = async () => {
      setLoading(true);
      setErrorMessage("");
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          setLoading(false);
        }
        const data = await response.json();
        if (data.meals === null) throw new Error("not match");
        else {
          setFood(data.meals);
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
  return { food, isLoading, errorMessage };
};
