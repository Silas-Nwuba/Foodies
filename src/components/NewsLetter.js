import React, { useEffect, useRef, useState } from "react";
import style from "../style/NewsLetter.module.css";
import { ToastContainer, toast } from "react-toastify";

const NewsLetter = () => {
  const [newsLetter, setNewsLetter] = useState("");
  const formInput = useRef(null);
  const handleValidation = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (newsLetter === "") {
      toast.error("Email address is required", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "Error",
      });
    } else if (!emailRegex.test(newsLetter)) {
      toast.error("Email address is invalid", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "Error",
      });
    } else {
      toast.success("Subscribed successfully", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "Error",
      });
      setNewsLetter("");
    }
  };
  useEffect(() => {
    formInput.current.focus();
    formInput.current.setAttribute("novalidate", "");
  }, []);
  return (
    <div className={style.container}>
      <div className={style.newsLetter}>
        <h1> Daily Cooking tips and recipes to your inbox! </h1>
        <span className={style.content}>
          <form ref={formInput} onSubmit={handleValidation}>
            <input
              value={newsLetter}
              type="text"
              placeholder="Email address"
              required
              onChange={(e) => setNewsLetter(e.target.value)}
            />
            <button>Join</button>
          </form>
        </span>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewsLetter;
