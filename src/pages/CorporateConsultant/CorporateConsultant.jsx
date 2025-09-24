import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Optionsbar from "../OptionBar";

const CorporateConsultant = () => {
  const [formData, setFormData] = useState({
    corporateName: "",
    address: "",
    gstin: "",
    corporateCode: "",
    directorDetails: "",
    corporateWebsite: "",
    employees: "",
    ageGroups: {
      "22-26": "",
      "27-32": "",
      "32-42": "",
      "42-60": "",
    },
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!formData.corporateName) newErrors.corporateName = "Required";
    if (!formData.address) newErrors.address = "Required";
    if (!formData.gstin) newErrors.gstin = "Required";
    if (!formData.corporateCode) newErrors.corporateCode = "Required";
    if (!formData.directorDetails) newErrors.directorDetails = "Required";
    if (!formData.corporateWebsite) newErrors.corporateWebsite = "Required";
    if (!formData.employees) newErrors.employees = "Required";

    Object.entries(formData.ageGroups).forEach(([key, value]) => {
      if (!value) newErrors[key] = "Required";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["22-26", "27-32", "32-42", "42-60"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        ageGroups: { ...prev.ageGroups, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowModal(true);
      setTimeout(() => {
        navigate("/landing");
      }, 2000);
    }
  };

  return (
    <>
      <Optionsbar />
      <div className="p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Corporate Consultant Form
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Ads Section */}
          <div className="md:col-span-3 bg-gray-200 flex items-center justify-center rounded-xl p-6 h-96 shadow-inner">
            <p className="text-gray-500 text-lg">Ad Space (60%)</p>
          </div>

          {/* Right Form Section */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-200"
            >
              {/* Section Heading */}
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                Corporate Details
              </h2>

              {/* Corporate Fields */}
              {[
                { name: "corporateName", label: "Corporate Name" },
                { name: "address", label: "Address" },
                { name: "gstin", label: "GSTIN" },
                { name: "corporateCode", label: "Corporate Code" },
                { name: "directorDetails", label: "Director Details" },
                { name: "corporateWebsite", label: "Corporate Website" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* Employees count */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Number of Employees
                </label>
                <input
                  type="number"
                  name="employees"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.employees}
                  onChange={handleChange}
                />
                {errors.employees && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.employees}
                  </p>
                )}
              </div>

              {/* Age Groups */}
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mt-6">
                Employee Age Distribution
              </h2>
              <div className="space-y-4">
                {Object.keys(formData.ageGroups).map((age) => (
                  <div key={age}>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Age {age}
                    </label>
                    <input
                      type="number"
                      name={age}
                      className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      value={formData.ageGroups[age]}
                      onChange={handleChange}
                    />
                    {errors[age] && (
                      <p className="text-red-500 text-xs mt-1">{errors[age]}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-md"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">
              Thank you!
            </h2>
            <p className="text-gray-700">
              Your details are with us. An agent will connect with you soon.
            </p>
            <button
              className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              onClick={() => navigate("/landing")}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CorporateConsultant;
