import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";


const PremiumResultPage = () => {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data)
    return (
      

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-lg">No data available.</p>
      </div>
    );

  const { totalPremium, breakdown } = data;

  return (
    <>
          <Navbar />

    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
          Premium Details
        </h1>

        {/* Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-10">
          {/* Total Premium */}
          <div className="text-center mb-10">
            <span className="text-gray-500 font-medium text-lg">Total Premium</span>
            <p className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mt-2">
              ₹ {totalPremium}
            </p>
          </div>

          {/* Breakdown */}
          <div>
            <h2 className="text-gray-700 font-semibold mb-6 text-xl sm:text-2xl text-center">
              Premium Breakdown
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(breakdown).map(([member, amount]) => (
                <div
                  key={member}
                  className="p-6 bg-gradient-to-r from-red-100 to-red-50 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transform transition duration-300"
                >
                  <span className="text-gray-700 font-medium mb-2 text-lg">{member}</span>
                  <span className="text-gray-900 font-bold text-2xl">₹ {amount}</span>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-red-600 to-black"
                      style={{
                        width: `${(amount / totalPremium) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-sm text-gray-500 text-center">
            Premium calculated based on provided information. Terms & Conditions apply.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default PremiumResultPage;
