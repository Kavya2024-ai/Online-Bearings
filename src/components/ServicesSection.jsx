import React from "react";
import { FaTruck, FaThumbsUp, FaShieldAlt, FaHeadset } from "react-icons/fa";
import Coca from "../assets/Images/Coca.png";
import mcdonald from "../assets/Images/mcdonald.jpg";
import mercedes from "../assets/Images/mercedes.png";
import nasa from "../assets/Images/nasa.png";
import shell from "../assets/Images/shell.png";
const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* 🔹 Services Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-10">Our Services</h2>

        {/* 🔹 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col items-center">
            <FaTruck className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Quick and reliable delivery service for all your orders.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaThumbsUp className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">
              We provide top-quality products that meet industry standards.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Secure Shopping</h3>
            <p className="text-gray-600 text-sm">
              Your data and transactions are fully protected with us.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaHeadset className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Our friendly team is always here to help you anytime.
            </p>
          </div>
        </div>

        {/* 🔹 Trusted Brands Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Trusted by Leading Brands
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          <img
            src={Coca}
            alt="coca"
            className="h-12 w-auto hover:grayscale-0 transition"
          />
          <img
            src={mcdonald}
            alt="mcdonald"
            className="h-12 w-auto  hover:grayscale-0 transition"
          />
          <img
            src={mercedes}
            alt="Mercedes"
            className="h-12 w-auto  hover:grayscale-0 transition"
          />
          <img
            src={nasa}
            alt="Nasa"
            className="h-12 w-auto  hover:grayscale-0 transition"
          />
          <img
            src={shell}
            alt="shell"
            className="h-12 w-auto  hover:grayscale-0 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
