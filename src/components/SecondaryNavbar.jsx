import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

const SecondaryNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
        
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold text-blue-600">
              Quality Bearings
            </span>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Desktop search & buttons */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center w-full md:w-auto gap-4`}
        >
          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex w-full md:w-96 items-center"
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
          <div className="flex items-center space-x-4">
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
            <Link
          to="/signin"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign In / Register
        </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
