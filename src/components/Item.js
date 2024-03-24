import React, {useState, useTransition} from "react";

function Item({ name, category }) {
  const [inCart, setInCart]=useState(false)
  const cartSet = inCart ? "in-cart" : ""
  const buttonName = inCart ? "Remove From Cart" : "Add to Cart"

  function handleItem(){
    setInCart((inCart)=>!inCart)
  }
  return (
    <li className={cartSet}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItem} className="add">{buttonName}</button>
    </li>
  );
}

export default Item;
