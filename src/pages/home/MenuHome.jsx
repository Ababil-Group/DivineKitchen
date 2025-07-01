import React from "react";
import { motion } from "framer-motion";
import manestach from "../../assets/images/home/divinebird2.png?url";
import menu1 from "../../assets/images/menu/me1.jpg?url";
import menu2 from "../../assets/images/menu/ba.jpg?url";
import menu3 from "../../assets/images/menu/me3.jpg?url";
import menu4 from "../../assets/images/menu/me4.jpg?url";
import { FaArrowRight } from "react-icons/fa6";

const MenuHome = () => {
  const menuList = [
    {
      image: menu1,
      text: "Full Menu",
      pdf: "/pdfs/main-menu.pdf",
    },
    {
      image: menu2,
      text: "Beverage Menu",
      pdf: "/pdfs/wine-list.pdf",
    },
    {
      image: menu3,
      text: "Cocktail List",
      pdf: "/pdfs/cocktail-menu.pdf",
    },
    {
      image: menu4,
      text: "Wine Experts",
      pdf: "/pdfs/sommeliers.pdf",
    },
  ];

  const handleDownload = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "backOut" },
    },
  };

  return (
    <section id="our-menus" className="bg-thirary py-16 px-4 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-12"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-merriweather uppercase tracking-widest font-bold text-white mb-4"
          >
            Our Menus
          </motion.h1>

          <motion.img
            variants={scaleUp}
            src={manestach}
            alt="Divine Kitchen decorative element"
            className="mx-auto h-20 w-auto opacity-80"
          />

          <motion.p variants={fadeIn} className="mt-4 text-gray-600 italic">
            "Where every dish tells a story"
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {menuList.map((menu, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="h-72 overflow-hidden">
                <motion.img
                  loading="lazy"
                  src={menu.image}
                  alt={menu.text}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <motion.h3
                  className="text-3xl font-medium text-white mb-2 font-lobster"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {menu.text}
                </motion.h3>

                <motion.button
                  onClick={() => handleDownload(menu.pdf)}
                  className="flex items-center justify-center gap-2 bg-[#ff2709] hover:bg-[#e62208] text-white py-2 px-4 rounded-full transition-colors duration-300 uppercase italic text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span>View Menu</span>
                  <FaArrowRight className="text-lg" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="flex items-center justify-center mt-10 space-x-6"
        >
          <motion.button
            variants={item}
            className="uppercase text-white px-8 py-3 bg-secondary rounded-md text-lg font-semibold"
            whileHover={{
              y: -5,
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            reservations
          </motion.button>

          <motion.div
            variants={item}
            className="p-[2px] border-white border rounded-md"
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
          >
            <button className="text-white px-8 py-3 uppercase text-lg font-semibold">
              More information
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHome;
