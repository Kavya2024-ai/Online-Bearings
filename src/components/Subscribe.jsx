import React, { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    // Here you can connect to a newsletter API later if needed
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FaEnvelopeOpenText className="text-5xl text-gray-800 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Subscribe Today</h2>
        <p className="text-gray-600 mb-8">
          Join our mailing list to receive exclusive offers, new arrivals, and
          updates directly in your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>

        {subscribed && (
          <p className="mt-4 text-green-600 font-medium">
            ✅ You’ve successfully subscribed!
          </p>
        )}
      </div>
    </section>
  );
};

export default SubscribeSection;
