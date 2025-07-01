import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCocktail,
  FaUtensils,
  FaWineGlassAlt,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaWineBottle,
  FaCoffee,
} from "react-icons/fa";
import { MdLocalDrink, MdOutlineRestaurant } from "react-icons/md";
import manestach from "../assets/images/home/divinebird2.png?url";
// Import your menu images
import foodMenu from "../assets/images/restorant/food-menu.jpg";
import drinkMenu from "../assets/images/restorant/drink-menu.webp";
import wineMenu from "../assets/images/restorant/wine-menu.webp";
import cocktailMenu from "../assets/images/restorant/cocktail-menu.jpg";

// fullitems list image
import onionSoupImg from "../assets/images/menulist/onion-soup.jpeg";
import goatCheeseImg from "../assets/images/menulist/goat-cheese.jpg";
import coqAuVinImg from "../assets/images/menulist/coq-au-vin.webp";
import beefBourguignonImg from "../assets/images/menulist/beef-bourguignon.jpeg";
import ratatouilleImg from "../assets/images/menulist/ratatouille.jpg";
import kirRoyalImg from "../assets/images/menulist/kir-royal.jpg";
import french75Img from "../assets/images/menulist/french-75.avif";
import sidecarImg from "../assets/images/menulist/sidecar.webp";
import pastisImg from "../assets/images/menulist/pastis.webp";
import bordeauxImg from "../assets/images/menulist/bordeaux.jpg";
import burgundyImg from "../assets/images/menulist/burgundy.jpeg";
import chablisImg from "../assets/images/menulist/chablis.webp";
import sancerreImg from "../assets/images/menulist/sancerre.jpg";
import cafeAuLaitImg from "../assets/images/menulist/cafe-au-lait.webp";
import espressoImg from "../assets/images/menulist/espresso.jpeg";
import oranginaImg from "../assets/images/menulist/orangina.jpg";
import eauPetillanteImg from "../assets/images/menulist/eau-petillante.jpg";
import { GiSodaCan } from "react-icons/gi";

const MenuLists = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    {
      id: "food",
      title: "Coastal Cuisine",
      icon: <FaUtensils className="text-2xl" />,
      image: foodMenu,
      description: "Fresh seafood and Mediterranean-inspired dishes",
      featuredItems: [
        "Starters: Tuna Tartare, Grilled Octopus",
        "Mains: Lobster Risotto, Sea Bass en Papillote",
        "Desserts: Passionfruit Cheesecake, Chocolate Lava Cake",
      ],
      fullItems: [
        {
          name: "Soupe à l'Oignon",
          description:
            "A rich and hearty French onion soup made with caramelized onions, beef broth, and topped with toasted bread and melted Gruyère cheese. Perfect for chilly evenings.",
          icon: <FaUtensils />,
          image: onionSoupImg,
        },
        {
          name: "Salade de Chèvre Chaud",
          description:
            "A warm goat cheese salad featuring toasted bread rounds topped with creamy chèvre, served over a bed of greens with a drizzle of honey or vinaigrette.",
          icon: <FaUtensils />,
          image: goatCheeseImg,
        },
        {
          name: "Coq au Vin",
          description:
            "A traditional French dish of chicken slowly braised in red wine with mushrooms, garlic, onions, and herbs comforting, flavorful, and deeply aromatic.",
          icon: <FaUtensils />,
          image: coqAuVinImg,
        },
        {
          name: "Boeuf Bourguignon",
          description:
            "A slow-cooked beef stew originating from Burgundy, made with red wine, bacon, mushrooms, carrots, and onions. Rich and deeply satisfying.",
          icon: <FaUtensils />,
          image: beefBourguignonImg,
        },
        {
          name: "Ratatouille",
          description:
            "A Provençal vegetable medley of zucchini, eggplant, peppers, tomatoes, and herbs light, colorful, and bursting with fresh garden flavors.",
          icon: <FaUtensils />,
          image: ratatouilleImg,
        },
      ],
    },
    {
      id: "cocktails",
      title: "Signature Cocktails",
      icon: <FaCocktail className="text-2xl" />,
      image: cocktailMenu,
      description: "Crafted with local ingredients and tropical flavors",
      featuredItems: [
        "LockOut Sunset: Rum, passionfruit, lime, coconut",
        "Sea Breeze Martini: Gin, elderflower, cucumber, sea salt",
        "Golden Sands: Tequila, mango, chili, lime",
      ],
      fullItems: [
        {
          name: "Kir Royal",
          description:
            "A sophisticated blend of Champagne and crème de cassis — light, bubbly, and effortlessly elegant.",
          icon: <FaCocktail />,
          image: kirRoyalImg,
        },
        {
          name: "French 75",
          description:
            "A sparkling cocktail containing gin, lemon juice, sugar, and Champagne. Crisp, citrusy, and refined.",
          icon: <FaCocktail />,
          image: french75Img,
        },
        {
          name: "Sidecar",
          description:
            "Brandy, orange liqueur, and lemon juice shaken to perfection. Bold and balanced with a citrus kick.",
          icon: <FaCocktail />,
          image: sidecarImg,
        },
        {
          name: "Pastis",
          description:
            "Anise-flavored liqueur served with water and ice — refreshing and distinctly French.",
          icon: <FaCocktail />,
          image: pastisImg,
        },
      ],
    },
    {
      id: "wine",
      title: "Wine Selection",
      icon: <FaWineGlassAlt className="text-2xl" />,
      image: wineMenu,
      description: "Curated international and local wines",
      featuredItems: [
        "Whites: Chablis, Sauvignon Blanc, Albariño",
        "Reds: Malbec, Pinot Noir, Châteauneuf-du-Pape",
        "Sparkling: Prosecco, Champagne, Cava",
      ],
      fullItems: [
        {
          name: "Bordeaux",
          description:
            "A blend of Merlot, Cabernet Sauvignon, and Cabernet Franc; bold and structured.",
          icon: <FaWineBottle />,
          image: bordeauxImg,
        },
        {
          name: "Burgundy (Pinot Noir)",
          description: "Elegant and earthy with red fruit notes.",
          icon: <FaWineBottle />,
          image: burgundyImg,
        },
        {
          name: "Chablis (Burgundy)",
          description: "Crisp, dry Chardonnay with mineral notes.",
          icon: <FaWineBottle />,
          image: chablisImg,
        },
        {
          name: "Sancerre (Loire Valley)",
          description: "Zesty Sauvignon Blanc with citrus and herbal tones.",
          icon: <FaWineBottle />,
          image: sancerreImg,
        },
      ],
    },
    {
      id: "drinks",
      title: "Beverages",
      icon: <MdOutlineRestaurant className="text-2xl" />,
      image: drinkMenu,
      description: "Refreshing non-alcoholic options",
      featuredItems: [
        "Fresh Juices: Watermelon, Pineapple, Orange",
        "Signature Mocktails: Virgin Mojito, Berry Spritz",
        "Premium Teas & Coffees",
      ],
      fullItems: [
        {
          name: "Café au Lait",
          description:
            "A classic French coffee drink made with equal parts strong brewed coffee and steamed milk. Smooth, comforting, and typically enjoyed at breakfast.",
          icon: <FaCoffee />,
          image: cafeAuLaitImg,
        },
        {
          name: "Espresso",
          description:
            "A bold, concentrated shot of coffee served in a small cup. A staple in French cafés—strong, rich, and perfect for a quick caffeine boost.",
          icon: <FaCoffee />,
          image: espressoImg,
        },
        {
          name: "Orangina",
          description:
            "A sparkling citrus beverage made with orange juice and pulp. Lightly sweet with a unique taste and recognizable pear-shaped bottle.",
          icon: <GiSodaCan />,
          image: oranginaImg,
        },
        {
          name: "Eau Pétillante",
          description:
            "French sparkling mineral water—crisp, refreshing, and often served at restaurants as an alternative to still water.",
          icon: <MdLocalDrink />,
          image: eauPetillanteImg,
        },
      ],
    },
  ];

  const toggleMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const openFullMenu = (menu) => {
    setSelectedMenu(menu);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    <section id="our-menus" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-8 font-serif text-[#ff2709]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Menus
      </motion.h2>
      <div className="flex flex-col items-center justify-center mb-16">
        <motion.img
          variants={scaleUp}
          src={"/logo3.png"}
          alt="Divine Kitchen decorative element"
          className="mx-auto h-20 w-auto opacity-80"
        />

        <motion.p
          variants={fadeIn}
          className="mt-4 text-gray-600 italic tracking-wider font-semibold uppercase text-2xl"
        >
          "Where every dish tells a story"
        </motion.p>
      </div>
      <div className="space-y-6">
        {menuItems.map((menu) => (
          <motion.div
            key={menu.id}
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className={`p-6 flex items-center justify-between cursor-pointer transition-colors ${
                activeMenu === menu.id
                  ? "bg-[#ff2709] text-white"
                  : "bg-white text-[#000]"
              }`}
              onClick={() => toggleMenu(menu.id)}
            >
              <div className="flex items-center">
                <div
                  className={`p-3 rounded-full mr-4 ${
                    activeMenu === menu.id
                      ? "bg-white text-[#ff2709]"
                      : "bg-[#ffaa13] text-white"
                  }`}
                >
                  {menu.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{menu.title}</h3>
                  <p
                    className={
                      activeMenu === menu.id ? "text-white/90" : "text-gray-600"
                    }
                  >
                    {menu.description}
                  </p>
                </div>
              </div>
              {activeMenu === menu.id ? (
                <FaChevronUp className="text-xl" />
              ) : (
                <FaChevronDown className="text-xl" />
              )}
            </div>

            {activeMenu === menu.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-[#f8f8f8] overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 p-6">
                  <div>
                    <img
                      src={menu.image}
                      alt={menu.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#ff2709] mb-4">
                      Featured Items
                    </h4>
                    <ul className="space-y-3">
                      {menu.featuredItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="block w-2 h-2 bg-[#ffaa13] rounded-full mt-2 mr-3"></span>
                          <span className="text-[#000]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => openFullMenu(menu)}
                      className="mt-6 bg-[#ff2709] hover:bg-[#ff3709] text-white py-2 px-6 rounded-full text-sm transition-colors shadow-md cursor-pointer"
                    >
                      View Full Menu
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Full Menu Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMenu && (
          <motion.div
            className="fixed inset-0 bg-black/60 opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-[#ff2709]">
                    {selectedMenu.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-[#ff2709]"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                <div className="space-y-8">
                  {selectedMenu.fullItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-6 p-4 border-b border-gray-100 last:border-0"
                    >
                      {/* Image or Icon Container */}
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-lg shadow-md"
                          />
                        ) : (
                          <div className="bg-[#ffaa13] text-white p-8 rounded-lg flex items-center justify-center h-48">
                            {item.icon || (
                              <MdOutlineRestaurant className="text-4xl" />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-[#000] mb-2">
                          {item.name}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={closeModal}
                    className="bg-[#ff2709] hover:bg-[#ff3709] text-white py-3 px-8 rounded-full text-sm transition-colors shadow-md"
                  >
                    Close Menu
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuLists;
