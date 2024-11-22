import { useState } from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div>
      {/* Pass states and handlers to Header */}
      <Header
        onCategorySelect={setSelectedCategory}
        onSubCategorySelect={setSelectedSubCategory}
        onSearch={(keyword) => setSearchKeyword(keyword)}
      />

      {/* Pass filtering criteria to ProductGrid */}
      <ProductGrid
        selectedCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
        searchKeyword={searchKeyword}
      />
    </div>
  );
}
