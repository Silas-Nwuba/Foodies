import React, { useReducer, useState } from "react";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Menu from "../components/Menu";
import style from "../style/SearchPage.module.css";
import Footer from "../components/Footer";
import SearchRecipePage from "../components/SearchRecipePage";
import Booked from "../components/Booked";
import BookedList from "../components/BookedList";
import Backdrop from "../components/Backdrop";

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
      return { ...state, bookMenu: action.payload };
    default:
      throw new Error("unknown");
  }
};
const SearchPage = ({ bookedItem, setBookedItem }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const { bookMenu } = state;
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
      <SearchRecipePage query={query} />
      <Footer />
    </div>
  );
};

export default SearchPage;
