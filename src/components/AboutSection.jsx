import React from "react";
import { FaTruck, FaThumbsUp, FaTrophy, FaShieldAlt } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="bg-white text-gray-800">
      <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">About Us</h2>
      
      {/* 🔹 About Content */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center leading-relaxed">
        <p className="text-base md:text-lg text-gray-700">
          <strong>Quality Bearings Online</strong> is a leading supplier with over
          75 years of industry experience, offering a wide range of premium
          bearings, maintenance tools, and advanced lubricants from some of the
          world’s most trusted brands. We supply renowned bearing manufacturers
          such as SKF, FAG, Timken, NSK, IKO, Klüber Lubrication, and Shell
          Lubricants.
        </p>

        <p className="text-base md:text-lg mt-6 text-gray-700">
          As a multi-award-winning company based in Leeds, UK, we pride ourselves
          on trusted brands, expert knowledge, excellent customer service, and
          rapid delivery with 1–2 days. Our products support sectors ranging from
          Food Manufacturing and Aerospace to Oil and Gas and Precision
          Engineering.
        </p>

        <p className="text-base md:text-lg mt-6 text-gray-700">
          Quality Bearings Online is committed to exceeding your expectations as
          your trusted industry bearings supplier.
        </p>
      </section>

      {/* 🔹 Feature Icons Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-10 px-6 text-center border-t border-gray-200">
        {/* Feature 1 */}
        <div>
          <FaTruck size={40} className="mx-auto text-gray-700" />
          <h3 className="font-semibold mt-3">Super-Fast, Hassle-Free Delivery</h3>
          <p className="text-sm mt-2 text-gray-600">
            Delivered anywhere within 1–2 working days, with free shipping over ₹500.
          </p>
        </div>

        {/* Feature 2 */}
        <div>
          <FaThumbsUp size={40} className="mx-auto text-gray-700" />
          <h3 className="font-semibold mt-3">Unrivalled Customer Service</h3>
          <p className="text-sm mt-2 text-gray-600">
            Over 75 years of expertise supplying quality bearings, spares, and
            lubricants.
          </p>
        </div>

        {/* Feature 3 */}
        <div>
          <FaTrophy size={40} className="mx-auto text-gray-700" />
          <h3 className="font-semibold mt-3">Multi-Award Winning</h3>
          <p className="text-sm mt-2 text-gray-600">
            Recognized globally for excellence and industry leadership.
          </p>
        </div>

        {/* Feature 4 */}
        <div>
          <FaShieldAlt size={40} className="mx-auto text-gray-700" />
          <h3 className="font-semibold mt-3">World-Renowned Brands</h3>
          <p className="text-sm mt-2 text-gray-600">
            We supply only trusted brands like SKF, Klüber, Timken, and Shell.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
