import React, { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

const Header = ({ onCategorySelect, onSubCategorySelect }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const categories = {
    Avatars: ["Human-like", "Anthro & Furry", "Robot & Cyborgs", "Cyborgs", "All in Avatars"],
    Fashion: ["Clothes", "Accessories", "Others", "All in Fashion"],
  };

  return (
    <nav className="bg-[black] p-4 border-b border-gray-300 flex justify-between items-center mx-auto">
      {/* Logo Section */}
      <div className="flex items-center text-white">
        <h1>Test Logo</h1>
      </div>

      {/* Search Bar Section */}
      <div className="flex items-center space-x-4 w-full max-w-xl">
        <div className="relative flex items-center h-12 bg-gray-300 border border-gray-300 rounded-full py-1 w-full">
          {/* Keyword Input */}
          <input
            type="text"
            className="flex-1 bg-transparent border-none focus:outline-none text-sm pl-4"
            placeholder="keywords"
          />

          <span className="mx-2 h-6 w-px bg-gray-800"></span>

          {/* Category Section */}
          <div className="relative flex-1">
            <div
              className="text-sm bg-transparent border-none focus:outline-none text-gray-600 pl-4 cursor-pointer"
              onClick={() => setShowPopup(!showPopup)}
            >
              <div className="text-gray-400">Category</div>
              {selectedSubCategory && (
                <div className="mt-1 text-gray-600 font-medium">
                  {selectedSubCategory}
                </div>
              )}
            </div>

            {/* Popup */}
            {showPopup && (
              <div className="absolute top-full mt-8 w-[400px] bg-[#443E3E] shadow-lg rounded-3xl border border-gray-300 z-10">
                <div className="flex h-80 p-3">
                  {/* Main Categories */}
                  <ul className="w-1/2 border-r border-gray-300 text-[#F1F1F1]">
                    {["Avatars", "Fashion", "All"].map((category) => (
                      <li
                        key={category}
                        className={`px-5 py-2 rounded-3xl flex justify-between items-center cursor-pointer ${
                          currentMenu === category ? "bg-[#655D5E]" : ""
                        }`}
                        onClick={() => {
                          if (category === "All") {
                            // Handle "All" category selection
                            onCategorySelect("All");
                            setSelectedSubCategory("");
                            setCurrentMenu("");
                            setShowPopup(false);
                          } else {
                            // Toggle categories
                            setCurrentMenu(currentMenu === category ? "" : category);
                          }
                        }}
                      >
                        <span>{category}</span>
                        {categories[category] && (
                          <span className="ml-12">›</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Subcategories */}
                  <ul className="w-1/2">
                    {currentMenu &&
                      categories[currentMenu]?.map((subCategory) => (
                        <li
                          key={subCategory}
                          className={`px-5 py-2 rounded-3xl cursor-pointer text-[#F1F1F1] ${
                            selectedSubCategory === subCategory ? "bg-[#655D5E]" : ""
                          }`}
                          onClick={() => {
                            setSelectedSubCategory(subCategory);
                            onCategorySelect(currentMenu);
                            onSubCategorySelect(subCategory);
                            setShowPopup(false);
                          }}
                        >
                          {subCategory}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Search Icon */}
          <button className="flex items-center justify-center bg-red-500 text-gray-600 h-10 w-10 rounded-full hover:bg-gray-400">
            <FiSearch className="text-[#F1F1F1] text-2xl" />
          </button>
        </div>

        {/* Filter Icon */}
        <button className="flex items-center justify-center border border-gray-300 h-10 w-10 rounded-full ml-2">
          <HiOutlineAdjustmentsHorizontal className="text-[#F1F1F1] text-3xl" />
        </button>
      </div>

      {/* Wrapper List Section */}
      <div className="flex items-center space-x-8 mr-4">
        {/* Title and Globe Icon */}
        <div className="flex items-center space-x-6">
          <span className="text-sm text-[#F1F1F1] font-bold">
            List your creation
          </span>
          <button className="flex items-center justify-center text-gray-600">
            <CiGlobe className="text-[#F1F1F1] text-lg" />
          </button>
        </div>

        {/* Menu and Account */}
        <div className="flex items-center space-x-1 px-2 py-1 border border-gray-300 rounded-full">
          <button className="flex items-center justify-center h-8 w-8 rounded-full">
            <IoMdMenu className="text-[#F1F1F1] text-3xl" />
          </button>
          <button className="flex items-center justify-center h-8 w-8 rounded-full">
            <MdAccountCircle className="text-[#F1F1F1] text-3xl" />
          </button>
        </div>

        {/* Cart Icon */}
        <button className="flex items-center justify-center border border-gray-300 text-gray-600 h-10 w-10 rounded-full">
          <FiShoppingCart className="text-[#F1F1F1] text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
