import React from "react";
import logo from "../assets/InsureX.png";

const Navbar = () => {
  return (
    <nav className="relative h-14 flex shadow-md">
      {/* Left Section with Dark Red Gradient */}
      <div className="flex items-center w-1/2 bg-gradient-to-r from-[#8B0000] to-[#1C1C1C] relative">
        <img className="h-12 w-auto rounded-md ml-4" src={logo} alt="Logo" />
        <span className="ml-3 text-2xl font-semibold text-white">InsureX</span>

        {/* Divider Arrow */}
        <div
          className="absolute top-0 right-[-20px] w-10 h-full bg-gradient-to-r from-[#8B0000] to-[#1C1C1C]"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        ></div>
      </div>

      {/* Right Section – Subtle Black Blend */}
      <div className="w-1/2 bg-gradient-to-r from-[#1C1C1C] to-[#000000]"></div>
    </nav>
  );
};

export default Navbar;
