import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import style from "../style/Header.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useBooked } from "../context/BookedContext";
const MobileSearch = () => {
  const navigate = useNavigate();
  const inputEl = useRef(null);
  const location = useLocation();
  const { idMeal, name } = useParams();
  const isRecipePage = location.pathname === `/recipe/${idMeal}`;
  const isHomePage = location.pathname === "/";
  const isSearchPage = location.pathname === `/recipe/${idMeal}/search`;
  const isSearch = location.pathname === `/search`;
  const isCategoryPage = location.pathname === `/category/${name}`;
  const { query, setQuery } = useBooked();

  const handleSearchFood = (e) => {
    e.preventDefault();
    setQuery(query);
  };
  const handleNavigate = () => {
    if (isRecipePage) {
      navigate(`/recipe/${idMeal}/search`);
    }

    if (isHomePage) {
      navigate(`/search`);
    }
    if (isCategoryPage) {
      navigate(`/search`);
    }
  };
  useEffect(() => {
    if (isSearchPage || isSearch) {
      inputEl.current.focus();
    }
  });

  return (
    <form className={style.searchmobile} onSubmit={handleSearchFood}>
      <input
        value={query}
        type="text"
        placeholder="Search.."
        onChange={(e) => setQuery(e.target.value)}
        onClick={handleNavigate}
        ref={inputEl}
      />
      <button>
        <FaSearch style={{ color: "white", fontWeight: 600, fontSize: 16 }} />
      </button>
    </form>
  );
};
export default MobileSearch;
