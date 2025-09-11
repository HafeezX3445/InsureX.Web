import { useNavigate } from "react-router-dom";
import Optionsbar from "./OptionBar";
import "./../styles/homepage.css";
import Homepage2 from "./Homepage/Homepage2";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Optionsbar />
      <div className="home-container">
            
      </div>
        <Homepage2 />
    </>
  );
};

export default HomePage;
