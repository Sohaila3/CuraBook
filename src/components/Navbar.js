import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [role, setRole] = useState(() => {
    try {
      return localStorage.getItem("role") || "";
    } catch (e) {
      return "";
    }
  });

  useEffect(() => {
    const onRoleChange = () => {
      try {
        setRole(localStorage.getItem("role") || "");
      } catch (e) {
        setRole("");
      }
    };

    window.addEventListener("roleChanged", onRoleChange);
    window.addEventListener("storage", onRoleChange);

    return () => {
      window.removeEventListener("roleChanged", onRoleChange);
      window.removeEventListener("storage", onRoleChange);
    };
  }, []);

  const location = useLocation();
  const pathname = location.pathname || "/";

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo-img" />
        <span className="logo-text">CuraBook</span>
      </div>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        {role === "doctor" && pathname !== "/" && pathname !== "/login" && (
          <NavLink to="/doctor-dashboard">Doctor Dashboard</NavLink>
        )}
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
