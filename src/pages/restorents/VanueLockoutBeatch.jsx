import React from "react";
import {
  FaUsers,
  FaGlassCheers,
  FaCalendarAlt,
  FaUtensils,
} from "react-icons/fa";
import venue1 from "../../assets/images/menu/gal1.jpg?url";
import venue2 from "../../assets/images/menu/gal2.jpg?url";
import venue3 from "../../assets/images/menu/gal3.jpg?url";
import venue4 from "../../assets/images/menu/gal4.jpg?url";

const VanueLockoutBeatch = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-500 font-serif mb-4">
            Our Venue
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Catering to groups from intimate gatherings to grand celebrations,
            LockOut Beach offers versatile venue options for every occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              LockOut Beach is the perfect multi-functional space for corporate
              events, weddings, private celebrations, launches, engagement
              parties, milestone celebrations, and tailored group functions.
            </p>
            <p className="text-lg text-gray-700">
              From intimate gatherings of 10 to larger events of up to 1000
              guests, our beachfront venue transforms to suit your vision.
              Explore our venue choices below and contact us to plan your next
              special event.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaUsers className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Capacity</h4>
                  <p className="text-gray-600">10-1000 guests</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaGlassCheers className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Events</h4>
                  <p className="text-gray-600">Weddings, Corporate</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaCalendarAlt className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Availability</h4>
                  <p className="text-gray-600">Year-round</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaUtensils className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Catering</h4>
                  <p className="text-gray-600">Custom menus</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img
                src={venue1}
                alt="Beachfront venue"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img
                src={venue2}
                alt="Event setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img
                src={venue3}
                alt="Wedding venue"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img
                src={venue4}
                alt="Corporate event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const section = document.querySelector("#footer");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Enquire About Venue Hire
          </button>
        </div>
      </div>
    </section>
  );
};

export default VanueLockoutBeatch;
