import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../customHook/useLocalStorage";

const BookedItemContext = createContext();
const BookedContext = ({ children }) => {
  const LOCALSTORAGE_KEY = "recipe";
  const { bookedItem, setBookedItem } = useLocalStorage(LOCALSTORAGE_KEY, []);

  return (
    <BookedItemContext.Provider value={{ bookedItem, setBookedItem }}>
      {children}
    </BookedItemContext.Provider>
  );
};
const useBooked = () => {
  const context = useContext(BookedItemContext);
  if (context === undefined)
    throw new Error("Error accessing context outside the provider");
  return context;
};

export { BookedContext, useBooked };
