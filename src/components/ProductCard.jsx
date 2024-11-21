import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600">Creator: {product.creator}</p>
        <p className="text-yellow-500">Rating: {product.rating} ⭐</p>
        <p className="text-green-600 font-bold">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
