import React from "react";

const ProductsSection = () => {
  const products = [
    { id: 1, name: "Product 1", image: "/Images/product1.jpg" },
    { id: 2, name: "Product 2", image: "/Images/product2.jpg" },
    { id: 3, name: "Product 3", image: "/Images/product3.jpg" },
    { id: 4, name: "Product 4", image: "/Images/product4.jpg" },
    { id: 5, name: "Product 5", image: "/Images/product5.jpg" },
    { id: 6, name: "Product 6", image: "/Images/product6.jpg" },
    { id: 7, name: "Product 7", image: "/Images/product7.jpg" },
    { id: 8, name: "Product 8", image: "/Images/product8.jpg" },
    { id: 9, name: "Product 9", image: "/Images/product9.jpg" },
    { id: 10, name: "Product 10", image: "/Images/product10.jpg" },
    { id: 11, name: "Product 11", image: "/Images/product11.jpg" },
    { id: 12, name: "Product 12", image: "/Images/product12.jpg" },
    { id: 13, name: "Product 13", image: "/Images/product13.jpg" },
    { id: 14, name: "Product 14", image: "/Images/product14.jpg" },
    { id: 15, name: "Product 15", image: "/Images/product15.jpg" },
    { id: 16, name: "Product 16", image: "/Images/product16.jpg" },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>

        {/* ✅ Updated grid: 8 items per row on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-28 object-cover rounded-lg mb-3"
              />
              <h3 className="text-sm font-semibold text-gray-800">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
