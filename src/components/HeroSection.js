import React, { useEffect } from "react";
import style from "../style/HeroSection.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className={style.heroSection}>
      <div className={style.overlay}></div>
      <img src="/image/seafood.jpg" alt="background" />

      <div
        className={style.content}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h1>
          Discover Simple Food <span style={{ color: "#ff922b" }}> Recipe</span>
        </h1>
        <p>
          Home of all kinds of delicious food we are available anytime to serve
          our esteem customer.
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default HeroSection;
