import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [role, setRole] = useState("patient");
  const [showPass, setShowPass] = useState(false);

  const [form, setForm] = useState({
    loginId: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // VALIDATION RULES ---------------------------
  const validators = {

loginId: (value) => {
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Invalid email format";
      return "";
    },
    password: (value) => {
      if (!value) return "Password is required";
      const strong =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
      if (!strong.test(value))
        return "Min 8 chars, uppercase, lowercase, number, symbol";
      return "";
    },
  };

  // HANDLE CHANGE ------------------------------
  const handleChange = (e) => {
    const { id, value } = e.target;

    setForm((prev) => ({ ...prev, [id]: value }));

    if (validators[id]) {
      const error = validators[id](value);
      setErrors((prev) => ({ ...prev, [id]: error }));
    }
  };

  // SUBMIT -------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(validators).forEach((field) => {
      const err = validators[field](form[field]);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Logged in as " + role);
    }
  };

  return (
    <>
          <Navbar />
    <div className="login-container">

      <div className="logo-box">
        <img src={logo} alt="CuraBook Logo" className="login-logo" />
        <h1 className="brand">CuraBook</h1>
      </div>

      <h2 className="login-title">Welcome to CuraBook</h2>

      {/* Role Buttons */}
      <div className="role-box">
        {["patient", "doctor", "hospital"].map((r) => (
          <button
            key={r}
            className={role === r ? "role active" : "role"}
            onClick={() => setRole(r)}
            type="button"
          >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </div>

      {/* Form */}
      <form className="login-form" onSubmit={handleSubmit}>
        
        {/* LOGIN ID */}
        <div className="">
          <input
            id="loginId"
            type="text"
            placeholder="Username / Email"
            value={form.loginId}
            onChange={handleChange}
          />
        </div>
          {errors.loginId && <p className="error">{errors.loginId}</p>}

        {/* PASSWORD */}
        <div className="password-wrapper">
          <input
            id="password"
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <i
            className={`bi ${showPass ? "bi-eye-slash" : "bi-eye"} eye-icon`}
            onClick={() => setShowPass(!showPass)}
          ></i>
        </div>
          {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit" className="login-btn">Login</button>

        <a href="#" className="forgot">Forget Password ?</a>
      </form>

    </div>
    <Footer/>
    </>
  );
}
 