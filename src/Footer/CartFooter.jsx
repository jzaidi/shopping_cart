import React from "react";
import "./CartFooter.css";

const CartFooter = ({copyright, year}) => {
  
  return (
    <footer className="footer">
      <div className="container">
        <a href="#">{copyright} {year}</a>
      </div>
    </footer>
  );
};

export default CartFooter;
