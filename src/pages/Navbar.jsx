import React from "react";
import logo from "../assets/InsureX.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0 ">
            <img
              className="h-14 w-auto rounded-full md:rounded-md"
              src={logo}
              alt="Logo"
            />
          </div>

          {/* Empty space (optional for alignment) */}
          <div className="flex-1 text-2xl font-bold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent ml-2.5">
            InsureX
          </div>
          
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
