import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JoinCura.css";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JoinCuraBook() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleClick = (role, path) => {
    setSelected(role);
    navigate(path);
  };

  return (
    <>
              <Navbar  />
    <div className="join-container">
      <div className="join-box">

        {/* Logo */}
        <div className="join-logo">
          <img src={logo} alt="CuraBook Logo" />
          <h1>CuraBook</h1>
        </div>

        <h2 className="join-title">Join CuraBook</h2>

        {/* Buttons */}
        <button
          className={`join-btn ${selected === "patient" ? "selected" : ""}`}
          onClick={() => handleClick("patient", "/signup")}
        >
          Patient
        </button>

        <button
          className={`join-btn ${selected === "doctor" ? "selected" : ""}`}
          onClick={() => handleClick("doctor", "/doctor-signup")}
        >
          Doctor
        </button>

        <button
          className={`join-btn ${selected === "hospital" ? "selected" : ""}`}
          onClick={() => handleClick("hospital", "/hospital-signup")}
        >
          Hospital
        </button>

      </div>
    </div>
    <Footer/>
    </>
  );
}
