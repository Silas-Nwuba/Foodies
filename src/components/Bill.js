import React from "react";
import style from "../style/bill.module.css";
const Bill = ({ item }) => {
  const price = item.map((item) => item.quantity * item.price);
  const total = price.reduce((acc, sum) => acc + sum, 0);

  return (
    <div className={style.total}>
      <h3 style={{ fontSize: 16 }}>Total:</h3>
      <h3 style={{ fontSize: 18 }}>₦{total.toLocaleString()}</h3>
    </div>
  );
};

export default Bill;
