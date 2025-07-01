import React from "react";
import { motion } from "framer-motion";
import Heropage from "./Heropage";
import AboutHome from "./AboutHome";
// import MenuHome from "./MenuHome";
import GalleryHome from "./GalleryHome";
import MenuLists from "../../components/MenuLists";

const HomePage = () => {
  const sectionVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Heropage />

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <AboutHome />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ delay: 0.2 }}
      >
        <MenuLists/>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ delay: 0.4 }}
      >
        <GalleryHome />
      </motion.div>
    </div>
  );
};

export default HomePage;
