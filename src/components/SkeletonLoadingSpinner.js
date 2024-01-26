import React from "react";
import style from "../style/Skeleton.module.css";

const SkeletonLoadingSpinner = () => {
  return (
    <div className={`${style.content}`}>
      <div className={`${style.image} ${style.skeleton}`}></div>
      <div className={style.detailItem}>
        <div className={`${style.category} ${style.skeleton}`}></div>
        <div className={`${style.name} ${style.skeleton}`}></div>
        <div className={`${style.rating} ${style.skeleton}`}></div>
      </div>
    </div>
  );
};

export default SkeletonLoadingSpinner;
