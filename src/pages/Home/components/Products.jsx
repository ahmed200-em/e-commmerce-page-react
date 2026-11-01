import React from "react";
import "./Products.css";

function ProductCard(props) {
  return (
    <div className="product-card">
      <span className={props.inStock ? "badge badge-instock" : "badge badge-soldout"}>
        {props.inStock ? "In Stock" : "Out of Stock"}
      </span>
      <img
        src={props.image}
        alt={props.name}
        className="product-img"
      />
      <div className="product-info">
        <span className="product-cat">{props.category}</span>
        <h3 className="product-name">{props.name}</h3>
        <div className="product-price-row">
          <span className="price-value">{props.price}</span>
          <span className="price-currency">MAD</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;