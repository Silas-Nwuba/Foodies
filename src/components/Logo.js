import React from "react";
import style from "../style/Header.module.css";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Logo = () => {
  const { idMeal } = useParams();
  const location = useLocation();
  const isRecipePage = location.pathname === `/recipe/${idMeal}`;
  const isSearchPage = location.pathname === `/recipe/${idMeal}/search`;
  const isSearchPageDefault = location.pathname === `/search`;
  const isHomePage = location.pathname === "/";
  const isMobileView = window.innerWidth <= 768;
  const navigate = useNavigate();
  if (
    (!isRecipePage && !isMobileView) ||
    (!isSearchPage && !isMobileView) ||
    (!isSearchPageDefault && !isMobileView)
  ) {
    return (
      <Link to="/" className={style.logo}>
        <img src="/image/logo.jpeg" alt="logo" />
        <h1>Foodies</h1>
      </Link>
    );
  }

  if (isHomePage) {
    return (
      <Link to="/" className={style.logo}>
        <img src="/image/logo.jpeg" alt="logo" />
        <h1>Foodies</h1>
      </Link>
    );
  }

  return (
    <div className={style.logo} onClick={() => navigate(-1)}>
      {isRecipePage && isMobileView && (
        <div className={style.arrowLeft}>
          <ArrowLeft
            style={{ fontSize: 24, fontWeight: "bold", color: "black" }}
          />
        </div>
      )}

      {isSearchPage && isMobileView && (
        <div className={style.arrowLeft}>
          <ArrowLeft
            style={{ fontSize: 24, fontWeight: "bold", color: "black" }}
          />
        </div>
      )}
      {isSearchPageDefault && isMobileView && (
        <div className={style.arrowLeft}>
          <ArrowLeft
            style={{ fontSize: 24, fontWeight: "bold", color: "black" }}
          />
        </div>
      )}

      {isSearchPageDefault && !isMobileView && (
        <>
          <img src="/image/logo.jpeg" alt="logo" />
          <h1>Foodies</h1>
        </>
      )}
      {isRecipePage && !isMobileView && (
        <>
          <img src="/image/logo.jpeg" alt="logo" />
          <h1>Foodies</h1>
        </>
      )}
      {isSearchPage && !isMobileView && (
        <>
          <img src="/image/logo.jpeg" alt="logo" />
          <h1>Foodies</h1>
        </>
      )}
    </div>
  );
};

export default Logo;
