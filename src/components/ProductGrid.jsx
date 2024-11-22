import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products.json";

const ProductGrid = ({ selectedCategory, selectedSubCategory, searchKeyword }) => {

  // Filtering  products by selected category, subcategory, and search keyword
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory || selectedCategory === "All" || product.category === selectedCategory;

    const subCategoryMatch =
      !selectedSubCategory || //only for subcategory
      selectedSubCategory === "All" || 
      selectedSubCategory === "All in Avatars" ||
      selectedSubCategory === "All in Fashion" ||
      product.subCategory === selectedSubCategory;

    const searchMatch =
      !searchKeyword ||
      product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      product.subCategory.toLowerCase().includes(searchKeyword.toLowerCase());

    return categoryMatch && subCategoryMatch && searchMatch;
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-black min-h-screen">
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
