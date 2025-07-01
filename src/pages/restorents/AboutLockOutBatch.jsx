import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaUmbrellaBeach,
  FaUtensils,
  FaRegClock,
  FaMapMarkerAlt,
  FaCocktail,
} from "react-icons/fa";
import { GiSandsOfTime, GiWaveSurfer, GiSunset } from "react-icons/gi";
import { MdOutlineRestaurant, MdEventSeat } from "react-icons/md";

// Image imports (replace with your actual image paths)
import Restorant from "../../assets/images/restorant/restorent.jpg";
import sunsetSession from "../../assets/images/restorant/sunset-session.jpeg";
import beachDining from "../../assets/images/restorant/beach-dining.jpeg";
import vipCabana from "../../assets/images/restorant/vip-cabana.jpg";

import MenuLists from "../../components/MenuLists";

const LockOutBeach = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
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

  const experiences = [
    {
      id: "sunset",
      title: "Sunset Sessions",
      icon: <GiSunset className="text-3xl" />,
      image: sunsetSession,
      description: "Live music as the sun melts into the horizon",
    },
    {
      id: "dining",
      title: "Beachfront Dining",
      icon: <MdOutlineRestaurant className="text-3xl" />,
      image: beachDining,
      description: "Gourmet cuisine with toes in the sand",
    },
    {
      id: "vip",
      title: "VIP Cabanas",
      icon: <MdEventSeat className="text-3xl" />,
      image: vipCabana,
      description: "Private oceanfront retreats with dedicated service",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-amber-50">
      {/* Hero Section */}

      <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-4 text-black  p-8 md:p-12 bg-white">
        <div className="overflow-hidden rounded-lg md:order-1 order-2">
          <img
            src={Restorant}
            alt="Restaurant"
            className="w-full h-full object-cover bg-gray-100 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="max-w-md mx-auto text-center md:order-2 order-1 bg-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 font-serif text-amber-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            LockOut Beach
          </motion.h1>
          <motion.p
            className="text-3xl md:text-4xl text-primary font-lobster leading-tight tracking-widest font-semibold italic mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            The Ultimate Beach Club Experience
          </motion.p>

          <motion.div
            className="space-y-6 text-gray-700 leading-relaxed mb-10 text-left max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeIn}>
              LockOut Beach embodies the vibrant spirit of coastal living where
              golden sands, good vibes, and great company come together. With
              stunning ocean views and an electrifying atmosphere, it's your
              go-to destination for sun-soaked days and unforgettable nights.
            </motion.p>
            <motion.p variants={fadeIn}>
              From sunrise lounging to sunset sessions, LockOut Beach is where
              rhythm meets relaxation. Whether you're sipping signature
              cocktails at the bar, dancing barefoot to live DJ sets, or
              indulging in fresh seaside cuisine, every moment is curated for
              pure coastal bliss.
            </motion.p>
            <motion.p variants={fadeIn}>
              Blending laid-back elegance with high-energy fun, LockOut Beach
              offers a refreshing escape from the everyday where waves meet
              wonder and every experience is a celebration of life, music, and
              the magic of the shoreline.
            </motion.p>
            <br />
            <br />

            <motion.div
              className="flex items-center text-blue-900"
              variants={fadeIn}
            >
              <FaMapMarkerAlt className="mr-2 text-amber-500" />
              <span>Rue de l'Église, 84220 Gordes, France</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => {
                const section = document.querySelector("#footer");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Reserve Now
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 mt-12"
            variants={staggerContainer}
          >
            {[
              {
                icon: <FaRegClock className="text-amber-500 mr-2" />,
                text: "10AM - 10PM",
              },
              {
                icon: <FaUmbrellaBeach className="text-amber-500 mr-2" />,
                text: "Daybeds",
              },
              {
                icon: <FaCocktail className="text-amber-500 mr-2" />,
                text: "Cocktails",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5 text-amber-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                text: "Ocean View",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                variants={fadeIn}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10">
              <motion.h2
                className="text-3xl font-bold text-amber-600 mb-6 font-serif"
                variants={fadeIn}
              >
                Our Story
              </motion.h2>
              <motion.div
                className="space-y-6 text-gray-700"
                variants={staggerContainer}
              >
                <motion.p variants={fadeIn}>
                  LockOut Beach was born from a simple yet bold dream to create
                  a beachfront escape where laid-back luxury meets the untamed
                  beauty of the sea. What began as a vision has grown into a
                  beloved destination, blending effortless style with the soul
                  of coastal living.
                </motion.p>
                <motion.p variants={fadeIn}>
                  Built on passion, creativity, and a deep love for the beach
                  lifestyle, LockOut Beach has become a go-to haven for those
                  seeking more than just a day in the sun. From our handcrafted
                  cocktails to our signature sunsets, every detail is designed
                  to elevate your experience.
                </motion.p>
                <motion.p variants={fadeIn}>
                  Today, we're proud to be celebrated as the region's top beach
                  club where unforgettable memories are made, one wave at a
                  time.
                </motion.p>
              </motion.div>
            </div>
            <div className="bg-amber-50 p-10 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    className="bg-white p-4 rounded-lg shadow-md h-32 flex items-center justify-center"
                    whileHover={{ y: -5 }}
                  >
                    <FaUmbrellaBeach className="text-amber-500 text-4xl" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 font-serif text-amber-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Premier Experiences
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500 p-3 rounded-full mr-4">
                      {exp.icon}
                    </div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                  <p className="text-blue-100">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuLists />

      {/* Venue Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-10">
                <motion.h2
                  className="text-3xl font-bold text-amber-600 mb-6 font-serif"
                  variants={fadeIn}
                >
                  Our Venue
                </motion.h2>
                <motion.p className="text-gray-700 mb-6" variants={fadeIn}>
                  Whether you're planning an intimate soirée or a grand
                  celebration, LockOut Beach offers an elegant and versatile
                  setting designed to bring your vision to life.
                </motion.p>
                <motion.p className="text-gray-700 mb-8" variants={fadeIn}>
                  Our beachfront oasis is ideal for a wide range of events from
                  corporate gatherings and luxury weddings to private
                  celebrations, product launches, engagement parties, and
                  milestone occasions. Each experience is thoughtfully tailored
                  to reflect your style and exceed expectations.
                </motion.p>

                <motion.div
                  className="grid grid-cols-2 gap-6 mb-8"
                  variants={staggerContainer}
                >
                  {[
                    {
                      icon: <GiWaveSurfer className="text-2xl" />,
                      title: "Capacity",
                      value: "10 - 1,000 Guests",
                    },
                    {
                      icon: <MdEventSeat className="text-2xl" />,
                      title: "Ideal For",
                      value: "Weddings & Events",
                    },
                    {
                      icon: <GiSandsOfTime className="text-2xl" />,
                      title: "Availability",
                      value: "Open Year-Round",
                    },
                    {
                      icon: <FaUtensils className="text-2xl" />,
                      title: "Cuisine",
                      value: "Bespoke Menus",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      variants={fadeIn}
                    >
                      <div className="bg-amber-100 p-3 rounded-full mr-4 text-amber-600">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{item.title}</h4>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={fadeIn}>
                  <button
                    onClick={() => {
                      const section = document.querySelector("#footer");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors"
                  >
                    Reserve Your Exclusive Experience
                  </button>
                </motion.div>
              </div>
              <div className="bg-gray-800 p-10 flex items-center justify-center">
                <div className="text-white text-center">
                  <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-amber-300" />
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="mb-6">
                    Rue de l'Église, <br /> 84220 Gordes, France
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button className="bg-white text-blue-900 py-2 px-6 rounded-full text-sm font-medium">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready for Your Coastal Escape?
          </motion.h2>
          <motion.p
            className="text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Book your table or cabana today and experience the magic of LockOut
            Beach
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => {
                const section = document.querySelector("#footer");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Reserve Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LockOutBeach;
