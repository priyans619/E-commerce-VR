import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products.json";

const ProductGrid = ({ selectedCategory, selectedSubCategory }) => {
  // Filter products based on selected category and subcategory
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory || selectedCategory === "All" || product.category === selectedCategory;

    const subCategoryMatch =
      !selectedSubCategory || selectedCategory === "All" || product.subCategory === selectedSubCategory;

    return categoryMatch && subCategoryMatch;
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center text-gray-500">No products found</p>
      )}
    </div>
  );
};

export default ProductGrid;
