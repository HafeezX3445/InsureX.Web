import React from "react";
import { Plane, RotateCcw, RotateCw, Recycle } from "lucide-react";
import homebanner from  "../../assets/homepage_banner_new.jpg" 

const Homepage2 = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mx-5 mt-5 p-5 rounded md:bg-[#FFFFFF] gap-6">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-1/2">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-medium mb-3">
            Ultimate Care
          </h1>

          {/* Discount / Promo Badge */}
      <div className="inline-block bg-blue-500 text-white text-sm sm:text-base font-bold px-3 py-1 rounded-full shadow-md mb-4">
      India’s First Moneyback Health Plan!
    </div>

          {/* Price */}
          <div className="md:text-2xl text-base sm:text-lg mb-4 px-4 py-4 ">
            Plan starting{" "}
            <span className="text-blue-500 font-semibold text-lg">
              @₹12/day*
            </span>
          </div>

          {/* Features List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 sm:px-4 py-2 mb-4">
            {/* Infinity Bonus */}
            <li className="flex items-center space-x-1">
              <svg
                className="w-6 h-6 text-blue-700 shrink-0"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <text
                  x="16"
                  y="21"
                  fontSize="14"
                  textAnchor="middle"
                  fill="currentColor"
                >
                  ∞
                </text>
              </svg>
              <div className="flex flex-row items-center space-x-1">
                <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                  Infinity Bonus
                </span>
                <span className="relative inline-block group">
                  <svg
                    className="w-4 h-4 text-blue-700 cursor-pointer"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                    />
                    <text
                      x="16"
                      y="21"
                      fontSize="14"
                      textAnchor="middle"
                      fill="white"
                      fontWeight="bold"
                    >
                      i
                    </text>
                  </svg>
                  <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block
          bg-blue-700 text-white text-xs rounded-lg px-3 py-2 w-52 sm:w-60 text-center shadow-lg z-10"
                  >
                    We boost 100% of your base sum insured annually upon
                    consecutive renewal whether or not you file a claim.
                  </span>
                </span>
              </div>
            </li>

            {/* Unlimited Automatic Recharge */}
            <li className="flex items-center space-x-1">
              <svg
                className="w-6 h-6 text-blue-700 shrink-0"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path
                  d="M16 3v4M16 25v4M3 16h4M25 16h4M7 7l3 3M22 22l3 3M7 25l3-3M22 10l3-3"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="flex flex-row items-center space-x-1">
                <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                  Unlimited Automatic Recharge
                </span>
                <span className="relative inline-block group">
                  <svg
                    className="w-4 h-4 text-blue-700 cursor-pointer"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                    />
                    <text
                      x="16"
                      y="21"
                      fontSize="14"
                      textAnchor="middle"
                      fill="white"
                      fontWeight="bold"
                    >
                      i
                    </text>
                  </svg>
                  <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block
          bg-blue-700 text-white text-xs rounded-lg px-3 py-2 w-52 sm:w-60 text-center shadow-lg z-10"
                  >
                    For every hospitalisation, the insured member can claim up
                    to the base sum insured.
                  </span>
                </span>
              </div>
            </li>

            {/* Instant Cover */}
            <li className="flex items-center space-x-1">
              <svg
                className="w-6 h-6 text-blue-700 shrink-0"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path
                  d="M16 4l12 8v16H4V12z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="flex flex-row items-center space-x-1">
                <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                  Instant Cover
                </span>
                <span className="relative inline-block group">
                  <svg
                    className="w-4 h-4 text-blue-700 cursor-pointer"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                    />
                    <text
                      x="16"
                      y="21"
                      fontSize="14"
                      textAnchor="middle"
                      fill="white"
                      fontWeight="bold"
                    >
                      i
                    </text>
                  </svg>
                  <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block
          bg-blue-700 text-white text-xs rounded-lg px-3 py-2 w-60 sm:w-72 text-center shadow-lg z-10"
                  >
                    Insured members having
                    Diabetes/Hypertension/Hyperlipidemia/Asthma/Obesity/Hypothyroidism/Coronary
                    Artery Disease (PTCA of 1 year) can file a hospitalisation
                    claim after an initial waiting period of 30 days.
                  </span>
                </span>
              </div>
            </li>

            {/* Unlimited E-consultation */}
            <li className="flex items-center space-x-1">
              <svg
                className="w-6 h-6 text-blue-700 shrink-0"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <rect
                  x="6"
                  y="8"
                  width="20"
                  height="16"
                  rx="2"
                  ry="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M10 12h12M10 16h12M10 20h6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <div className="flex flex-row items-center space-x-1">
                <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                  Unlimited E-consultation
                </span>
                <span className="relative inline-block group">
                  <svg
                    className="w-4 h-4 text-blue-700 cursor-pointer"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                    />
                    <text
                      x="16"
                      y="21"
                      fontSize="14"
                      textAnchor="middle"
                      fill="white"
                      fontWeight="bold"
                    >
                      i
                    </text>
                  </svg>
                  <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block
          bg-blue-700 text-white text-xs rounded-lg px-3 py-2 w-52 sm:w-60 text-center shadow-lg z-10"
                  >
                    Get unlimited e-consultations from general physicians
                    through mobile app.
                  </span>
                </span>
              </div>
            </li>
          </ul>

          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Text above input */}
            <p className="md:text-2xl text-gray-800 font-semibold mb-3 ">
              5% Exclusive Direct Discount
            </p>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row items-center w-full gap-3 mt-8">
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full sm:flex-grow py-2 px-4 border border-gray-300 rounded-md sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md sm:rounded-r-md transition duration-200 ease-in-out"
              >
                Get
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex flex-col w-full lg:w-1/2 relative mx-5 ">
          <img
            src={homebanner}
            alt="Health Plan"
            className="hidden md:block w-[500px] h-[250px] rounded-xl rounded-xl  z-0 px-4"
          />
          <div className="text-xl text-blue-700 mt-2 font-bold">
            Explore Other Options
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 sm:px-4 py-4">
            {/* Travel Expenses */}
            <div className="flex items-center gap-3 bg-white px-4 py-4 rounded-2xl shadow-md transition duration-200">
              <Plane className="w-6 h-6 text-blue-600 shrink-0" />
              <span className="text-base sm:text-lg font-medium text-gray-800">
                Travel Expenses
              </span>
            </div>

            {/* Renew Policy */}
            <div className="flex items-center gap-3 bg-white px-4 py-4 rounded-2xl shadow-md transition duration-200">
              <Recycle className="w-6 h-6 text-blue-600 shrink-0" />
              <span className="text-base sm:text-lg font-medium text-gray-800">
                Renew Policy
              </span>
            </div>

            {/* Port Existing Policy */}
            <div className="flex items-center gap-3 bg-white px-4 py-4 rounded-2xl shadow-md transition duration-200">
              <RotateCcw className="w-6 h-6 text-blue-600 shrink-0" />
              <span className="text-base sm:text-lg font-medium text-gray-800">
                Port Existing Policy
              </span>
            </div>

            {/* View All Plans */}
            <div className="flex items-center gap-3 bg-white px-4 py-4 rounded-2xl shadow-md transition duration-200">
              <RotateCw className="w-6 h-6 text-blue-600 shrink-0" />
              <span className="text-base sm:text-lg font-medium text-gray-800">
                View All Plans
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage2;
