import React from "react";
import { motion } from "framer-motion";
import gallery1 from "../../assets/images/restorant/beach-hero.png";
import gallery5 from "../../assets/images/menu/gal5.jpg?url";
import gallery6 from "../../assets/images/menu/gal3.jpg?url";
import gallery2 from "../../assets/images/restorant/sunset-session.jpeg";
import gallery3 from "../../assets/images/restorant/beach-dining.jpeg";
import gallery4 from "../../assets/images/restorant/vip-cabana.jpg";
const GalleryHome = () => {
  const galleryImages = [
    { id: 1, src: gallery1, size: "md:col-span-2", direction: "left" },
    { id: 2, src: gallery2, size: "md:col-span-1", direction: "right" },
    { id: 3, src: gallery3, size: "md:col-span-1", direction: "left" },
    { id: 4, src: gallery4, size: "md:col-span-2", direction: "right" },
    { id: 5, src: gallery5, size: "md:col-span-2", direction: "left" },
    { id: 6, src: gallery6, size: "md:col-span-1", direction: "right" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const item = (direction) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageHover = {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  };

  const zoomEffect = {
    initial: { scale: 1 },
    whileInView: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-screen-lg mx-auto px-4 py-16 overflow-hidden"
    >
      <motion.div variants={container} className="text-center mb-12 space-y-2">
        <motion.h1
          variants={fadeIn}
          className="text-primary text-3xl md:text-4xl lg:text-6xl font-lobster font-semibold mb-2"
        >
          Our Gallery
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-gray-700 max-w-md mx-auto text-lg"
        >
          A collection of our special moments
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-3 gap-3"
      >
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            variants={item(image.direction)}
            className={`relative group overflow-hidden rounded-lg ${image.size}`}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={image.src}
              alt="Gallery image"
              className="w-full h-96 object-cover"
              whileHover={imageHover}
              variants={zoomEffect}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default GalleryHome;
