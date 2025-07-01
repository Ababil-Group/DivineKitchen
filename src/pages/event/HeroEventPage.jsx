import React from "react";

import { motion } from "framer-motion";

import eventVideo from "../../assets/images/event/herovideo.mp4?url";
import event1 from "../../assets/images/event/e1.jpg?url";
import event2 from "../../assets/images/event/e2.jpg?url";
import event3 from "../../assets/images/event/e3.jpg?url";
import event4 from "../../assets/images/event/e4.jpg?url";
import event5 from "../../assets/images/event/e5.jpg?url";
import event6 from "../../assets/images/event/e6.jpg?url";

const HeroEventPage = () => {
  const events = [
    { image: event1 },
    { image: event2 },
    { image: event3 },
    { image: event4 },
    { image: event5 },
    { image: event6 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-screen overflow-hidden"
      >
        <motion.video
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={eventVideo} type="video/mp4" />
        </motion.video>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center px-6 max-w-4xl"
          >
            <motion.div
              className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img
                src={"/logo2.png"}
                alt="Company Logo"
                className="h-32 w-auto drop-shadow-lg"
              />
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight"
            >
              Unforgettable Events
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-amber-100 mb-8"
            >
              Where golden sunsets meet exceptional celebrations along
              Zandvoort's coast
            </motion.p>
            <motion.button
              onClick={() => {
                const section = document.querySelector("#footer");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4, type: "spring" }}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enquire About Events
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-16 -mt-20 relative z-10"
      >
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-2xl h-96"
              whileHover={{ y: -10 }}
            >
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-amber-800 mb-6 font-serif"
          >
            Ready to Create Lasting Memories?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Our event specialists will craft a completely personalized
            experience for your celebration
          </motion.p>
          <motion.button
            onClick={() => {
              const section = document.querySelector("#footer");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            variants={itemVariants}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-16 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Plan Your Event
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroEventPage;
