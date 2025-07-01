import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaGlassCheers,
  FaUtensils,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaUsers,
} from "react-icons/fa";

// Import images
import heroImage from "../../../assets/images/wedding/wedding.jpg?url";
import weddinggalry1 from "../../../assets/images/wedding/wedding.jpg?url";
import weddinggalry2 from "../../../assets/images/wedding/weding1.png?url";
import weddinggalry3 from "../../../assets/images/wedding/wedding2.webp?url";
import weddinggalry4 from "../../../assets/images/wedding/wedding3.webp?url";
import weddinggalry5 from "../../../assets/images/wedding/wedding4.jpg?url";
import weddinggalry6 from "../../../assets/images/wedding/wedding5.jpg?url";
import weddinggalry7 from "../../../assets/images/wedding/wedding6.jpg?url";
import weddinggalry8 from "../../../assets/images/wedding/wedding7.webp?url";
import venueImage from "../../../assets/images/wedding/vanue.jpg?url";

const Wedding = () => {
  const weddingImages = [
    weddinggalry1,
    weddinggalry2,
    weddinggalry3,
    weddinggalry4,
    weddinggalry5,
    weddinggalry6,
    weddinggalry7,
    weddinggalry8,
  ];
  const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const goToNext = () => {
    setCurrentIndices((prev) => [
      (prev[0] + 1) % weddingImages.length,
      (prev[1] + 1) % weddingImages.length,
      (prev[2] + 1) % weddingImages.length,
    ]);
  };

  const goToPrev = () => {
    setCurrentIndices((prev) => [
      (prev[0] - 1 + weddingImages.length) % weddingImages.length,
      (prev[1] - 1 + weddingImages.length) % weddingImages.length,
      (prev[2] - 1 + weddingImages.length) % weddingImages.length,
    ]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll contact you soon.");
    // Form submission logic here
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="font-serif text-gray-800">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <motion.img
          src={heroImage}
          alt="Divine Kitchen Wedding"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
          <motion.div
            className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src={"/logo2.png"}
              alt="Company Logo"
              className="h-24 lg:h-32 w-auto drop-shadow-lg"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Weddings at Divine Kitchen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
          >
            Celebrate Love in Tasteful Style
          </motion.p>

          {/* Added CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.button
              onClick={() => {
                const section = document.querySelector("#tailored-menus");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt className="mr-2" />
              Book Your Wedding Date
            </motion.button>
            <p className="text-white/80 text-sm mt-3 max-w-md">
              Limited availability for 2025-2026 weddings - Reserve your date
              today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-amber-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            At Divine Kitchen, we believe that love deserves to be celebrated
            with elegance and flavor. From enchanting countryside receptions to
            stylish seaside affairs, we create wedding experiences that delight
            the senses and linger in memory.
          </motion.p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-12"></div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="max-w-6xl mx-auto relative"
        >
          <div className="relative">
            <div className="flex justify-center gap-6">
              {currentIndices.map((index, i) => (
                <motion.div
                  key={i}
                  className="w-full md:w-1/3 flex-shrink-0 overflow-hidden rounded-xl shadow-lg"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={weddingImages[index]}
                    alt={`Wedding ${index + 1}`}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-amber-800 z-10 -ml-4"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-amber-800 z-10 -mr-4"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Tailored Menus Section */}
      <section id="tailored-menus" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-12"
          >
            Tailored Menus, Seamless Service
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                  <FaUtensils className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Gourmet Excellence
                  </h3>
                  <p className="text-gray-600">
                    Our chefs craft personalized menus using the freshest
                    seasonal ingredients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                  <FaGlassCheers className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Full-Service Planning
                  </h3>
                  <p className="text-gray-600">
                    From champagne toasts to dessert spreads, we handle every
                    detail.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mt-8">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <FaEnvelope />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <FaPhone />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <FaCalendarAlt />
                    </div>
                    <input
                      type="date"
                      name="date"
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <FaUsers />
                    </div>
                    <select
                      name="guests"
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Number of Guests</option>
                      <option value="50-100">50-100</option>
                      <option value="100-200">100-200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your dream wedding..."
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Request Wedding Consultation
                </button>
              </form>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl h-full min-h-[500px]">
              <img
                src={venueImage}
                alt="Wedding venue"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Our Seaside Venue
                </h3>
                <div className="flex items-center text-white mb-4">
                  <FaMapMarkerAlt className="mr-2 text-amber-300" />
                  <span>123 Coastal Highway, Beachfront Paradise</span>
                </div>
                <p className="text-white/90">
                  Panoramic ocean views with capacity for up to 300 guests.
                  Perfect for sunset ceremonies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold text-amber-800 mb-12"
          >
            Love Stories
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="text-amber-600 text-5xl mb-4">"</div>
            <p className="text-lg text-gray-700 italic mb-6">
              Divine Kitchen made our wedding day absolutely magical. The food
              was incredible, the service impeccable, and the seaside setting
              was beyond our dreams.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center">
                <FaHeart className="text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold">Sarah & Michael</h4>
                <p className="text-sm text-gray-500">June 2023</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Wedding;
