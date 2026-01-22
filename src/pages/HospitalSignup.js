import React, { useState } from "react";
import "./DoctorSignup.css";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HospitalSignup() {
  const [form, setForm] = useState({
    fullName: "",
    city: "",
    specialty: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  // VALIDATION RULES -----------------------------------
  const validators = {
    fullName: (value) => {
      if (!value.trim()) return "Hospital name is required";
      return "";
    },
    city: (value) => (!value.trim() ? "City is required" : ""),
    specialty: (value) =>
      !value.trim() ? "Location is required" : "",
    phone: (value) => {
      const clean = value.replace(/\D/g, "");
      if (!clean) return "Phone number is required";
      if (!/^(010|011|012|015)\d{8}$/.test(clean))
        return "Phone must start with 010/011/012/015 and be 11 digits";
      return "";
    },
    username: (value) =>
      !value.trim() ? "Username is required" : "",
    email: (value) => {
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
    confirmPassword: (value, form) => {
      if (!value) return "Please re-enter password";
      if (value !== form.password) return "Passwords do not match";
      return "";
    },
  };

  // HANDLE CHANGE ---------------------------------------
  const handleChange = (e) => {
    const { id, value } = e.target;

    setForm((prev) => ({ ...prev, [id]: value }));

    if (validators[id]) {
      const error = validators[id](value, form);
      setErrors((prev) => ({ ...prev, [id]: error }));
    }
  };

  // SUBMIT ----------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(validators).forEach((field) => {
      const err = validators[field](form[field], form);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Hospital Account Created Successfully ✓");
    }
  };

  return (
    <>
                      <Navbar  />
    <div className="container">

      <div className="logo">
        <img src={logo} alt="CuraBook Logo" className="logo-img" />
        <h1><span className="logo-icon">C</span>uraBook</h1>
      </div>

      <h2>Join CuraBook</h2>
      <p className="subtitle">Hospital Account Creation</p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          {/* LEFT SIDE */}
          <div className="form-left">

            {/* Hospital Name */}
            <div >
              <input
                type="text"
                id="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Hospital Name"
              />
              {errors.fullName && (
                <p className="error">{errors.fullName}</p>
              )}
            </div>

            {/* City */}
            <div >
              <input
                type="text"
                id="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Your City"
              />
              {errors.city && (
                <p className="error">{errors.city}</p>
              )}
            </div>

            {/* Location */}
            <div >
              <input
                type="text"
                id="specialty"
                value={form.specialty}
                onChange={handleChange}
                placeholder="Location"
              />
              {errors.specialty && (
                <p className="error">{errors.specialty}</p>
              )}
            </div>

            {/* Phone */}
            <div >
              <input
                type="tel"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="error">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="form-right">

            {/* Username */}
            <div >
              <input
                type="text"
                id="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
              />
              {errors.username && (
                <p className="error">{errors.username}</p>
              )}
            </div>

            {/* Email */}
            <div >
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>

             {/* PASSWORD */}
            <div className=" password-wrapper">
              <input
                id="password"
                type={showPass ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <i
                className={`toggle-password bi ${showPass ? "bi-eye-slash" : "bi-eye"}`}
                onClick={() => setShowPass(!showPass)}
              ></i>
            </div>
              {errors.password && <p className="error">{errors.password}</p>}

            {/* CONFIRM PASSWORD */}
            <div className=" password-wrapper">
              <input
                id="confirmPassword"
                type={showConfirmPass ? "text" : "password"}
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
               <i
                className={`toggle-password bi ${showConfirmPass ? "bi-eye-slash" : "bi-eye"}`}
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              ></i>
            </div>
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}

          </div>
        </div>

        <button className="btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
}
