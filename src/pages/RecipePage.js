import Header from "../components/Header";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Search from "../components/Search";
import style from "../style/RecipePage.module.css";
import Footer from "../components/Footer";
import RecipeDetail from "../components/RecipeDetail";
import Booked from "../components/Booked";
import BookedList from "../components/BookedList";
import Backdrop from "../components/Backdrop";
import { useBooked } from "../context/BookedContext";
import { useEffect } from "react";

const RecipePage = () => {
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
      <RecipeDetail />
      <Footer />
    </div>
  );
};

export default RecipePage;
