import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import PremiumResultPage from "./pages/PremiumResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/premium-result" element={<PremiumResultPage />} />
    </Routes>
  );
}

export default App;
