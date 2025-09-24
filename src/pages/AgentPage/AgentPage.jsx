import React, { useState } from "react";
import Optionsbar from "../OptionBar";
import { useNavigate } from "react-router-dom";
import LandingPage from "../LandingPage";

const AgentPage = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    mobile: "",
    email: "",
    gstin: "",
    agentCode: "",
    referer: false,
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.surname.trim()) newErrors.surname = "Surname is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.gstin.trim()) newErrors.gstin = "GSTIN is required";

    // ✅ Only validate Agent Code if Referer is checked
    if (formData.referer && !formData.agentCode.trim()) {
      newErrors.agentCode = "Agent Code is required when Referer is checked";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowModal(true);
      // Auto navigate after 2 seconds
      setTimeout(() => {
        navigate("/landing");
      }, 3000);
    }
  };

  return (
    <>
      <Optionsbar />
      <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Become an Agent
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Your journey starts here — unlock your future as an agent.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 border-b pb-2">
            Agent Details
          </h2>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                className={`w-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Surname */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Surname
              </label>
              <input
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                type="text"
                placeholder="Enter your surname"
                className={`w-full border ${
                  errors.surname ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none`}
              />
              {errors.surname && (
                <p className="text-red-500 text-sm mt-1">{errors.surname}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile
              </label>
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                type="tel"
                placeholder="Enter mobile number"
                className={`w-full border ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* GSTIN */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GSTIN
              </label>
              <input
                name="gstin"
                value={formData.gstin}
                onChange={handleChange}
                type="text"
                placeholder="Enter GSTIN"
                className={`w-full border ${
                  errors.gstin ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none`}
              />
              {errors.gstin && (
                <p className="text-red-500 text-sm mt-1">{errors.gstin}</p>
              )}
            </div>

            {/* Referer Checkbox */}
            <div className="flex items-center space-x-2 col-span-1 md:col-span-2">
              <input
                id="referer"
                name="referer"
                type="checkbox"
                checked={formData.referer}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="referer"
                className="text-sm font-medium text-gray-700"
              >
                Referer
              </label>
            </div>

            {/* ✅ Show Agent Code only if Referer is checked */}
            {formData.referer && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Agent Code
                </label>
                <input
                  name="agentCode"
                  value={formData.agentCode}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter agent code"
                  className={`w-full border ${
                    errors.agentCode ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none`}
                />
                {errors.agentCode && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.agentCode}
                  </p>
                )}
              </div>
            )}

            {/* Save Button */}
            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 text-center">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              🎉 Thank You!
            </h2>
            <p className="text-gray-700 mb-6">
              Your details are with us. An agent will connect with you shortly
              to guide you through the next steps of your journey. 🚀
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AgentPage;
