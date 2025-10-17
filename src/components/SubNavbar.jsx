import React, { useState } from "react";
import { Link } from "react-router-dom";

const SecondaryNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-gray-100 text-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center px-6 py-3 text-sm font-medium">
        {/* Products Dropdown */}
        <div className="relative mx-3">
          <button
            onClick={() => toggleDropdown("products")}
            className="hover:text-blue-600 transition flex items-center gap-1"
          >
            Products ▾
          </button>
          {openDropdown === "products" && (
            <div className="absolute bg-white shadow-lg rounded-md mt-2 w-44 text-left z-10">
              <Link to="/products/electronics" className="block px-4 py-2 hover:bg-gray-100">
                Electronics
              </Link>
              <Link to="/products/fashion" className="block px-4 py-2 hover:bg-gray-100">
                Fashion
              </Link>
              <Link to="/products/home" className="block px-4 py-2 hover:bg-gray-100">
                Home & Living
              </Link>
              <Link to="/products/sports" className="block px-4 py-2 hover:bg-gray-100">
                Sports
              </Link>
            </div>
          )}
        </div>

        {/* Categories Dropdown */}
        <div className="relative mx-3">
          <button
            onClick={() => toggleDropdown("categories")}
            className="hover:text-blue-600 transition flex items-center gap-1"
          >
            Categories ▾
          </button>
          {openDropdown === "categories" && (
            <div className="absolute bg-white shadow-lg rounded-md mt-2 w-44 text-left z-10">
              <Link to="/categories/new" className="block px-4 py-2 hover:bg-gray-100">
                New Arrivals
              </Link>
              <Link to="/categories/bestsellers" className="block px-4 py-2 hover:bg-gray-100">
                Best Sellers
              </Link>
              <Link to="/categories/discounts" className="block px-4 py-2 hover:bg-gray-100">
                Discounts
              </Link>
              <Link to="/categories/premium" className="block px-4 py-2 hover:bg-gray-100">
                Premium
              </Link>
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div className="relative mx-3">
          <button
            onClick={() => toggleDropdown("services")}
            className="hover:text-blue-600 transition flex items-center gap-1"
          >
            Services ▾
          </button>
          {openDropdown === "services" && (
            <div className="absolute bg-white shadow-lg rounded-md mt-2 w-44 text-left z-10">
              <Link to="/services/delivery" className="block px-4 py-2 hover:bg-gray-100">
                Fast Delivery
              </Link>
              <Link to="/services/returns" className="block px-4 py-2 hover:bg-gray-100">
                Easy Returns
              </Link>
              <Link to="/services/support" className="block px-4 py-2 hover:bg-gray-100">
                24/7 Support
              </Link>
            </div>
          )}
        </div>

        {/* Offers Dropdown */}
        <div className="relative mx-3">
          <button
            onClick={() => toggleDropdown("offers")}
            className="hover:text-blue-600 transition flex items-center gap-1"
          >
            Offers ▾
          </button>
          {openDropdown === "offers" && (
            <div className="absolute bg-white shadow-lg rounded-md mt-2 w-44 text-left z-10">
              <Link to="/offers/festive" className="block px-4 py-2 hover:bg-gray-100">
                Festive Sale
              </Link>
              <Link to="/offers/clearance" className="block px-4 py-2 hover:bg-gray-100">
                Clearance
              </Link>
              <Link to="/offers/members" className="block px-4 py-2 hover:bg-gray-100">
                Member Deals
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
