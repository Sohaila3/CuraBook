import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" className="logo-img" />
        <span className="logo-text">CuraBook</span>
      </div>

      <div className="socials">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-whatsapp"></i>
      </div>

      <div className="socials">
        
      </div>
    </footer>
  );
}
