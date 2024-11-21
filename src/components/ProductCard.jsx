import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-black ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover object-top rounded-md"
      />
      <div className="mt-4">
        <h3 className="font-bold text-lg text-white">{product.name}</h3>
        <p className="text-white">Creator: {product.creator}</p>
        <p className="text-yellow-500">Rating ⭐ : {product.ratings} </p>
        <p className="text-white font-bold">Price: {product.price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
