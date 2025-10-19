import { useState } from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Quality Bearings</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/products" className="hover:text-yellow-400">Products</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          <Link to="/services" className="hover:text-yellow-400">Services</Link>
          <Link to="/testimonials" className="hover:text-yellow-400">Testimonials</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-700 p-4 space-y-2">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
        </div>
      )}
    </nav>
  );
}
