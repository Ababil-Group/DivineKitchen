import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaUsers,
  FaBriefcase,
  FaChartLine,
  FaHandshake,
  FaClipboardCheck,
} from "react-icons/fa";
import heroCorporate from "../../../assets/images/wedding/herocorporate.jpg?url";
import corporate1 from "../../../assets/images/wedding/cor1.jpg?url";
import corporate2 from "../../../assets/images/wedding/cor2.jpg?url";
import corporate3 from "../../../assets/images/wedding/cor3.jpg?url";
import corporate4 from "../../../assets/images/wedding/cor4.jpg?url";
import corporate5 from "../../../assets/images/wedding/cor5.webp?url";
import corporate6 from "../../../assets/images/wedding/cor6.jpg?url";
import corporate7 from "../../../assets/images/wedding/cor7.jpg?url";
import venueImage from "../../../assets/images/wedding/corpo.webp?url";

const Corporate = () => {
  const corporateImages = [
    heroCorporate,
    corporate1,
    corporate2,
    corporate3,
    corporate4,
    corporate5,
    corporate6,
    corporate7,
  ];
  const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    attendees: "",
    message: "",
  });

  const goToNext = () => {
    setCurrentIndices((prev) => [
      (prev[0] + 1) % corporateImages.length,
      (prev[1] + 1) % corporateImages.length,
      (prev[2] + 1) % corporateImages.length,
    ]);
  };

  const goToPrev = () => {
    setCurrentIndices((prev) => [
      (prev[0] - 1 + corporateImages.length) % corporateImages.length,
      (prev[1] - 1 + corporateImages.length) % corporateImages.length,
      (prev[2] - 1 + corporateImages.length) % corporateImages.length,
    ]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll contact you soon.");
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
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <motion.img
          src={heroCorporate}
          alt="Divine Kitchen Corporate Events"
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
            className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl"
          >
            Exceptional Corporate Catering & Event Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
          >
            Impress your clients and colleagues with our premium catering
            solutions
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
                const section = document.querySelector("#request-corpotate");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaBriefcase className="mr-2" />
              Request Corporate Proposal
            </motion.button>
            <p className="text-white/80 text-sm mt-3 max-w-md">
              Complete event solutions for meetings, conferences, and corporate
              galas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">
            Professional Catering for Business Excellence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Divine Kitchen specializes in sophisticated corporate catering for
            meetings, conferences, and executive events. Our culinary team
            creates memorable dining experiences that reflect your company's
            standards and impress your most important guests.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
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
                  className="w-full md:w-1/3 flex-shrink-0 overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={corporateImages[index]}
                    alt={`Corporate event ${index + 1}`}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-blue-800 z-10 -ml-4"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-blue-800 z-10 -mr-4"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center font-serif text-amber-600 mb-12"
          >
            Corporate Event Solutions
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-amber-600">
                  <FaBriefcase className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Executive Dining
                  </h3>
                  <p className="text-gray-600">
                    Impress clients with our premium business lunch and dinner
                    menus featuring seasonal, locally-sourced ingredients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-amber-600">
                  <FaChartLine className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Conference Catering
                  </h3>
                  <p className="text-gray-600">
                    Keep attendees energized with our tailored break station
                    options and buffet solutions for multi-day events.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-amber-600">
                  <FaHandshake className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Networking Receptions
                  </h3>
                  <p className="text-gray-600">
                    Elegant passed hors d'oeuvres and cocktail menus designed to
                    facilitate business connections.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-amber-600">
                  <FaClipboardCheck className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Full Event Coordination
                  </h3>
                  <p className="text-gray-600">
                    From venue selection to clean-up, our team handles all
                    logistics for seamless corporate events.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl h-full min-h-[500px]">
              <img
                src={venueImage}
                alt="Corporate event venue"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Our Premium Event Space
                </h3>
                <div className="flex items-center text-white mb-4">
                  <FaMapMarkerAlt className="mr-2 text-blue-300" />
                  <span>Rue de l'Église, 84220 Gordes, France</span>
                </div>
                <p className="text-white/90">
                  Modern conference facilities with capacity for up to 500
                  guests. Perfect for product launches and corporate galas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="request-corpotate" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold text-center font-serif text-amber-600 mb-12"
          >
            Request Corporate Services
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaCalendarAlt />
                  </div>
                  <input
                    type="date"
                    name="date"
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    name="attendees"
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.attendees}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Number of Attendees</option>
                    <option value="10-50">10-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100-200">100-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                <div className="relative md:col-span-2">
                  <textarea
                    name="message"
                    placeholder="Tell us about your event needs..."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Request Corporate Services
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
