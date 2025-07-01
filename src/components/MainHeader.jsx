import React, { useState, useRef, useEffect } from "react";
import logo from "/logo1.png";
import { FiChevronDown, FiX, FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import BookingPopup from "./BookingPopup";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Restaurants",
      subNav: [
        { label: "Lookout Beach", path: "/lookout-beach" },
        { label: "Cafe Beach", path: "/cafe-beach" },
      ],
    },
    { label: "Menus", path: "/#our-menus", isHash: true },
    // {
    //   label: "Wedding Ceremony",
    //   subNav: [
    //     { label: "Wedding Lookout Beach", path: "/wedding-lookout-beach" },
    //     { label: "Wedding Cafe Beach", path: "/wedding-cafe-beach" },
    //   ],
    // },
    {
      label: "Events",
      subNav: [
        { label: "Weddings", path: "/events/weddings" },
        { label: "Corporate Galas", path: "/events/corporate" },
        { label: "Art & Fashion", path: "/events/art-fashion" },
        { label: "Events Memories", path: "/events/memories" },
      ],
    },
    { label: "Contact Us", path: "/#contact-us", isHash: true },
  ];

  const toggleSubmenu = (index, e) => {
    e.stopPropagation();
    setActiveSubmenu((prev) => (prev === index ? null : index));
  };

  const toggleBookingPopup = () => {
    setShowBookingPopup(!showBookingPopup);
  };

  const renderLink = (item) =>
    item.isHash ? (
      <HashLink
        smooth
        to={item.path}
        className="px-2 py-2 text-gray-800 hover:text-primary text-sm font-semibold font-lato tracking-wider leading-relaxed transition-colors duration-300"
        onClick={() => {
          setMobileMenuOpen(false);
        }}
      >
        {item.label}
      </HashLink>
    ) : (
      <Link
        to={item.path}
        className="px-2 py-2 text-gray-800 hover:text-primary text-sm font-semibold font-lato transition-colors duration-300"
        onClick={() => {
          setMobileMenuOpen(false);
        }}
      >
        {item.label}
      </Link>
    );

  const renderMobileSubLink = (subItem) => {
    return subItem.isHash ? (
      <HashLink
        smooth
        to={subItem.path}
        className="block py-2 pl-6 text-gray-700 hover:text-primary text-sm font-semibold font-lato hover:bg-gray-100 rounded transition-colors duration-300"
        onClick={() => {
          setMobileMenuOpen(false);
          setActiveSubmenu(null);
        }}
      >
        {subItem.label}
      </HashLink>
    ) : (
      <Link
        to={subItem.path}
        className="block py-2 pl-6 text-gray-700 hover:text-primary hover:bg-gray-100 rounded transition-colors duration-300"
        onClick={() => {
          setMobileMenuOpen(false);
          setActiveSubmenu(null);
        }}
      >
        {subItem.label}
      </Link>
    );
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const subMenuVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: { opacity: 0, y: -10, height: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
  };

  return (
    <header
      className={`w-full bg-white relative z-50 transition-all duration-300 font-lato ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
      ref={navRef}
    >
      {/* <motion.div
        className="bg-gradient-to-r from-[#ff2709] via-red-500 to-[#ffaa13] text-white py-2 px-4 text-center text-sm md:text-base"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <p>✨ Special Offer: 20% off on all weekend bookings! ✨</p>
      </motion.div> */}

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3 md:py-4">
          {/* Logo on the left */}
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="h-10 md:h-14 transition-all duration-300 hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Navigation items in the middle - hidden on mobile */}
          <div className="hidden lg:flex flex-1 justify-center items-center mx-4">
            <div className="flex items-center space-x-2 xl:space-x-3 uppercase font-semibold">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(index)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {item.subNav ? (
                    <>
                      <button
                        className={`flex items-center px-3 py-2 text-sm font-semibold font-lato tracking-wider uppercase ${
                          activeSubmenu === index
                            ? "text-primary"
                            : "text-gray-800 hover:text-primary"
                        } transition-colors duration-300 uppercase`}
                      >
                        {item.label}
                        <motion.span
                          animate={{
                            rotate: activeSubmenu === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiChevronDown className="ml-1" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {activeSubmenu === index && (
                          <motion.div
                            className="absolute left-1/2 transform -translate-x-1/2 w-64 bg-white shadow-xl uppercase font-semibold rounded-lg py-2 z-50 border border-gray-200"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={subMenuVariants}
                          >
                            {item.subNav.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-700 text-sm font-semibold font-lato uppercase hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                                onClick={() => setActiveSubmenu(null)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    renderLink(item)
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Book Now button on the right */}
          <div className="flex items-center">
            <motion.button
              onClick={toggleBookingPopup}
              className="hidden lg:block bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>

            {/* Mobile menu button - right side */}
            <motion.button
              className="lg:hidden text-gray-800 focus:outline-none ml-4"
              aria-label="Toggle menu"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setActiveSubmenu(null);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-xl fixed inset-x-0 top-16 z-40"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="container mx-auto px-4 py-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-100 last:border-b-0"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  {item.subNav ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-4  text-gray-800 text-sm font-semibold font-lato hover:text-primary transition-colors duration-300"
                        onClick={(e) => toggleSubmenu(index, e)}
                      >
                        <span>{item.label}</span>
                        <motion.span
                          animate={{
                            rotate: activeSubmenu === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiChevronDown className="ml-2" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {activeSubmenu === index && (
                          <motion.div
                            className="pl-6 border-l-2 border-primary/20 space-y-2 bg-gray-50/50"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={subMenuVariants}
                          >
                            {item.subNav.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                variants={itemVariants}
                                custom={subIndex}
                              >
                                {renderMobileSubLink(subItem)}
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div
                      className="py-3"
                      custom={index}
                      variants={itemVariants}
                    >
                      {renderLink(item)}
                    </motion.div>
                  )}
                </motion.div>
              ))}

              <motion.div
                className="pt-4 pb-6"
                custom={navItems.length}
                variants={itemVariants}
              >
                <button
                  onClick={() => {
                    toggleBookingPopup();
                    setMobileMenuOpen(false);
                    setActiveSubmenu(null);
                  }}
                  className="w-full bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Book Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBookingPopup && <BookingPopup onClose={toggleBookingPopup} />}
      </AnimatePresence>
    </header>
  );
};

export default MainHeader;
