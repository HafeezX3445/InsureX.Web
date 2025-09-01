import React from "react";
import logo from "../assets/InsureX.png";

const Navbar = () => {
  return (
    <nav className="relative h-14 flex shadow-md">
      {/* Left Section – Deep Red Tone */}
      <div className="flex items-center w-1/2 bg-[#8B0000] relative">
        <img className="h-12 w-auto rounded-md ml-4" src={logo} alt="Logo" />
        <span className="ml-3 text-2xl font-semibold text-white">InsureX</span>

        {/* Divider Arrow */}
        <div
          className="absolute top-0 right-[-20px] w-10 h-full bg-[#8B0000]"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        ></div>
      </div>

      {/* Right Section – Dark Charcoal Tone */}
      <div className="w-1/2 bg-[#1C1C1C] flex items-center justify-end px-6">
        <ul className="flex gap-8 text-white text-base font-medium">
          {["Home", "Plans", "Support", "Contact"].map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer px-3 py-1 rounded-md transition-all duration-300 hover:bg-red-600 hover:bg-opacity-40 hover:text-red-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
