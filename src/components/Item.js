import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, cartState] = useState(false);

  function handleCartState() {
    cartState((inCart) => inCart = !inCart);
  }

  const buttonText = inCart ? "Remove From Cart" : "Add to Cart"
  const cartStatus = inCart ? "in-cart" : "";

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartState}>{buttonText}</button>
    </li>
  );
}

export default Item;
