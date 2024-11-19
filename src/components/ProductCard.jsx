import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const { image, category, title, price } = product;

  const handleAddToCart = () => {
    alert(`${title} added to cart!`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <p className="product-category">{category}</p>
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
