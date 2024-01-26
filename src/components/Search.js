import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import style from "../style/Header.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Search = ({ query, setQuery }) => {
  const navigate = useNavigate();
  const inputEl = useRef(null);
  const location = useLocation();
  const { idMeal } = useParams();
  const isRecipePage = location.pathname === `/recipe/${idMeal}`;
  const isSearchPage = location.pathname === `/recipe/${idMeal}/search`;
  const isSearch = location.pathname === `/search`;
  const isHomePage = location.pathname === "/";

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
  };
  useEffect(() => {
    if (isSearchPage || isSearch) {
      inputEl.current.focus();
    }
  });
  return (
    <form className={style.search} onSubmit={handleSearchFood}>
      <input
        value={query}
        type="text"
        placeholder="Search for all kinds of food.."
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
export default Search;
