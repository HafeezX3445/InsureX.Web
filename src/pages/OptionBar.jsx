import React from "react";
import logo from "../assets/logo.png";

export default function NavbarBlue() {
  return (
    <>
      {/* Top Option Bar */}
      <nav className="flex h-12 shadow font-medium relative">
        <div className="flex items-center w-1/2 bg-[#2C7BE5] text-white px-6">
          <span className="ml-3 text-base font-semibold">
            Save tax up to ₹75,000~ u/s 80D
          </span>
        </div>
        <div className="flex items-center justify-center w-1/2 bg-[#E7F0FD] text-[#2C7BE5] px-6">
          <span className="text-sm md:text-base font-medium">
            Call Now: 1800-102-4499
          </span>
        </div>
        <svg
          className="absolute left-1/2 top-0 h-full w-10 -translate-x-1/2"
          viewBox="0 0 20 80"
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q10,40 0,80 L20,80 L20,0 Z" fill="#E7F0FD" />
        </svg>
      </nav>

      {/* Main Navigation Bar */}
      <nav className="relative h-16 flex items-center justify-between shadow-md px-6 bg-white text-[#2C7BE5] transition-all duration-500 ease-in-out">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-12 w-auto rounded-md" src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 ml-auto font-medium">
          <li className="group relative cursor-pointer px-3 py-2 rounded-lg hover:bg-[#1A5CC0]/10 transition duration-300">
            <span>Health Plans</span>
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-[#F0F7FF] shadow-xl rounded-xl p-6 w-[500px] animate-fadeIn z-50">
              <div className="grid grid-cols-2 gap-3 text-[#2C7BE5]">
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
                    className="block px-3 py-2 rounded-md hover:text-[#1A5CC0] transition-all duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </li>

          {["Renew Policy", "Contact Us"].map((item) => (
            <li
              key={item}
              className="cursor-pointer px-3 py-2 rounded-lg hover:bg-[#1A5CC0]/10 transition duration-300"
            >
              {item}
            </li>
          ))}

          <li className="group relative cursor-pointer px-3 py-2 rounded-lg hover:bg-[#1A5CC0]/10 transition duration-300">
            <span>Support</span>
            <div className="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-[#F0F7FF] shadow-xl rounded-xl p-4 w-48 animate-fadeIn z-50">
              {["Help Center", "FAQs"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block px-3 py-2 rounded-md hover:text-[#1A5CC0] transition-all duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button className="p-2 rounded-md hover:bg-[#1A5CC0]/10 transition duration-300">
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
