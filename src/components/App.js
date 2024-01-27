import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RecipePage from "../pages/RecipePage";
import "../index.css";
import ErrorMessage from "./ErrorMessage";
import SearchPage from "../pages/SearchPage";
import { BookedContext } from "../context/BookedContext";
const App = () => {
  return (
    <BookedContext>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="recipe/:idMeal" element={<RecipePage />}>
            <Route
              path="*"
              element={<ErrorMessage message="Not Found" />}
            ></Route>
          </Route>
          <Route path="search" element={<SearchPage />}></Route>

          <Route path="/recipe/:idMeal/search" element={<SearchPage />}></Route>
          <Route
            path="*"
            element={<ErrorMessage message="Not Found" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </BookedContext>
  );
};
export default App;
