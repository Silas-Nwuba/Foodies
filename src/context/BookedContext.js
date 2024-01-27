import React, { createContext, useContext, useReducer, useState } from "react";
import { useLocalStorage } from "../customHook/useLocalStorage";

const intialState = {
  bookMenu: false,
  itemBooked: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "openBookMenu":
      return { ...state, bookMenu: action.payload };
    case "closeBookMenu":
      return { ...state, bookMenu: action.payload };
    case "itemBooked":
      return { ...state, itemBooked: action.payload };
    case "deleteBookedItem":
      return { ...state, bookMenu: action.payload, itemBooked: false };
    case "deleteAllItem":
      return { ...state, bookMenu: action.payload, itemBooked: false };
    default:
      throw new Error("unknown");
  }
};
const BookedItemContext = createContext();
const LOCALSTORAGE_KEY = "recipe";
const BookedContext = ({ children }) => {
  const { bookedItem, setBookedItem } = useLocalStorage(LOCALSTORAGE_KEY, []);
  const [query, setQuery] = useState("");
  const [state, dispatch] = useReducer(reducer, intialState);
  const { bookMenu, itemBooked } = state;

  const handleShowMenu = () => {
    dispatch({ type: "openBookMenu", payload: true });
  };
  const handleHideShowMenu = () => {
    dispatch({ type: "closeBookMenu", payload: false });
  };

  const handleDeleteBook = (id) => {
    const booked = bookedItem.filter((item) => item.idMeal !== id);
    setBookedItem(booked);
    dispatch({ type: "deleteBookedItem", payload: true });
  };
  const handleDeleteAllBookedItem = () => {
    setBookedItem([]);
    dispatch({ type: "deleteAllItem" });
  };

  return (
    <BookedItemContext.Provider
      value={{
        bookedItem,
        setBookedItem,
        query,
        setQuery,
        bookMenu,
        onShowMenu: handleShowMenu,
        onCloseMenu: handleHideShowMenu,
        onDeleteBookItem: handleDeleteBook,
        onClearAllBookItem: handleDeleteAllBookedItem,
        dispatch,
        itemBooked,
      }}
    >
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
