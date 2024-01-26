import { useEffect, useState } from "react";

export const useFetchSearch = (searchQuery) => {
  const [searchFood, setSearchFood] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchErrorMessages, setSearchErrorMessages] = useState("");
  console.log(searchQuery);

  useEffect(() => {
    // const controller = new AbortController();
    const fetchFood = async () => {
      setSearchLoading(true);
      setSearchErrorMessages("");
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
          // { signal: controller.signal }
        );
        const data = await response.json();
        if (data.meals === null) throw new Error("not match");
        else {
          setSearchFood(data.meals);
          setSearchErrorMessages("");
        }
      } catch (err) {
        if (err.name !== "AbortError") setSearchErrorMessages(err.message);
      } finally {
        setSearchLoading(false);
      }
    };
    // if (!searchQuery) return;
    fetchFood();
    // return () => {
    //   controller.abort();
    // };
  }, [searchQuery]);
  return { searchFood, searchLoading, searchErrorMessages };
};
