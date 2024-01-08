import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import style from "../style/searchResult.module.css";
import SkeletonLoadingSpinner from "./SkeletonLoadingSpinner";
import skeletonStyle from "../style/skeleton.module.css";
const SearchResult = ({ searchQuery, children }) => {
  return (
    <>
      {!searchQuery && (
        <div className={style.searchResult}>
          <div className={style.header}>
            <h2>Search Result - Chicken</h2>
          </div>
          {children}
        </div>
      )}
    </>
  );
};
export default SearchResult;
