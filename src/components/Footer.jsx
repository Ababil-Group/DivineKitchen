import React from "react";
import logo from "/logo1.png?url";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaPinterest,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1a1a1a] pt-12 pb-8 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 pb-8 mb-8">
          <a href="/">
            <img
              src={logo}
              alt="Restaurant Logo"
              className="h-16 md:h-20 mb-4 md:mb-0 filter brightness-0 invert"
            />
          </a>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/divinektichen/"
              target="_blank"
              className="text-white hover:text-red-500 transition-colors"
            >
              <FaFacebook className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/divinektichen/"
              target="_blank"
              className="text-white hover:text-red-500 transition-colors"
            >
              <FaInstagram className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://www.youtube.com/@DivineKtichen"
              target="_blank"
              className="text-white hover:text-red-500 transition-colors"
            >
              <FaYoutube className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://www.tiktok.com/@divinektichen?lang=en"
              target="_blank"
              className="text-white hover:text-red-500 transition-colors"
            >
              <FaTiktok className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/106923463/admin/dashboard/"
              target="_blank"
              className="text-white hover:text-red-500 transition-colors"
            >
              <FaLinkedin className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://www.pinterest.com/divinektichen/"
              target="_blank"
              className="text-white hover:text-red-500 transition-colors"
            >
              <FaPinterest className="text-2xl md:text-3xl" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-64 md:h-80 rounded-lg overflow-hidden shadow-lg border-2 border-red-500">
              <iframe
                src="https://maps.google.com/maps?q=Ul.%20Hrvoja%20Macanovi%C4%87a%2044A%2C%2010000%20Zagreb%2C%20Croatia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                title="Divine Kitchen location - Ul. Hrvoja Macanovića 44A, Zagreb"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1 text-lg" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Address
                  </h3>
                  <p className="text-gray-300">
                    Ul. Hrvoja Macanovića 44A, 10000, Zagreb, Croatia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-red-500 mt-1 text-lg" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-300">+385 99 751 7865</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-red-500 mt-1 text-lg" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email Our Team
                  </h3>
                  <p className="text-gray-300">manager@divinekitchen.eu</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaClock className="text-red-500 mt-1 text-lg" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Working Hours
                  </h3>
                  <p className="text-gray-300">
                    Monday to Sunday:
                    <br />
                    12.00 AM - 11.00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="contact-us" className="col-span-5">
            <h3 className="text-lg font-semibold text-white mb-4">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Reason
                </label>
                <select
                  id="reason"
                  className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
                >
                  <option value="">Select a reason</option>
                  <option value="reservation">Reservation</option>
                  <option value="event">Event Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Write your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md transition-colors font-medium shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Divine Kitchen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
