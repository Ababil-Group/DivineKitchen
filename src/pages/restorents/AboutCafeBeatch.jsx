import React from "react";
import { motion } from "framer-motion";
import {
  FaRegClock,
  FaMapMarkerAlt,
  FaPhone,
  FaUtensils,
  FaWineGlassAlt,
  FaWineBottle,
  FaCoffee,
  FaBirthdayCake,
} from "react-icons/fa";
import cafeImage from "../../assets/images/restorant/cafe.jpg?url";
import breakfast from "../../assets/images/restorant/morning.webp?url";
import lunch from "../../assets/images/restorant/lanch.webp?url";
import evening from "../../assets/images/restorant/afternoon.webp?url";
import Wine from "../../assets/images/restorant/wine.webp?url";
import coffee from "../../assets/images/restorant/coffee.jpg?url";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const AboutCafeBeatch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="flex flex-col md:flex-row md:h-screen">
        <motion.div
          className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden order-1 md:order-2"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <img
            src={cafeImage}
            alt="Divine Kitchen restaurant"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 md:bg-gradient-to-l md:from-black md:to-transparent"></div>

          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center md:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onClick={() => {
                const section = document.querySelector("#footer");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-12 bg-white order-2 md:order-1"
          initial="hidden"
          animate="show"
          variants={slideInFromLeft}
        >
          <div className="max-w-md mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-amber-600 mb-6 font-serif"
              variants={item}
            >
              Cafe Beach
            </motion.h1>
            <motion.p
              className="text-3xl md:text-4xl text-primary font-lobster leading-tight tracking-widest font-semibold italic mb-8"
              variants={item}
            >
              A Beloved Seaside Escape
            </motion.p>

            <motion.div
              className="space-y-6 text-gray-700 mb-10"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.p variants={item}>
                Divine Kitchen celebrates a laid-back, free-spirited dining
                experience, perfectly nestled along the coastline. Here,
                breathtaking sea views meet a calm, inviting ambiance.
              </motion.p>

              <motion.p variants={item}>
                Blending vibrant charm with a sense of serene retreat, Divine
                Kitchen offers more than just a meal; it's in the heart of the
                beach.
                <span className="italic text-amber-600 font-medium">
                  'A world away'
                </span>{" "}
                in the heart of the beach.
              </motion.p>

              <motion.div
                className="flex items-center text-amber-800"
                variants={item}
              >
                <FaMapMarkerAlt className="mr-2 text-amber-600" />
                <span>Rue de l'Église, 84220 Gordes, France</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden md:block text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => {
                  const section = document.querySelector("#footer");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-12"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div className="flex items-center" variants={item}>
                <FaRegClock className="text-amber-600 mr-2" />
                <span>12PM - 11PM</span>
              </motion.div>
              <motion.div className="flex items-center" variants={item}>
                <FaUtensils className="text-amber-600 mr-2" />
                <span>Ocean View</span>
              </motion.div>
              <motion.div className="flex items-center" variants={item}>
                <FaWineGlassAlt className="text-amber-600 mr-2" />
                <span>Wine Pairing</span>
              </motion.div>
              <motion.div className="flex items-center" variants={item}>
                <FaBirthdayCake className="text-amber-600 mr-2" />
                <span>Private Events</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div variants={item}>
            <h2 className="text-3xl font-bold text-amber-600 mb-6 font-serif">
              Our Philosophy
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                At Divine Kitchen, we blend a love for culinary artistry with a
                commitment to fresh, seasonal ingredients. Every dish is crafted
                to reflect a harmony of land and sea, inspired by global flavors
                and rooted in timeless technique.
              </p>
              <p>
                Celebrated for our warm hospitality and unforgettable dining,
                Divine Kitchen has become a favorite for those who appreciate
                exceptional food in a welcoming atmosphere.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h2 className="text-3xl font-bold text-amber-600 mb-6 font-serif">
              Dining Experiences
            </h2>
            <div className="space-y-6">
              <motion.div
                className="border-l-4 border-amber-500 pl-4"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-medium text-amber-600">
                  Chef's Table
                </h3>
                <p className="text-gray-700">
                  A personalized culinary journey with exclusive dishes curated
                  by our head chef.
                </p>
              </motion.div>
              <motion.div
                className="border-l-4 border-amber-500 pl-4"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-medium text-amber-600">
                  Sunset Dining
                </h3>
                <p className="text-gray-700">
                  Savor golden hour with reserved seating and breathtaking views
                  — the perfect setting for a relaxed evening.
                </p>
              </motion.div>
              <motion.div
                className="border-l-4 border-amber-500 pl-4"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-medium text-amber-600">
                  Private Events
                </h3>
                <p className="text-gray-700">
                  Tailored menus, thoughtful service, and a stylish setting for
                  your most memorable occasions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 max-w-6xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-4xl font-bold text-amber-600 text-center mb-16 font-serif"
            variants={item}
          >
            Our Cafe Services
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-amber-200 transform -translate-x-1/2 hidden md:block"></div>

            <motion.div
              className="space-y-12 md:space-y-24"
              variants={container}
            >
              <motion.div
                className="flex flex-col md:flex-row items-center"
                variants={item}
              >
                <motion.div
                  className="md:w-1/2 p-6 md:pr-12 order-1 md:order-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromLeft}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaCoffee className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Morning Bliss
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Start your day right with our sunrise breakfast service
                      featuring artisanal pastries, organic eggs, and specialty
                      coffee blends.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>7:00 AM - 11:00 AM</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2 order-2 md:order-1"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromRight}
                >
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <motion.img
                      src={breakfast}
                      alt="Breakfast service"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center"
                variants={item}
              >
                <motion.div
                  className="md:w-1/2 p-6 md:pl-12"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromRight}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaUtensils className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Midday Retreat
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Light lunches and refreshing drinks perfect for a
                      beachside break. Enjoy our signature salads, sandwiches,
                      and cold-pressed juices.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>11:00 AM - 3:00 PM</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromLeft}
                >
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <motion.img
                      src={lunch}
                      alt="Lunch service"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center"
                variants={item}
              >
                <motion.div
                  className="md:w-1/2 p-6 md:pr-12 order-1 md:order-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromLeft}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaWineGlassAlt className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Golden Hour
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Afternoon delights with our premium tea selection, wine
                      flights, and shareable small plates as the sun sets over
                      the ocean.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>3:00 PM - 6:00 PM</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2 order-2 md:order-1"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromRight}
                >
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <motion.img
                      src={evening}
                      alt="Evening service"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center"
                variants={item}
              >
                <motion.div
                  className="md:w-1/2 p-6 md:pl-12"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromRight}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaWineBottle className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Moonlight Dining
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Intimate evening dining with candlelit tables, chef's
                      specials, and an extensive wine list under the stars.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>6:00 PM - 11:00 PM</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromLeft}
                >
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <motion.img
                      src={Wine}
                      alt="Evening dining"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center bg-amber-50 rounded-2xl p-1"
                variants={item}
              >
                <motion.div
                  className="md:w-1/2 p-6 order-1 md:order-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromLeft}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-amber-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaCoffee className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        The Perpetual Brew
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Our 24/7 coffee and tea bar features single-origin beans,
                      rare tea leaves, and artisanal brewing methods. Enjoy
                      complimentary biscotti with every pour.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        Ethiopian Yirgacheffe
                      </span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        Matcha Ceremonial Grade
                      </span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        Cold Brew Tasting Flights
                      </span>
                    </div>
                    <div className="flex items-center text-amber-600 mt-4">
                      <FaRegClock className="mr-2" />
                      <span className="font-medium">Available anytime</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2 order-1 md:order-1"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromRight}
                >
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white relative">
                    <motion.img
                      src={coffee}
                      alt="Coffee and tea service"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <p className="text-white text-sm font-light">
                        "The sea air makes our espresso taste sweeter" - Marco,
                        Head Barista
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-24 grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBirthdayCake className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Special Events
              </h3>
              <p className="text-gray-600">
                Host your celebrations with our customizable event packages and
                dedicated service teams.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Seasonal Specials
              </h3>
              <p className="text-gray-600">
                Rotating menu featuring the best seasonal ingredients and
                limited-time creations.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Members Club
              </h3>
              <p className="text-gray-600">
                Exclusive benefits for members including priority booking and
                special tasting events.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-6 font-serif">
            Ready for your culinary journey?
          </h3>
          <motion.button
            onClick={() => {
              const section = document.querySelector("#footer");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-16 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Your Table
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCafeBeatch;
