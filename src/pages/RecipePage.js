import React, { useReducer } from "react";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Search from "../components/Search";
import style from "../style/RecipePage.module.css";
import Footer from "../components/Footer";
import "../index.css";
import RecipeDetail from "../components/RecipeDetail";
import Booked from "../components/Booked";
import BookedList from "../components/BookedList";
import Backdrop from "../components/Backdrop";
import { useState } from "react";

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
const RecipePage = ({ bookedItem, setBookedItem }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const { bookMenu, itemBooked } = state;
  const [query, setQuery] = useState("");
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
    <div className={style.container}>
      <Header query={query} setQuery={setQuery}>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Menu count={bookedItem} onShowSideMenu={handleShowMenu} />
      </Header>
      {bookMenu && (
        <Booked
          item={bookedItem}
          onHideSideMenu={handleHideShowMenu}
          onDeleteAll={handleDeleteAllBookedItem}
        >
          {bookedItem.map((bookedItem) => (
            <BookedList
              bookedItem={bookedItem}
              onDelete={handleDeleteBook}
              key={bookedItem.idMeal}
              dispatch={dispatch}
            />
          ))}
        </Booked>
      )}
      {bookMenu && <Backdrop onHideSideMenu={handleHideShowMenu} />}
      <RecipeDetail
        dispatch={dispatch}
        itemBooked={itemBooked}
        bookedItem={bookedItem}
        setBookedItem={setBookedItem}
      />
      <Footer />
    </div>
  );
};

export default RecipePage;
