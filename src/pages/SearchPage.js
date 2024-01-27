import React, { useEffect } from "react";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Menu from "../components/Menu";
import style from "../style/SearchPage.module.css";
import SearchRecipePage from "../components/SearchRecipePage";
import Booked from "../components/Booked";
import BookedList from "../components/BookedList";
import Backdrop from "../components/Backdrop";
import { useBooked } from "../context/BookedContext";

const SearchPage = () => {
  const { bookMenu, setQuery } = useBooked();

  useEffect(() => {
    setQuery("");
    window.scrollTo(0, 0);
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", handleScroll);

    return () => {
      window.removeEventListener("popstate", handleScroll);
    };
  }, [setQuery]);
  return (
    <div className={style.container}>
      <Header>
        <Logo />
        <Search />
        <Menu />
      </Header>
      {bookMenu && (
        <Booked>
          <BookedList />
        </Booked>
      )}
      {bookMenu && <Backdrop />}
      <SearchRecipePage />
    </div>
  );
};

export default SearchPage;
