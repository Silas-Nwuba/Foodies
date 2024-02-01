import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FocusLock from "react-focus-lock";
import { BookedContext } from "../context/BookedContext";
import SpinnerFullPage from "../components/SpinnerFullPage";
const HomePage = lazy(() => import("../pages/HomePage"));
const RecipePage = lazy(() => import("../pages/RecipePage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const CategoryPage = lazy(() => import("../pages/CategoryPage"));
const ErrorMessage = lazy(() => import("../components/ErrorMessage"));
const App = () => {
  return (
    <BookedContext>
      <BrowserRouter>
        <FocusLock>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<HomePage />}></Route>
              <Route path="recipe/:idMeal" element={<RecipePage />}>
                <Route
                  path="*"
                  element={<ErrorMessage message="Not Found" />}
                ></Route>
              </Route>
              <Route path="search" element={<SearchPage />}></Route>
              <Route
                path="recipe/:idMeal/search"
                element={<SearchPage />}
              ></Route>
              <Route path="category/:name" element={<CategoryPage />}></Route>
              <Route
                path="*"
                element={<ErrorMessage message="Not Found" />}
              ></Route>
            </Routes>
          </Suspense>
        </FocusLock>
      </BrowserRouter>
    </BookedContext>
  );
};
export default App;
