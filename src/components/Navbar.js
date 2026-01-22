import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo-img" />
        <span className="logo-text">CuraBook</span>
      </div>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/join">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/About-Us">About Us</NavLink>
        <NavLink to="/Contact-Us">Contact</NavLink>
        {/* <NavLink to="/notifications">Notifications</NavLink> */}
        {/* 
        <NavLink to="/hospital-signup">Hospital</NavLink>
        <NavLink to="/doctor-signup">Doctor</NavLink> */}
      </nav>
    </header>
  );
}
