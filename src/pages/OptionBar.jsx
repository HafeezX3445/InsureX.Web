import React from "react";
import logo from "../assets/logo.png";

export default function OptionBar() {
  return (
    <>
      {/* Top Bar */}
      <nav className="relative h-14 flex shadow-md">
        {/* Left Section */}
        <div className="flex items-center w-[70%] bg-gradient-to-r from-[#8B0000] to-[#1C1C1C] relative">
          <span className="ml-4 sm:ml-6 md:ml-10 lg:ml-16 text-xs md:text-xl font-semibold text-white">
            Save tax up to ₹75,000~ u/s 80D
          </span>
          <div
            className="hidden md:block absolute top-0 right-[-30px] w-12 h-full bg-gradient-to-r from-[#8B0000] to-[#1C1C1C]"
            style={{ clipPath: "polygon(0 0, 80% 50%, 0 100%)" }}
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center w-[30%] bg-gradient-to-r from-[#1C1C1C] to-black text-white text-sm md:text-base">
          <span className="ml-4 sm:ml-6 md:ml-10 lg:ml-16 text-xs md:text-xl font-semibold text-white">
            Buy New Policy : 1800-102-XXXX
          </span>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="relative h-16 flex items-center justify-between shadow-md px-6 bg-gradient-to-r from-[#B22222] via-[#8B0000] to-[#660000] text-white transition-all duration-500 ease-in-out">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-12 w-auto rounded-md" src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-evenly flex-1 ml-8 font-medium">
          {/* Health Plans Dropdown */}
          <li className="group relative cursor-pointer px-3 py-2 rounded-lg hover:bg-red-600/30 transition duration-300 ease-in-out">
            <span>Health Plans</span>
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white/95 backdrop-blur-lg shadow-xl rounded-xl p-6 w-[500px] animate-fadeIn">
              <div className="grid grid-cols-2 gap-3 text-gray-800">
                {[
                  "Health Insurance Plans",
                  "Family Health Insurance",
                  "Individual Health Insurance",
                  "1 Crore Health Insurance Plan",
                  "Senior Citizen Health Insurance",
                  "Maternity Health Insurance",
                  "Diabetes Cover",
                  "Heart Insurance",
                  "Super Top Up",
                  "Cancer Insurance",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block px-3 py-2 rounded-md bg-red-50 text-gray-800 hover:bg-red-100 hover:text-red-600 transition-all duration-300 shadow-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </li>

          {/* Other Menu Items */}
          {["Renew", "Contact Us"].map((item) => (
            <li
              key={item}
              className="cursor-pointer px-3 py-2 rounded-lg hover:bg-red-600/30 transition duration-300 ease-in-out"
            >
              {item}
            </li>
          ))}

          {/* Support Dropdown */}
          <li className="group relative cursor-pointer px-3 py-2 rounded-lg hover:bg-red-600/30 transition duration-300 ease-in-out">
            <span>Support</span>
            <div className="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-white/95 backdrop-blur-lg shadow-xl rounded-xl p-4 w-48 animate-fadeIn">
              {["Help Center", "FAQs"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block px-3 py-2 rounded-md bg-red-50 text-gray-800 hover:bg-red-100 hover:text-red-600 transition-all duration-300 shadow-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 rounded-md hover:bg-red-600/30 transition duration-300">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Fade-in Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.35s ease-in-out;
          }
        `}
      </style>
    </>
  );
}
