import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/Images/logo.png";

const SecondaryNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white shadow-md p-4 flex flex-col relative  md:flex-row items-center md:justify-between">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">
        <img src={logo} alt="Logo" className="h-12 w-auto"/>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex-1 w-full md:mx-4 flex items-center"
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Cart and Register */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <button
          onClick={() => setCartCount(cartCount + 1)}
          className="relative p-2 rounded-full hover:bg-gray-100 transition"
        >
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Sign In / Register
        </button>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
