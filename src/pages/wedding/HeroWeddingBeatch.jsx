import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import heroImage from "../../assets/images/wedding/wedding.jpg?url";
import {
  FaHeart,
  FaGlassCheers,
  FaRing,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import weddinggalry1 from "../../assets/images/wedding/w1.jpg?url";
import weddinggalry2 from "../../assets/images/wedding/w2.jpeg?url";
import weddinggalry3 from "../../assets/images/wedding/w3.jpeg?url";
import weddinggalry4 from "../../assets/images/wedding/w4.jpeg?url";
import weddinggalry5 from "../../assets/images/wedding/w5.webp?url";
import weddinggalry6 from "../../assets/images/wedding/w6.jpeg?url";
import venueImage from "../../assets/images/wedding/vanue.jpg?url";

const HeroWeddingBeatch = () => {
  const { scrollYProgress } = useScroll();
  const weddingImages = [
    weddinggalry1,
    weddinggalry2,
    weddinggalry3,
    weddinggalry4,
    weddinggalry5,
    weddinggalry6,
  ];

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    venue: "",
    request: "",
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardHover = {
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const getVisibleCount = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, visibleCount]);

  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (weddingImages.length - visibleCount + 1)
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? weddingImages.length - visibleCount : prevIndex - 1
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  const visibleImages = weddingImages.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.div
        className="relative h-screen max-h-[800px] overflow-hidden"
        style={{ y: y1 }}
      >
        <img
          src={heroImage}
          alt="Elegant wedding at Divine Kitchen"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Weddings at <span className="text-amber-200">Divine Kitchen</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Where dreams meet the ocean, and love stories begin
          </motion.p>
          <motion.button
            onClick={() => {
              const section = document.querySelector("#wedding-batch");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white font-semibold rounded-full shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Plan Your Special Day
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="max-w-4xl mx-auto py-16 px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl font-serif font-bold mb-6 text-amber-800"
          variants={fadeIn}
        >
          Weddings at Divine Kitchen
        </motion.h2>
        <motion.p className="text-lg text-gray-600 mb-8" variants={fadeIn}>
          Divine Kitchen offers intimate and memorable wedding celebrations
          along the beautiful Zandvoort coastline. Enjoy the soothing sounds of
          the waves and stunning seaside views to make your special day truly
          Divine.
        </motion.p>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        className="py-16 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-serif font-bold mb-8 text-center text-amber-800"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Some images of weddings on the beach
          </motion.h2>

          <div className="relative">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence initial={false}>
                {visibleImages.map((image, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    className={`flex-shrink-0 px-2 ${
                      visibleCount === 1
                        ? "w-full"
                        : visibleCount === 2
                        ? "w-1/2"
                        : "w-1/3"
                    }`}
                    initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="relative overflow-hidden rounded-lg shadow-md h-64 md:h-80 lg:h-96 group"
                      whileHover="hover"
                      variants={cardHover}
                    >
                      <img
                        src={image}
                        alt={`Wedding at Divine Kitchen ${
                          currentIndex + index + 1
                        }`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {currentIndex > 0 && (
              <motion.button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white opacity-80 hover:opacity-100 p-2 rounded-full shadow-md ml-2 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft className="text-gray-800" />
              </motion.button>
            )}

            {currentIndex < weddingImages.length - visibleCount && (
              <motion.button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white opacity-80 hover:opacity-100 p-2 rounded-full shadow-md mr-2 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight className="text-gray-800" />
              </motion.button>
            )}
          </div>

          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {Array.from({
              length: weddingImages.length - visibleCount + 1,
            }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-amber-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Venue Section */}
      <motion.div
        id="wedding-batch"
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn}>
            <motion.img
              src={venueImage}
              alt="Lookout Beach venue at Divine Kitchen"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <motion.h2
              className="text-3xl font-serif font-bold mb-4 text-amber-800"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Venue
            </motion.h2>
            <motion.h3
              className="text-2xl font-serif font-semibold mb-4 text-amber-600"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Lookout Beach
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Situated along the beautiful Zandvoort coastline, Divine Kitchen
              is ideal for seated celebrations of 40 to 150 guests.
            </motion.p>
            <motion.div
              className="mb-8"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-xl font-serif font-semibold mb-2">
                Exclusive Use:
              </h4>
              <p className="text-gray-600">40 - 150 Guests</p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="number"
                    name="guests"
                    placeholder="Number of guests"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <select
                    name="venue"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.venue}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Venue</option>
                    <option value="Lookout Beach">Lookout Beach</option>
                    <option value="Ocean Terrace">Ocean Terrace</option>
                    <option value="Sunset Pavilion">Sunset Pavilion</option>
                  </select>
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea
                  name="request"
                  placeholder="Special Request"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.request}
                  onChange={handleInputChange}
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl font-serif font-bold mb-16 text-center text-amber-800"
          variants={fadeIn}
        >
          Why Choose Divine Kitchen
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16 px-4 max-w-6xl mx-auto">
          {[
            {
              icon: (
                <FaHeart className="text-4xl text-amber-500 mx-auto mb-4" />
              ),
              title: "Romantic Settings",
              description:
                "Breathtaking ocean views and intimate beachfront venues",
            },
            {
              icon: (
                <FaGlassCheers className="text-4xl text-amber-500 mx-auto mb-4" />
              ),
              title: "Gourmet Catering",
              description: "Exquisite menus crafted by our award-winning chefs",
            },
            {
              icon: <FaRing className="text-4xl text-amber-500 mx-auto mb-4" />,
              title: "Custom Packages",
              description: "Tailored experiences for your perfect celebration",
            },
            {
              icon: (
                <FaCamera className="text-4xl text-amber-500 mx-auto mb-4" />
              ),
              title: "Photo Ready",
              description:
                "Stunning backdrops for unforgettable wedding photos",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div whileHover={{ scale: 1.1 }}>{item.icon}</motion.div>
              <h3 className="text-xl font-serif font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        className="bg-amber-50 py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-serif font-bold mb-8 text-gray-800"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Love Stories
          </motion.h2>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <motion.p
              className="text-lg italic mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              "Our wedding at Divine Kitchen was beyond perfect. The team
              anticipated our every need and created magic we'll remember
              forever."
            </motion.p>
            <motion.p
              className="font-semibold text-amber-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              - Sarah & Michael
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroWeddingBeatch;
