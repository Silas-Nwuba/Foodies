import React from "react";
import style from "../style/Chef.module.css";

export const Chef = () => {
  return (
    <>
      <div className={style.container}>
        <h1> Our Top Chef</h1>
        <div className={style.content}>
          <div className={style.item}>
            <img src="/image/female-chef.jpg.370x370_q85.jpg" alt="chef" />
            <h2>Chef Sophia</h2>
          </div>
          <div className={style.item}>
            <img
              src="/image/360_F_635201516_G2TFpFPoFA6utXYNgFlgPJGwU24mj6CJ.jpg"
              alt="chef"
            />
            <h2>Chef Jane</h2>
          </div>
          <div className={style.item}>
            <img src="/image/male-chef.jpg" alt="chef" />
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
