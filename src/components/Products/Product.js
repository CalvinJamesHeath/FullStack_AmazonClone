import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider/StateProvider";

function Product({ id, title, img, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  const cartButtons = document.querySelectorAll(".cart-button");

  cartButtons.forEach((button) => {
    button.addEventListener("click", cartClick);
  });

  function cartClick() {
    let button = this;
    button.classList.add("clicked");
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$ </small>
          <strong className="price">{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="star">⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      {/* <button onClick={addToBasket}>Add to Basket</button> */}

      <button className="cart-button" onClick={addToBasket}>
        <span className="add-to-cart">Add to cart</span>
        <span className="added">Added</span>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-box"></i>
      </button>
    </div>
  );
}

export default Product;
