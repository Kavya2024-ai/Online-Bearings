import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Quality Bearings</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#products" className="hover:text-yellow-400">Products</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
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
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
        </div>
      )}
    </nav>
  );
}
