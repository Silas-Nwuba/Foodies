import React, { useState } from "react";
import style from "../style/SearchPage.module.css";
import { useFetch } from "../customHook/useFetch";
import SearchRecipePageList from "./SearchRecipePageList";
import ErrorMessage from "../components/ErrorMessage";
import SkeletonLoadingSpinnerRecipe from "../components/SkeletonLoadingSpinnerRecipe";

import ReactPaginate from "react-paginate";
const SearchRecipePage = ({ query }) => {
  const { searchRecipe, isLoading, errorMessage } = useFetch(query);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3; // Adjust based on your needs
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPage = Math.ceil(searchRecipe.length / 5);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className={style.container}>
      {isLoading && <SkeletonLoadingSpinnerRecipe />}
      {!isLoading &&
        !errorMessage &&
        searchRecipe.length !== 0 &&
        query !== "" && (
          <div className={style.searchRecipeContent}>
            <h1>Search Result</h1>
            <p className={style.item}>
              {searchRecipe.length} result for{" "}
              {searchRecipe[0].strCategory.toLowerCase()} {""} found
            </p>
            <div className={style.searchRecipe}>
              {searchRecipe.slice(startIndex, endIndex).map((searchRecipe) => (
                <SearchRecipePageList
                  searchRecipe={searchRecipe}
                  key={searchRecipe.idMeal}
                />
              ))}
            </div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={totalPage}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        )}
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};
export default SearchRecipePage;
