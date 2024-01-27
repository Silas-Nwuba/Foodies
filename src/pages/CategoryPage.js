import React, { useEffect } from "react";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import style from "../style/CategoryPage.module.css";
import Category from "../components/Category";
import { useBooked } from "../context/BookedContext";
import Booked from "../components/Booked";
import BookedList from "../components/BookedList";
import Backdrop from "../components/Backdrop";
const CategoryPage = () => {
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
      <Category />
      <Footer />
    </div>
  );
};

export default CategoryPage;
