import React, { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import Header from "./Header";
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
import FoodMenu from "./FoodMenu";
import HeroSection from "./HeroSection";
import { useFetch } from "../customHook/useFetch";
import { useLocalStorage } from "../customHook/useLocalStorage";
import { useKey } from "../customHook/useKey";

const App = () => {
  const local_key = "bookedFood";
  const [isFoodModalOpen, setFoodModalOpen] = useState(false);
  const [isOpenBooked, setOpenBooked] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [query, setQuery] = useState("");

  const [isBookedDetail, setBookedDetail] = useState(false);
  const handleOpenFoodModal = (id) => {
    const selectedFoodObj = food.find((item) => item.idMeal === id);
    setSelectedFood(selectedFoodObj);
    setFoodModalOpen((isOpen) => !isOpen);
  };

  const handleCloseFoodModal = () => {
    setFoodModalOpen((isOpen) => !isOpen);
    setBookedDetail(false);
  };
  const handleAddBookMark = (newBookedItem) => {
    const bookedItem = bookMark.find(
      (booked) => booked.idMeal === newBookedItem.idMeal
    );
    if (!bookedItem) {
      setBookMark([...bookMark, newBookedItem]);
      toast.success("Food successfully booked", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "success1",
      });
    } else {
      toast.warning("Food is already booked", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "warning1",
      });
    }
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

  const handleDeleteAll = () => {
    setBookMark([]);
  };

  const { food, isLoading, errorMessage } = useFetch(query);
  const { bookMark, setBookMark } = useLocalStorage(local_key, []);
  useKey("Escape", handleCloseFoodModal);

  return (
    <div className={style.container}>
      <Header query={query} setQuery={setQuery}>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Menu
          onClickBookMark={handleOpenBooked}
          itemCount={bookMark !== null ? bookMark.length : 0}
        />
      </Header>

      <HeroSection />
      {isOpenBooked && (
        <Booked
          item={bookMark !== null ? bookMark.length : 0}
          handleCloseBooked={handleCloseBooked}
          onDeleteAll={handleDeleteAll}
        >
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
        {isLoading && (
          <>
            <FoodMenu />
            <div className={skeletonStyle.container}>
              <SkeletonLoadingSpinner />
              <SkeletonLoadingSpinner />
              <SkeletonLoadingSpinner />
              <SkeletonLoadingSpinner />
            </div>
          </>
        )}
        {!isLoading && !errorMessage && (
          <>
            <FoodMenu />
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
          </>
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
