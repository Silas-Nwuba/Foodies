import { useEffect, useState } from "react";

export const useLocalStorage = (key, initalState) => {
  const [bookedItem, setBookedItem] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(key));
    return storedData ? storedData : initalState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(bookedItem));
  }, [key, bookedItem]);

  return { bookedItem, setBookedItem };
};
