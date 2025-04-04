import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

function ProductCard({ product }) {
  // Ensure product exists and destructure safely
  if (!product) return <p>Product data is missing</p>;

  const { image, title, id, rating, price } = product;

  return (
    <div>
      <a href={`/product/${id}`}>
        <img src={image} alt={title} />
      </a>
      <div>
        <h3>{title}</h3>
        <div>
          {/* Rating */}
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          {/* Rating count */}
          <small>{rating?.count || 0} reviews</small>
        </div>
        <div>
          {/* Price */}
          <CurrencyFormat amount={price} />
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
