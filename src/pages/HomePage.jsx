import { useNavigate } from "react-router-dom";
import Optionsbar from "./OptionBar";
import "./../styles/homepage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Optionsbar />
      <div className="home-container">
      <button
        onClick={() => navigate("/landing")}
        className="px-6 py-3 bg-gradient-to-r from-red-600 to-black text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
      >
        Go to Landing Page
      </button>
      </div>
    </>
  );
};

export default HomePage;
