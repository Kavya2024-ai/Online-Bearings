import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Aarav Sharma",
      text: "Fantastic quality products and quick delivery! I’ll definitely order again.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Mehta",
      text: "Great customer support and smooth shopping experience. Highly recommend!",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Ravi Kumar",
      text: "Loved the packaging and attention to detail. Worth every penny!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-4 border-gray-200"
              />
              <p className="text-gray-700 italic mb-4">“{review.text}”</p>

              <div className="flex justify-center mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              <h3 className="font-semibold text-gray-900">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
