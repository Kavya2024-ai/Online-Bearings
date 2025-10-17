import React from "react";
import logo from "../assets/Images/logo.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 h-[80vh] flex flex-col justify-center items-center text-center px-6">
      {/* 🔹 Logo area (if you already added your image logo above, keep it) */}
      <img
        src={logo} // replace with your actual logo path
        alt="Website Logo"
        className="w-55 h-45 mb-6"
      />

      {/* 🔹 Hero text content */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Discover the Best Deals Online
      </h1>

      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Shop quality products at unbeatable prices — delivered to your door with
        fast, secure, and reliable service.
      </p>

      <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
        Shop Now
      </button>
    </section>
  );
};

export default HeroSection;

