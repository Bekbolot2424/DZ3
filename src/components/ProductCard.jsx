import React from "react";

const ProductCard = ({ product, images }) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const getId = () => {
    console.log(product.id, product.name);
  };

  return (
    <div className="card">
      <img src={randomImage} alt={product.name} />
      <h3>{product.name}</h3>
      <button onClick={getId}>Buy now</button>
    </div>
  );
};

export default ProductCard;
