import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import "./../styles/landing.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate(); // <-- useNavigate hook must be here

  const [selfAge, setSelfAge] = useState(18);
  const [spouseAge, setSpouseAge] = useState(18);
  const [sonAge, setSonAge] = useState(18);
  const [daughterAge, setDaughterAge] = useState(18);
  const [fatherAge, setFatherAge] = useState(18);
  const [motherAge, setMotherAge] = useState(18);
  const [fatherInLawAge, setFatherInLawAge] = useState(18);
  const [motherInLawAge, setMotherInLawAge] = useState(18);
  const [showMore, setShowMore] = useState(false);

  const [planType, setPlanType] = useState("Gold");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [premiumData, setPremiumData] = useState(null); // store API response
  const [pincodeError, setPincodeError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [selfAgeError, setSelfAgeError] = useState("");
  const [spouseAgeError, setSpouseAgeError] = useState("");

  const calculatePremium = async () => {
    let valid = true;

    // Reset errors
    setSelfAgeError("");
    setSpouseAgeError("");
    setPincodeError("");
    setPhoneError("");

    // Validate Pincode
    if (!/^\d{6}$/.test(pincode)) {
      setPincodeError("Please enter a valid 6-digit Pincode.");
      valid = false;
    }

    // Validate Mobile Number
    if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneError("Please enter a valid 10-digit Mobile Number.");
      valid = false;
    }
    if (!selfAge) {
      setSelfAgeError("Please select Self age.");
      valid = false;
    }
    if (!spouseAge) {
      setSpouseAgeError("Please select Spouse age.");
      valid = false;
    }

    if (!valid) return;

    try {
      const requestBody = {
        planType,
        selfAge: Number(selfAge),
        spouseAge: Number(spouseAge),
        sonAge: Number(sonAge),
        daughterAge: Number(daughterAge),

        pincode,
        phoneNumber,
        email,
        name,
      };
      console.log(requestBody);

      const response = await axios.post(
        "https://localhost:7270/api/PremiumCalculator/getqoute",
        requestBody
      );

      console.log("API Response:", response.data);
      setPremiumData(response.data); // save response to state
      // Navigate to result page
      navigate("/premium-result", { state: { data: response.data } });
    } catch (error) {
      console.error("Error fetching premium:", error);
    }
  };

  return (
    <>
      <Navbar />

      {/* Main container */}
      <div className="min-h-screen flex flex-col items-center justify-center px-1 py-4 m-1">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent p-3">
          {" "}
          InsureX Top leading Insurance company{" "}
        </h2>
        <div className="flex flex-col md:flex-row min-h-[400px] mb-10 ml-10 mr-10">
          {/* First Div */}
          {/* First Div */}
          <div className="flex-1   w-full items-center justify-center md:w-[600px] mr-10">
            <div className="flex p-4 rounded-lg w-full ">
              {/* Image (hidden on mobile) */}
              <div className="hidden md:block flex-shrink-0">
                <img
                  src="https://www.careinsurance.com/images/care-supreme-banner.png"
                  alt="Care Insurance"
                  width="161"
                  height="215"
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div
                className="flex flex-col justify-center ml-0 md:ml-6 flex-1 text-base leading-snug 
                                bg-blue-100 md:bg-transparent p-4 rounded-lg"
              >
                <span className="block font-medium ">
                  Get Exclusive 5% Discount
                </span>
                <span className="block">
                  <strong className="text-red-600">+ Up to 30%</strong> Renewal
                  Discount
                </span>
              </div>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center md:text-left">
              Buy Health Insurance Plans Online
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center">
              Starting at Just ₹21/day*
            </p>
            <div className="mt-4">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <li className="flex flex-col items-center">
                  <img
                    src="https://cms.careinsurance.com/upload_master/caresempages/upload/21500.svg"
                    alt=""
                    width="31"
                    height="36"
                    className="mb-2"
                  />
                  <p>
                    <strong>21,700+</strong> Cashless Healthcare Providers
                  </p>
                </li>

                <li className="flex flex-col items-center">
                  <img
                    src="https://cms.careinsurance.com/upload_master/caresempages/upload/38-lakh.svg"
                    alt=""
                    width="31"
                    height="36"
                    className="mb-2"
                  />
                  <p>
                    <strong>58 Lakh+</strong> Insurance Claims Settled
                  </p>
                </li>

                <li className="flex flex-col items-center">
                  <img
                    src="https://cms.careinsurance.com/upload_master/caresempages/upload/awarded.svg"
                    alt=""
                    width="31"
                    height="36"
                    className="mb-2"
                  />
                  <p>
                    <strong>Awarded</strong> as Claims Service Leader for the
                    Year
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Second Div */}
          <div className="w-full max-w-md border border-gray-300 bg-gray-100 p-4 rounded-lg mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center md:text-left mb-4">
              Members to be Insured
            </p>

            {/* Plan selection row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
              <label
                htmlFor="plans"
                className="text-md font-medium text-gray-700 mb-2 sm:mb-0"
              >
                Choose a Plan
              </label>
              <select
                id="plans"
                defaultValue="plan1"
                className="w-full sm:w-44 p-2.5 bg-white border border-gray-300 rounded-xl shadow-md
                  text-gray-700 font-medium appearance-none
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  hover:border-blue-400 transition duration-200 ease-in-out"
                style={{ backgroundImage: "none" }}
              >
                <option value="1">Plan 1</option>
                <option value="2">Plan 2</option>
                <option value="3">Plan 3</option>
                <option value="4">Plan 4</option>
                <option value="5">Plan 5</option>
                <option value="6">Plan 6</option>
              </select>
            </div>

            {/* Self & Spouse Dropdowns */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
              {/* Self Dropdown */}
              <div className="flex-1">
                <label
                  htmlFor="selfAge"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Self
                </label>
                <select
                  value={selfAge}
                  onChange={(e) => setSelfAge(e.target.value)}
                  id="selfAge"
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{ backgroundImage: "none" }}
                >
                  <option value="">Age</option>
                  {Array.from({ length: 99 - 18 + 1 }, (_, i) => {
                    const age = 18 + i;
                    return (
                      <option key={age} value={age}>
                        {age} yrs
                      </option>
                    );
                  })}
                </select>
                {selfAgeError && (
                  <span className="text-red-600 text-sm mt-1 block">
                    {selfAgeError}
                  </span>
                )}
              </div>

              {/* Spouse Dropdown */}
              <div className="flex-1">
                <label
                  htmlFor="spouseAge"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Spouse
                </label>
                <select
                  id="spouseAge"
                  value={spouseAge}
                  onChange={(e) => setSpouseAge(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{ backgroundImage: "none" }}
                >
                  <option value="">Age</option>
                  {Array.from({ length: 13 }, (_, i) => {
                    const age = 18 + i;
                    return (
                      <option key={age} value={age}>
                        {age} yrs
                      </option>
                    );
                  })}
                </select>
                {spouseAgeError && (
                  <span className="text-red-600 text-sm mt-1 block">
                    {spouseAgeError}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mb-2">
              {/* Son Dropdown */}
              <div className="flex-1">
                <label
                  htmlFor="sonAge"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Son
                </label>
                <select
                  id="sonAge"
                  value={sonAge}
                  onChange={(e) => setSonAge(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{ backgroundImage: "none" }}
                >
                  <option value="">Age</option>
                  {Array.from({ length: 13 }, (_, i) => {
                    const age = 5 + i;
                    return (
                      <option key={age} value={age}>
                        {age} yrs
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Daughter Dropdown */}
              <div className="flex-1">
                <label
                  htmlFor="daughterAge"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Daugther
                </label>
                <select
                  id="daughterAge"
                  value={daughterAge}
                  onChange={(e) => setDaughterAge(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{ backgroundImage: "none" }}
                >
                  <option value="">Age</option>
                  {Array.from({ length: 13 }, (_, i) => {
                    const age = 5 + i;
                    return (
                      <option key={age} value={age}>
                        {age} yrs
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* More Relations Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-4 py-2 bg-gradient-to-r text-white from-red-600 to-black rounded-lg shadow hover:bg-blue-700 transition"
              >
                {showMore ? "Hide More Relations" : "Add More Relations"}
              </button>
            </div>

            {/* Extra Dropdowns */}
            {showMore && (
              <div>
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 space-y-4 sm:space-y-0">
                  {/* Father */}
                  <div className="flex-1 min-w-[150px]">
                    <label
                      htmlFor="fatherAge"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Father
                    </label>
                    <select
                      id="fatherAge"
                      value={fatherAge}
                      onChange={(e) => setFatherAge(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      style={{ backgroundImage: "none" }}
                    >
                      <option value="">Age</option>
                      {Array.from({ length: 13 }, (_, i) => {
                        const age = 18 + i;
                        return (
                          <option key={age} value={age}>
                            {age} yrs
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {/* Mother */}
                  <div className="flex-1 min-w-[150px]">
                    <label
                      htmlFor="motherAge"
                      value={motherAge}
                      onChange={(e) => setMotherAge(e.target.value)}
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mother
                    </label>
                    <select
                      id="motherAge"
                      className="w-full p-2 border border-gray-300 rounded-lg shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      style={{ backgroundImage: "none" }}
                    >
                      <option value="">Age</option>
                      {Array.from({ length: 13 }, (_, i) => {
                        const age = 18 + i;
                        return (
                          <option key={age} value={age}>
                            {age} yrs
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 space-y-4 sm:space-y-0">
                  {/* Fatherinlaw */}
                  <div className="flex-1 min-w-[150px]">
                    <label
                      htmlFor="fatherInLawAge"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Father in Law
                    </label>
                    <select
                      id="fatherInLawAge"
                      value={fatherInLawAge}
                      onChange={(e) => setFatherInLawAge(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      style={{ backgroundImage: "none" }}
                    >
                      {" "}
                      <option value="">Age</option>
                      {Array.from({ length: 13 }, (_, i) => {
                        const age = 18 + i;
                        return (
                          <option key={age} value={age}>
                            {age} yrs
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {/* Motherinlaw */}
                  <div className="flex-1 min-w-[150px]">
                    <label
                      htmlFor="motherInLawAge"
                      value={motherInLawAge}
                      onChange={(e) => setMotherInLawAge(e.target.value)}
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mother In Law
                    </label>
                    <select
                      id="motherInLawAge"
                      className="w-full p-2 border border-gray-300 rounded-lg shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      style={{ backgroundImage: "none" }}
                    >
                      <option value="">Age</option>
                      {Array.from({ length: 13 }, (_, i) => {
                        const age = 18 + i;
                        return (
                          <option key={age} value={age}>
                            {age} yrs
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            )}
            {/* Enter Pincode & Mobile Number */}
            <div className="w-full mt-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Enter Pincode & Mobile Number
              </h2>

              <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
                {/* Pincode */}
                <div className="flex-1 min-w-[150px]">
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter Pincode"
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {pincodeError && (
                    <span className="text-red-600 text-sm mt-1 block">
                      {pincodeError}
                    </span>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="flex-1 min-w-[150px]">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter Mobile Number"
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {phoneError && (
                    <span className="text-red-600 text-sm mt-1 block">
                      {phoneError}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Calculate Premium Button */}
            <div className="mt-6">
              <button
                type="button"
                onClick={calculatePremium} // attach here
                className="w-full px-6 py-3 bg-gradient-to-r text-white from-red-600 to-black text-white font-semibold rounded-lg shadow-md 
                hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition"
              >
                Calculate Premium
              </button>
            </div>

            {/* WhatsApp Updates Checkbox */}
            <div className="flex items-center space-x-2 mt-6">
              <input
                id="whatsapp-updates"
                type="checkbox"
                defaultChecked
                className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label
                htmlFor="whatsapp-updates"
                className="flex items-center space-x-2 text-gray-700 font-medium cursor-pointer"
              >
                <span>Get updates on</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-green-500"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.1-.472-.149-.67.15-.197.297-.768.966-.941 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path
                    fillRule="evenodd"
                    d="M20 12c0 4.418-3.582 8-8 8a7.963 7.963 0 01-4.083-1.144L4 20l1.144-3.917A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-green-600 font-semibold">WhatsApp</span>
              </label>
            </div>
            <small>
              By clicking 'Calculate Premium', you agree to our T & C
            </small>
          </div>
        </div>
        {/* This is for the table */}
        <div class="container">
          <h2>Why Choose Care Supreme Health Plan</h2>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Key Features</th>
                  <th>Descriptions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sum Insured</td>
                  <td>7L / 10L / 15L / 25L / 50L / 100L</td>
                </tr>
                <tr>
                  <td>Room Rent</td>
                  <td>All Category Rooms Allowed</td>
                </tr>
                <tr>
                  <td>ICU Room Rent</td>
                  <td>No Limit on ICU Room Rent</td>
                </tr>
                <tr>
                  <td>Day Care Treatment</td>
                  <td>All Day Care Treatments covered up to Sum Insured</td>
                </tr>
                <tr>
                  <td>Pre-Hospitalization Medical Expenses</td>
                  <td>
                    Upto Sum Insured; Upto 60 days prior to Hospitalization
                  </td>
                </tr>
                <tr>
                  <td>Post-Hospitalization Medical Expenses</td>
                  <td>Upto Sum Insured; Upto 180 days after Discharge</td>
                </tr>
                <tr>
                  <td>Cumulative Bonus</td>
                  <td>
                    Upto 100% increase in Sum Insured; 50% of Sum Insured per
                    Year for 2 Years; Irrespective of Claim
                  </td>
                </tr>
                <tr>
                  <td>Cumulative Bonus Super</td>
                  <td>
                    Upto 500% increase in Sum Insured; 100% of Sum Insured per
                    Year for 5 Years; Irrespective of Claim
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer / content */}
        <div className="p-6 rounded-lg shadow-md text-gray-800 text-sm md:text-base">
          <p className="mb-1">
            Disclaimer: Information above is just for reference. Kindly read T &
            C of policy thoroughly, Do refer IRDAI guidelines for tax exemption
            conditions.
          </p>

          <p className="mb-1">
            <strong>5% digital discount</strong> applicable as per policy terms.
            Renewal discounts are offered if you meet the wellness goals set
            under the wellness benefit program.
          </p>

          <p className="mb-1">Number of Claims Settled as of Dec 2024</p>
          <p className="mb-1">
            Number of Cashless Healthcare Providers as of Feb'25
          </p>
          <p className="mb-1">#India Insurance Summit & Awards 2024.</p>

          <p className="mb-1">
            Care Health Insurance Limited Registered Office: 5th Floor, 19
            Chawla House, Nehru Place, New Delhi-110019. Correspondence Office:
            Unit No. 604 - 607, 6th Floor, Tower C, Unitech Cyber Park,
            Sector-39, Gurugram -122001 (Haryana). Website:
            www.careinsurance.com
          </p>

          <p>
            Disclaimer: This is only summary of selective features of product.
            For more details on risk factors, terms and conditions please read
            sales brochure carefully before concluding a sale. Please seek the
            advice of your insurance advisor if you require any further
            information or clarification. Insurance is a subject matter of
            solicitation. CIN:U66000DL2007PLC161503 UIN:CHIHLIP25047V022425
            IRDAI Registration Number - 148
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
