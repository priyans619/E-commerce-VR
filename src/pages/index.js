import { useState } from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  return (
    <div>
      {/* Pass state setters to Header */}
      <Header
        onCategorySelect={setSelectedCategory}
        onSubCategorySelect={setSelectedSubCategory}
      />

      {/* Pass selected category and subcategory to ProductGrid */}
      <ProductGrid
        selectedCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
      />
    </div>
  );
}
