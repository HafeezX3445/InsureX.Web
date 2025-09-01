import React from "react";
import logo from "../assets/InsureX.png";

const OptionBar = () => {
  return (
    <>
      <nav className="relative h-14 flex shadow-md">
        {/* Left Section with Dark Red Gradient (70%) */}
        <div className="flex items-center w-[70%] bg-gradient-to-r from-[#8B0000] to-[#1C1C1C] relative ">
          <span className="ml-4 sm:ml-6 md:ml-10 lg:ml-16 text-xs md:text-xl font-semibold text-white">
            Save tax up to ₹75,000~ u/s 80D
          </span>

          {/* Divider Arrow */}
          <div
            className="hidden md:block absolute top-0 right-[-30px] w-12 h-full bg-gradient-to-r from-[#8B0000] to-[#1C1C1C]"
            style={{ clipPath: "polygon(0 0, 80% 50%, 0 100%)" }}
          ></div>
        </div>

        {/* Right Section – Subtle Black Blend (30%) */}
        <div className="flex items-center justify-center w-[30%] bg-gradient-to-r from-[#1C1C1C] to-[#000000] text-white text-sm md:text-base">
          <span className="ml-4 sm:ml-6 md:ml-10 lg:ml-16 text-xs md:text-xl font-semibold text-white">
            Buy New Policy : 1800-102-XXXX
          </span>
        </div>
      </nav>

      {/* NAV BAR options*/}
<nav className="relative h-14 flex items-center justify-between shadow-md mt-2 px-6">
  {/* Logo Left */}
  <div className="flex items-center">
    <img className="h-12 w-auto rounded-md" src={logo} alt="Logo" />
  </div>

  {/* Dropdowns Right */}
  <div className="flex items-center space-x-6">
    {/* Dropdown 1 */}
    <select className="px-3 py-2 rounded-md border text-sm">
      <option>Option 1</option>
      <option>Option 2</option>
    </select>

    {/* Dropdown 2 */}
    <select className="px-3 py-2 rounded-md border text-sm">
      <option>Option A</option>
      <option>Option B</option>
    </select>

    {/* Dropdown 3 */}
    <select className="px-3 py-2 rounded-md border text-sm">
      <option>Choice X</option>
      <option>Choice Y</option>
    </select>

    {/* Dropdown 4 */}
    <select className="px-3 py-2 rounded-md border text-sm">
      <option>Item I</option>
      <option>Item II</option>
    </select> 
  </div>
</nav>

    </>
  );
};

export default OptionBar;
