import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import style from "../style/header.module.css";
import { useKey } from "../customHook/useKey";
const MobileSearch = ({ query, setQuery }) => {
  const inputEl = useRef(null);
  const handleSearchFood = (e) => {
    e.preventDefault();
    setQuery(query);
  };
  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <form className={style.searchmobile} onSubmit={handleSearchFood}>
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
export default MobileSearch;
