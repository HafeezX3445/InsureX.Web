import React from "react";
import logo from "../assets/InsureX.png";

const NavbarRoundedDivider = () => {
  return (
    <nav className="flex h-16 shadow-md font-medium relative">
            <div className="flex items-center w-1/2 bg-[#B91C1C] text-white px-6">
              <img className="h-12 w-auto rounded-md" src={logo} alt="Logo" />
              <span className="ml-3 text-2xl font-semibold">InsureX</span>
            </div>
      
            <div className="flex items-center justify-center w-1/2 bg-[#F5E6CA] text-black px-6">
              <span className="text-base md:text-lg font-medium">Call Now: 1800-102-4499</span>
            </div>
      
            {/* Wave SVG divider */}
            <svg
              className="absolute left-1/2 top-0 h-full w-12 -translate-x-1/2"
              viewBox="0 0 20 80"
              preserveAspectRatio="none"
            >
              <path d="M0,0 Q10,40 0,80 L20,80 L20,0 Z" fill="#F5E6CA" />
            </svg>
          </nav>
  );
};

export default NavbarRoundedDivider;
