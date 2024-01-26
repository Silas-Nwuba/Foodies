import React from "react";
import { useLocalStorage } from "../customHook/useLocalStorage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RecipePage from "../pages/RecipePage";
import "../index.css";
import ErrorMessage from "./ErrorMessage";
import SearchPage from "../pages/SearchPage";
const App = () => {
  const LOCALSTORAGE_KEY = "recipe";
  const { bookedItem, setBookedItem } = useLocalStorage(LOCALSTORAGE_KEY, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage bookedItem={bookedItem} />}></Route>
        <Route
          path="recipe/:idMeal"
          element={
            <RecipePage bookedItem={bookedItem} setBookedItem={setBookedItem} />
          }
        >
          <Route
            path="*"
            element={<ErrorMessage message="Not Found" />}
          ></Route>
        </Route>
        <Route
          path="search"
          element={
            <SearchPage bookedItem={bookedItem} setBookedItem={setBookedItem} />
          }
        ></Route>

        <Route
          path="/recipe/:idMeal/search"
          element={
            <SearchPage bookedItem={bookedItem} setBookedItem={setBookedItem} />
          }
        ></Route>
        <Route path="*" element={<ErrorMessage message="Not Found" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
