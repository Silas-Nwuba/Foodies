import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookedContext } from "../context/BookedContext";
import HomePage from "../pages/HomePage";
import RecipePage from "../pages/RecipePage";
import SearchPage from "../pages/SearchPage";
import CategoryPage from "../pages/CategoryPage";
import ErrorMessage from "../components/ErrorMessage";
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
          <Route path="recipe/:idMeal/search" element={<SearchPage />}></Route>
          <Route path="category/:name" element={<CategoryPage />}></Route>
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
