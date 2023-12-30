import React from "react";
import { FaSearch } from "react-icons/fa";
import style from "../style/header.module.css";
const Search = ({ query, setQuery }) => {
  const handleSearchFood = (e) => {
    e.preventDefault();
    setQuery(query);
  };
  return (
    <form className={style.search} onSubmit={handleSearchFood}>
      <input
        type="text"
        placeholder="Search for all kinds of food.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <FaSearch style={{ color: "white", fontWeight: 600, fontSize: 16 }} />
      </button>
    </form>
  );
};
export default Search;
