import React from "react";
import logo from "../assets/logo.png";

export default function OptionBar() {
  return (
    <>
      {/* Top Option Bar */}
      <nav className="flex h-16 shadow-md font-medium relative">
        <div className="flex items-center w-1/2 bg-[#B91C1C] text-white px-6">
          <span className="ml-3 text-2xl font-semibold">
            Save tax up to ₹75,000~ u/s 80D
          </span>
        </div>

        <div className="flex items-center justify-center w-1/2 bg-[#F5E6CA] text-black px-6">
          <span className="text-base md:text-lg font-medium">
            Call Now: 1800-102-4499
          </span>
        </div>

        <svg
          className="absolute left-1/2 top-0 h-full w-12 -translate-x-1/2"
          viewBox="0 0 20 80"
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q10,40 0,80 L20,80 L20,0 Z" fill="#F5E6CA" />
        </svg>
      </nav>

      {/* Main Navigation Bar – Beige Version */}
      <nav className="relative h-16 flex items-center justify-between shadow-md px-6 bg-[#F5E6CA] text-[#B91C1C] transition-all duration-500 ease-in-out">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-12 w-auto rounded-md" src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-evenly flex-1 ml-8 font-medium">
          {/* Health Plans Dropdown */}
          <li className="group relative cursor-pointer px-3 py-2 rounded-lg hover:bg-[#B91C1C]/10 transition duration-300 ease-in-out">
            <span>Health Plans</span>
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-[#FFF3E0] shadow-xl rounded-xl p-6 w-[500px] animate-fadeIn">
              <div className="grid grid-cols-2 gap-3 text-[#B91C1C]">
                {[
                  "Individual Health Plan",
                  "Family Health Plan",
                  "Senior Citizen Plan",
                  "Maternity Plan",
                  "Critical Illness Cover",
                  "Top Up Health Insurance",
                  "Diabetes Insurance",
                  "Heart Care Plan",
                  "Cancer Cover",
                  "1 Crore Health Insurance",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block px-3 py-2 rounded-md hover:text-[#8B0000] transition-all duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </li>

          {/* Other Menu Items */}
          {["Renew Policy", "Contact Us"].map((item) => (
            <li
              key={item}
              className="cursor-pointer px-3 py-2 rounded-lg hover:bg-[#B91C1C]/10 transition duration-300 ease-in-out"
            >
              {item}
            </li>
          ))}

          {/* Support Dropdown */}
          <li className="group relative cursor-pointer px-3 py-2 rounded-lg hover:bg-[#B91C1C]/10 transition duration-300 ease-in-out">
            <span>Support</span>
            <div className="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-[#FFF3E0] shadow-xl rounded-xl p-4 w-48 animate-fadeIn">
              {["Help Center", "FAQs"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block px-3 py-2 rounded-md hover:text-[#8B0000] transition-all duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 rounded-md hover:bg-[#B91C1C]/10 transition duration-300">
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
