import React from "react";
import { Star } from "react-bootstrap-icons";
import { FaStar } from "react-icons/fa";
const StarRating = ({ onRate, full, onHoverIn, onHoverOut }) => {
  return (
    <span onClick={onRate} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {full ? (
        <FaStar
          style={{
            fontSize: 20,
            margin: "15px 0px",
            padding: 2,
            gap: 10,
            cursor: "pointer",
            color: "rgb(151, 2, 2)",
          }}
        />
      ) : (
        <Star
          style={{
            fontSize: 20,
            margin: "15px 0px",
            padding: 2,
            gap: 10,
            cursor: "pointer",
            color: "rgb(151, 2, 2)",
          }}
        />
      )}
    </span>
  );
};
export default StarRating;
