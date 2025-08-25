import { useNavigate } from "react-router-dom";
import "./../styles/homepage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to InsureX</h1>
      <p className="home-subtitle">Your trusted insurance partner.</p>

      <button
        className="home-button"
        onClick={() => navigate("/landing")}
      >
        Explore more !!
      </button>
    </div>
  );
};

export default HomePage;
