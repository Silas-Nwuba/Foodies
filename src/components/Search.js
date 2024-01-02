import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import style from "../style/header.module.css";
const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);
  const handleSearchFood = (e) => {
    e.preventDefault();
    setQuery(query);
  };

  useEffect(() => {
    function focusSearch(e) {
      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keypress", focusSearch);
    return () => {
      document.removeEventListener("keypress", focusSearch);
    };
  });
  return (
    <form className={style.search} onSubmit={handleSearchFood}>
      <input
        type="text"
        placeholder="Search for all kinds of food.."
        value={query}
        ref={inputEl}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <FaSearch style={{ color: "white", fontWeight: 600, fontSize: 16 }} />
      </button>
    </form>
  );
};
export default Search;
