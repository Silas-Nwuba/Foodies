import React from "react";
import style from "../style/Chef.module.css";

export const Chef = () => {
  return (
    <>
      <div className={style.container}>
        <h1> Our Top Chef</h1>
        <div className={style.content}>
          <div className={style.item}>
            <img src="/image/images (27).jpeg" alt="chef" />
            <h2>Chef Sophia</h2>
          </div>
          <div className={style.item}>
            <img src="/image/images (28).jpeg" alt="chef" />
            <h2>Chef Jane</h2>
          </div>
          <div className={style.item}>
            <img src="/image/images (26).jpeg" alt="chef" />
            <h2>Chef Smith</h2>
          </div>
          <div className={style.item}>
            <img src="/image/chef.jpg" alt="chef" />
            <h2>Chef Sonia</h2>
          </div>
        </div>
      </div>
    </>
  );
};
