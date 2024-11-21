import React from "react";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
    className={`fixed inset-0 bg-[black] text-white transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300 ease-in-out z-50`}
  >
    <div className="flex flex-col items-center justify-start h-full py-8">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-2xl"
        onClick={onClose}
      >
        <IoMdClose />
      </button>

      {/* Content */}
      <div className="flex flex-col items-center space-y-4 mt-16">
        <button className="px-6 py-3 text-sm font-semibold bg-[#CA323D] rounded-full">
          Sign In
        </button>
        <button className="px-6 py-3 text-sm font-semibold bg-gray-600 rounded-full">
          Sign Up
        </button>
      </div>
    </div>
  </div>
  );
};

export default Sidebar;
