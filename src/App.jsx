import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import PremiumResultPage from "./pages/PremiumResultPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* Toast system (available globally) */}
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/premium-result" element={<PremiumResultPage />} />
      </Routes>
    </>
  );
}

export default App;
