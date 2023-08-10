import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import logo from "./images/front.jpeg";

const App = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Login");
  };

  return (
    <>
      <div className="connect">
        <img src={logo} alt="Music"></img>

        <h3 className="centered" data-aos="zoom-out-up">
          Listen to your music,no limits.
        </h3>

        <button type="button" onClick={handleClick} data-aos="flip-up">
          Connect to MusicMingle
        </button>
      </div>
    </>
  );
};

export default App;
