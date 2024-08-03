import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const inCart = isInCart ? "in-cart" : "";

  function handleCartClick() {
    setIsInCart((inCart) => !inCart)

  }



  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>{!isInCart ? "Add to Cart" : "Remove From Cart" }</button>
    </li>
  );
}

export default Item;


