import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import "./../styles/landing.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../config/axios";
import { toast } from "react-toastify";
import { Dropdown } from "primereact/dropdown";

const LandingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = [
    { label: "Plan 1", value: 1 },
    { label: "Plan 2", value: 2 },
    { label: "Plan 3", value: 3 },
    { label: "Plan 4", value: 4 },
    { label: "Plan 5", value: 5 },
    { label: "Plan 6", value: 6 },
  ];

  const ageOptions = Array.from({ length: 99 - 18 + 1 }, (_, i) => {
    const age = 18 + i;
    return { label: `${age} yrs`, value: age };
  });

  const sondaughterAgeOptions = Array.from({ length: 95 }, (_, i) => {
    const age = 5 + i;
    return { label: `${age} yrs`, value: age };
  });

  const navigate = useNavigate();
  const [selfAge, setSelfAge] = useState("");
  const [spouseAge, setSpouseAge] = useState("");
  const [sonAge, setSonAge] = useState("");
  const [daughterAge, setDaughterAge] = useState("");
  const [sonAge1, setSonAge1] = useState("");
  const [daughterAge1, setDaughterAge1] = useState("");
  const [fatherAge, setFatherAge] = useState("");
  const [motherAge, setMotherAge] = useState("");
  const [fatherInLawAge, setFatherInLawAge] = useState("");
  const [motherInLawAge, setMotherInLawAge] = useState("");
  const [showMore, setShowMore] = useState(false);

  const [planType, setPlanType] = useState("Gold");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [premiumData, setPremiumData] = useState(null);
  const [pincodeError, setPincodeError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [selfAgeError, setSelfAgeError] = useState("");
  const [spouseAgeError, setSpouseAgeError] = useState("");

  //api handler
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null); // store system OTP
  const [otpVerified, setOtpVerified] = useState(false);

  const handleCalculateClick = () => {
        let valid = true;

    const validateFamilyMembers = (selectedMembers) => {
      const chosen = selectedMembers.filter((m) => m !== "");
      if (chosen.length < 1) {
        toast.error("Please select at least 1 family member");
        return false;
      }
      if (chosen.length > 4) {
        toast.error("You can select up to 4 family members only");
        return false;
      }
      return true;
    };

    // Reset errors
    setSelfAgeError("");
    setSpouseAgeError("");
    setPincodeError("");
    setPhoneError("");

    if (!/^\d{6}$/.test(pincode)) {
      setPincodeError("Please enter a valid 6-digit Pincode.");
      valid = false;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneError("Please enter a valid 10-digit Mobile Number.");
      valid = false;
    }
    // Count how many are selected
    const selectedCount = [
      selfAge,
      spouseAge,
      sonAge,
      daughterAge,
      sonAge1,
      daughterAge1,
      fatherAge,
      motherAge,
      fatherInLawAge,
      motherInLawAge,
    ].filter(Boolean).length;

    if (selectedCount < 1) {
      toast.error("Please select age for at least one person.");
      valid = false;
    }
    if (selectedCount > 4) {
      toast.error("You can select up to 4 members only.");
      valid = false;
    }

    if (!valid) return;
    // Step 1: If no OTP is generated yet → generate one
    if (!generatedOtp) {
      // const newOtp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
      const newOtp = "123456";
      setGeneratedOtp(newOtp);
      // setOtpError("OTP has been generated. Please enter it to proceed.");
      console.log("Generated OTP (for testing):", newOtp); // remove in production
      return;
    }

    // Step 2: If OTP not entered → show error
    if (!otp) {
      setOtpError("Please enter the OTP.");
      return;
    }

    // Step 3: Validate OTP format
    if (!/^\d{6}$/.test(otp)) {
      setOtpError("Please enter a valid 6-digit OTP.");
      return;
    }

    // Step 4: Check OTP match
    if (otp !== generatedOtp) {
      setOtpError("Invalid OTP. Please try again.");
      return;
    }

    // Step 5: Success → clear error and call API
    setOtpError("");
    setOtpVerified(true);


    calculatePremium(); // your existing function
  };

  const calculatePremium = async () => {

    try {
      setLoading(true);
      setApiError("");
      const requestBody = {
        planType,
        selfAge: Number(selfAge),
        spouseAge: Number(spouseAge),
        sonAge: Number(sonAge),
        daughterAge: Number(daughterAge),
        sonAge1: Number(sonAge1),
        daughterAge1: Number(daughterAge1),
        motherAge: Number(motherAge),
        fatherAge: Number(fatherAge),
        motherInLawAge: Number(motherInLawAge),
        fatherInLawAge: Number(fatherInLawAge),
        pincode,
        phoneNumber,
        email,
        name,
      };

      console.log(requestBody);

      const response = await api.post(
        "PremiumCalculator/getqoute",
        requestBody
      );

      console.log("API Response:", response.data);
      setPremiumData(response.data);
      navigate("/premium-result", { state: { data: response.data } });
    } catch (error) {
      let message = "Something went wrong. Please try again.";
      if (error.response) {
        message = `Server Error (${error.response.status})`;
      } else if (error.request) {
        message = "Server not reachable. Please check your connection.";
      } else {
        message = error.message;
      }
      setApiError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Main container */}
      <div className="min-h-screen flex flex-col items-center justify-center px-1 py-4 m-1">
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl 
            font-bold mb-6 
            bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent 
            p-3 leading-snug 
            text-center
          "
        >
          InsureX Top Leading Insurance Company
        </h2>
        <div className="flex flex-col md:flex-row min-h-[400px] mb-10 ml-10 mr-10">
          {/* First Div */}
          {/* First Div */}
          <div
            className={`flex-1 w-full md:w-[600px] mr-10 transition-all duration-300 
    ${
      showMore
        ? "flex-1 w-full md:w-[600px] mr-10 transition-all duration-300  md:mt-[200px]"
        : ""
    }`}
          >
            {" "}
            <div className="flex p-4 rounded-lg w-full ">
              {/* Image (hidden on mobile) */}
              <div className="hidden md:block flex-shrink-0">
                <img
                  src="https://www.careinsurance.com/images/care-supreme-banner.png"
                  alt="InsureX"
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
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 text-center mb-4">
              Members to be Insured
            </p>

            {/* Plan selection row */}
            <div className="flex flex-col sm:flex-row sm:items-center mb-4">
              {/* Label */}
              <label
                htmlFor="plans"
                className="text-md font-medium text-gray-700 mb-2 sm:mb-0 sm:mr-4"
              >
                Choose a Plan
              </label>

              {/* Dropdown */}
              <div className="w-full sm:w-auto sm:flex-1 sm:flex sm:justify-end">
                <Dropdown
                  id="plans"
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.value)}
                  options={plans}
                  placeholder="Select Plan"
                  className="w-full sm:w-64"
                  showClear
                />
              </div>
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
                <Dropdown
                  id="selfAge"
                  value={selfAge}
                  onChange={(e) => setSelfAge(e.value)}
                  options={ageOptions}
                  placeholder="Age"
                  className="w-full"
                  showClear={!!selfAge}
                />
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
                <Dropdown
                  id="spouseAge"
                  value={spouseAge}
                  onChange={(e) => setSpouseAge(e.value)}
                  options={ageOptions} // ✅ Same options
                  placeholder="Age"
                  className="w-full"
                  showClear={!!spouseAge}
                />

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
                <Dropdown
                  id="sonAge"
                  value={sonAge}
                  onChange={(e) => setSonAge(e.value)}
                  options={sondaughterAgeOptions}
                  placeholder="Age"
                  className="w-full"
                  showClear={!!sonAge}
                />
              </div>

              {/* Daughter Dropdown */}
              <div className="flex-1">
                <label
                  htmlFor="daughterAge"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Daugther
                </label>
                <Dropdown
                  id="daughterAge"
                  value={daughterAge}
                  onChange={(e) => setDaughterAge(e.value)}
                  options={sondaughterAgeOptions}
                  placeholder="Age"
                  className="w-full"
                  showClear={!!daughterAge}
                />
              </div>
            </div>

            {/* More Relations Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowMore(!showMore)}
className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-lg shadow hover:from-blue-700 hover:to-indigo-900 transition"
              >
                {showMore ? "Hide More Relations" : "Add More Relations"}
              </button>
            </div>

            {/* Extra Dropdowns */}
            {showMore && (
              <div>
                <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mb-2">
                  {/* Son Dropdown */}
                  <div className="flex-1">
                    <label
                      htmlFor="sonAge"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Son
                    </label>
                    <Dropdown
                      id="sonAge1"
                      value={sonAge1}
                      onChange={(e) => setSonAge1(e.value)}
                      options={sondaughterAgeOptions}
                      placeholder="Age"
                      className="w-full"
                      showClear={!!sonAge1}
                    />
                  </div>

                  {/* Daughter Dropdown */}
                  <div className="flex-1">
                    <label
                      htmlFor="daughterAge1"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Daugther
                    </label>
                    <Dropdown
                      id="daughterAge1"
                      value={daughterAge1}
                      onChange={(e) => setDaughterAge1(e.value)}
                      options={sondaughterAgeOptions}
                      placeholder="Age"
                      className="w-full"
                      showClear={!!daughterAge1}
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 space-y-4 sm:space-y-0">
                  {/* Father */}
                  <div className="flex-1 min-w-[150px]">
                    <label
                      htmlFor="fatherAge"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Father
                    </label>
                    <Dropdown
                      id="fatherAge"
                      value={fatherAge}
                      onChange={(e) => setFatherAge(e.value)}
                      options={ageOptions} // ✅ Same options
                      placeholder="Age"
                      className="w-full"
                      showClear={!!fatherAge}
                    />
                  </div>

                  {/* Mother */}
                  <div className="flex-1 min-w-[150px]">
                    <label
                      htmlFor="motherAge"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mother
                    </label>
                    <Dropdown
                      id="motherAge"
                      value={motherAge}
                      onChange={(e) => setMotherAge(e.value)}
                      options={ageOptions} // ✅ Same options
                      placeholder="Age"
                      className="w-full"
                      showClear={!!motherAge}
                    />
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
                    <Dropdown
                      id="fatherInLawAge"
                      value={fatherInLawAge}
                      onChange={(e) => setFatherInLawAge(e.value)}
                      options={ageOptions} // ✅ Same options
                      placeholder="Age"
                      className="w-full"
                      showClear={!!fatherInLawAge}
                    />
                  </div>

                  {/* Motherinlaw */}
                  <div className="flex-1 min-w-[150px]">
                    <label
                      htmlFor="motherInLawAge"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mother In Law
                    </label>
                    <Dropdown
                      id="motherInLawAge"
                      value={motherInLawAge}
                      onChange={(e) => setMotherInLawAge(e.value)}
                      options={ageOptions} // ✅ Same options
                      placeholder="Age"
                      className="w-full"
                      showClear={!!motherInLawAge}
                    />
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
            {generatedOtp && (
              <div className="w-full mt-4">
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp} 
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {otpError && (
                  <span className="text-red-600 text-sm mt-1 block">
                    {otpError}
                  </span>
                )}
              </div>
            )}

            {/* Calculate Premium Button */}

            <div className="mt-6">
              {apiError && (
                <div className="mb-4 p-3 text-red-700 bg-red-100 rounded">
                  {apiError}
                </div>
              )}
              <button
                type="button"
                onClick={handleCalculateClick}
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r text-white from-blue-600 to-indigo-800 font-semibold rounded-lg shadow-md 
             hover:from-blue-700 hover:to-indigo-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition
             disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow transition"
              >
                {loading ? "Calculating..." : "Calculate Premium"}
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
        <div className="container">
          <h2>Why Choose InsureX Health Plan</h2>
          <div className="table-wrapper">
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
        <div className="max-w-6xl mx-auto mt-6 p-6 rounded-lg bg-white text-gray-800 text-sm">
          <p className="mb-1">
            <strong>Disclaimer</strong>: Information above is just for
            reference. Kindly read T &amp; C of policy thoroughly, Do refer
            IRDAI guidelines for tax exemption conditions.
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
          <p className="mb-1">#India Insurance Summit &amp; Awards 2024.</p>

          <p className="mb-1">
            InsureX Insurance Limited Registered Office: 5th Floor, 19 Chawla
            House, Nehru Place, New Delhi-110019. Correspondence Office: Unit
            No. 604 - 607, 6th Floor, Tower C, Unitech Cyber Park, Sector-39,
            Gurugram -122001 (Haryana). Website: www.InsureX.com
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
