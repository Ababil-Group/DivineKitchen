import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiUsers,
  FiMail,
  FiX,
} from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingPopup = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({
    guests: 2,
    time: "",
    tablePreference: "",
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Booking submitted:", { date: selectedDate, ...formData });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          <div className="bg-gradient-to-br from-[#ff2709] to-[#ffaa13] p-6 text-white md:w-1/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Booking at Divine Kitchen</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="mb-4 flex items-center">
              <FiCalendar className="mr-2" size={20} />
              <span className="font-medium">Select Date</span>
            </div>

            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              minDate={new Date()}
              className="border-none bg-transparent text-white"
              calendarClassName="bg-transparent text-white border-none"
            />
          </div>

          <div className="p-6 md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="flex items-center text-gray-500 mb-1">
                  <FiUsers className="mr-2" />
                  <label htmlFor="guests" className="text-sm font-medium">
                    Number of Guests
                  </label>
                </div>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "person" : "people"}
                    </option>
                  ))}
                  <option value="9+">9+ people (large group)</option>
                </select>
              </div>

              <div className="relative">
                <div className="flex items-center text-gray-500 mb-1">
                  <FiClock className="mr-2" />
                  <label htmlFor="time" className="text-sm font-medium">
                    Time of Arrival
                  </label>
                </div>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">Select time</option>
                  {Array.from({ length: 11 }, (_, i) => {
                    const hour = i + 12;
                    return [`${hour}:00`, `${hour}:30`];
                  })
                    .flat()
                    .map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                </select>
              </div>

              <div className="relative">
                <div className="flex items-center text-gray-500 mb-1">
                  <FiUsers className="mr-2" />
                  <label
                    htmlFor="tablePreference"
                    className="text-sm font-medium"
                  >
                    Table Preference
                  </label>
                </div>
                <select
                  id="tablePreference"
                  name="tablePreference"
                  value={formData.tablePreference}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">No preference</option>
                  <option value="window">Window table</option>
                  <option value="outside">Outside terrace</option>
                  <option value="quiet">Quiet corner</option>
                  <option value="center">Center of restaurant</option>
                </select>
              </div>

              <div className="relative">
                <div className="flex items-center text-gray-500 mb-1">
                  <FiUser className="mr-2" />
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <div className="flex items-center text-gray-500 mb-1">
                  <FiMail className="mr-2" />
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div className="pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Confirm Booking
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingPopup;
