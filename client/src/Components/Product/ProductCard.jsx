import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from './Product.module.css'

function ProductCard({ product }) {
  // Ensure product exists and destructure safely
  if (!product) return <p>Product data is missing</p>;

  const { image, title, id, rating, price } = product;

  return (
    <div className={`${classes.card_container}`}>
      <a href={`/product/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* Rating */}
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          {/* Rating count */}
          <small>{rating?.count || 0} reviews</small>
        </div>
        <div>
          {/* Price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
