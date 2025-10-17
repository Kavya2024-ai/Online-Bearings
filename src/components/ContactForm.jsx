import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pitw1vv",    
        "template_0ys5kuz",    
        form.current,
        "BWFi8-mC_AYymWMVU"      
      )
      .then(
        () => {
          setIsSent(true);
          e.target.reset();
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mb-10">
          Have questions or feedback? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-xl text-gray-700 mr-3" />
              <p className="text-gray-700">Hyderabad, India</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-xl text-gray-700 mr-3" />
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-xl text-gray-700 mr-3" />
              <p className="text-gray-700">support@youremail.com</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded-2xl p-8 text-left">
            <label className="block mb-2 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring focus:ring-gray-300"
              required
            />

            <label className="block mb-2 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring focus:ring-gray-300"
              required
            />

            <label className="block mb-2 text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring focus:ring-gray-300"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>

            {isSent && (
              <p className="mt-4 text-green-600 text-center">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
