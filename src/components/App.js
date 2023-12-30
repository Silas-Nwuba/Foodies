import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import Header from "./Header";
import About from "./About";
import Food from "./Food";
import Footer from "./Footer";
import Backdrop from "./Backdrop";
import { ToastContainer, toast } from "react-toastify";
import FoodList from "./FoodList";
import Main from "./Main";
import style from "../style/app.module.css";
import ErrorMessage from "./ErrorMessage";
import SkeletonLoadingSpinner from "./SkeletonLoadingSpinner";
import skeletonStyle from "../style/skeleton.module.css";
import Booked from "./Booked";
import BookedList from "./BookedList";
import FoodModal from "./FoodModal";

const App = () => {
  const [food, setFood] = useState([]);
  const [isFoodModalOpen, setFoodModalOpen] = useState(false);
  const [isOpenBooked, setOpenBooked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [query, setQuery] = useState("");
  const [bookMark, setBookMark] = useState([]);
  const [isBookedDetail, setBookedDetail] = useState(false);
  const bookedDiv = useRef(null);
  useEffect(() => {
    const fetchFood = async () => {
      setLoading(true);
      setErrorMessage("");
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await response.json();
        if (data.meals === null) throw new Error("not match");
        else setFood(data.meals);
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, [query]);

  const handleOpenFoodModal = (id) => {
    const selectedFoodObj = food.find((item) => item.idMeal === id);
    console.log(selectedFoodObj);
    setSelectedFood(selectedFoodObj);
    setFoodModalOpen((isOpen) => !isOpen);
  };

  const handleCloseFoodModal = () => {
    setFoodModalOpen((isOpen) => !isOpen);
    setBookedDetail(false);
  };
  const handleAddBookMark = (newBookedItem) => {
    setBookMark((booked) => [...booked, newBookedItem]);
    toast.success("Food successfully booked", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "success1",
    });
  };

  const handleOpenBooked = () => {
    setOpenBooked(true);
  };
  const handleCloseBooked = () => {
    setOpenBooked(false);
  };
  const handleDeleteBookedItem = (id) => {
    const bookedObj = bookMark.filter((item) => item.idMeal !== id);
    setBookMark(bookedObj);
  };
  const handleShowBookedDetail = (id) => {
    setOpenBooked(false);
    const detail = bookMark.find((item) => item.idMeal === id);
    setSelectedFood(detail);
    setFoodModalOpen(true);
    setBookedDetail(true);
  };

  return (
    <div className={style.container}>
      <Header>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Menu onClickBookMark={handleOpenBooked} bookedDiv={bookedDiv} />
      </Header>
      {isOpenBooked && (
        <Booked item={bookMark.length} handleCloseBooked={handleCloseBooked}>
          {bookMark.map((item) => (
            <BookedList
              key={item.idMeal}
              item={item}
              onDelete={handleDeleteBookedItem}
              onBookedDetail={handleShowBookedDetail}
            />
          ))}
        </Booked>
      )}
      {isOpenBooked && <Backdrop closeModal={handleCloseBooked} />}

      <Main>
        <About />

        {isLoading && (
          <div className={skeletonStyle.container}>
            <SkeletonLoadingSpinner />
            <SkeletonLoadingSpinner />
            <SkeletonLoadingSpinner />
            <SkeletonLoadingSpinner />
          </div>
        )}
        {!isLoading && !errorMessage && (
          <Food>
            {food.map((item, id) => (
              <FoodList
                item={item}
                id={id}
                key={item.idMeal}
                showFoodModal={handleOpenFoodModal}
                closeFoodModal={handleCloseFoodModal}
              />
            ))}
          </Food>
        )}
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </Main>
      <Footer />
      {isFoodModalOpen && (
        <FoodModal
          closeFoodModal={handleCloseFoodModal}
          selectedFood={selectedFood}
          onBookMark={handleAddBookMark}
          errorMessage={errorMessage}
          onClickBooked={isBookedDetail}
        />
      )}
      {isFoodModalOpen && (
        <Backdrop
          closeModal={handleCloseFoodModal}
          errorMessage={errorMessage}
        />
      )}
      <ToastContainer style={{ zIndex: 20000 }} />
    </div>
  );
};
export default App;
