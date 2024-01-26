import React, { useEffect, useReducer, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Search from "../components/Search";
import HeroSection from "../components/HeroSection";
import FoodCategory from "../components/FoodCategory";
import style from "../style/HomePage.module.css";
import LatestRecipe from "../components/LatestRecipe";
import FeaturedRecipe from "../components/FeatureRecipe";
import LastestRecipeList from "../components/LastestRecipeList";
import SkeletonLoadingSpinner from "../components/SkeletonLoadingSpinner";
import Booked from "../components/Booked";
import BookedList from "../components/BookedList";
import Backdrop from "../components/Backdrop";
import NewsLetter from "../components/NewsLetter";
import { Chef } from "../components/Chef";
import ErrorMessage from "../components/ErrorMessage";

const HomePage = ({ bookedItem, setBookedItem }) => {
  const [recentRecipe, setRecentRecipe] = useState([]);
  const [featuredRecipe, setFeatureRecipe] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      case "deleteAllItem":
        return { ...state, bookMenu: action.payload, itemBooked: false };
      default:
        throw new Error("unknown");
    }
  };
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
    dispatch({ type: "deleteAllItem" });
  };

  useEffect(() => {
    const fetchLatestRecipe = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
        );
        const data = await response.json();
        if (data.meals === null) throw new Error("not match");
        else {
          setRecentRecipe(data.meals);
          setErrorMessage("");
        }
      } catch (err) {
        if (err.name !== "AbortError") setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestRecipe();
  }, []);

  useEffect(() => {
    const fetchFeatureRecipe = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=cake`
        );
        const data = await response.json();
        if (data.meals === null) throw new Error("not match");
        else {
          setFeatureRecipe(data.meals);
          setErrorMessage("");
        }
      } catch (err) {
        if (err.name !== "AbortError") setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatureRecipe();
  }, []);

  return (
    <div className={style.container}>
      {errorMessage ? (
        <ErrorMessage message="not found" />
      ) : (
        <>
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
          <HeroSection />
          <FoodCategory />
          <LatestRecipe>
            {isLoading && (
              <>
                <SkeletonLoadingSpinner />
                <SkeletonLoadingSpinner />
                <SkeletonLoadingSpinner />
              </>
            )}
            {recentRecipe.slice(6, 9).map((item, id) => (
              <LastestRecipeList item={item} id={id} key={item.idMeal} />
            ))}
          </LatestRecipe>
          <FeaturedRecipe>
            {isLoading && (
              <>
                <SkeletonLoadingSpinner />
                <SkeletonLoadingSpinner />
                <SkeletonLoadingSpinner />
              </>
            )}
            {featuredRecipe.slice(0, 6).map((item, id) => (
              <LastestRecipeList item={item} id={id} key={item.idMeal} />
            ))}
          </FeaturedRecipe>
          <NewsLetter />
          <Chef />
        </>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
