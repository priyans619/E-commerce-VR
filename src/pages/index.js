import { useState } from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  return (
    <div>
      {/* Pass data to header */}
      <Header
        onCategorySelect={setSelectedCategory}
        onSubCategorySelect={setSelectedSubCategory}
      />

      <ProductGrid
        selectedCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
      />
    </div>
  );
}
