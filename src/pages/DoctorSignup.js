import React, { useState } from "react";
import "./DoctorSignup.css";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DoctorSignup() {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    phone: "",
    city: "",
    specialty: "",
    hospital: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  // VALIDATION RULES -----------------------------
  const validators = {
    fullName: (value) => {
      if (!value.trim()) return "Full name is required";
      if (!/^[a-zA-Z\s]+$/.test(value)) return "Letters only allowed";
      return "";
    },
    age: (value) => {
      if (!value) return "Age is required";
      if (value < 25 || value > 80) return "Doctor Age must be between 25–80";
      return "";
    },
    phone: (value) => {
      value = value.replace(/\D/g, "");
      if (!value) return "Phone number is required";
      if (!/^(010|011|012|015)\d{8}$/.test(value))
        return "Phone must start with 010/011/012/015 and be 11 digits";
      return "";
    },
    email: (value) => {
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Invalid email format";
      return "";
    },
    password: (value) => {
      if (!value) return "Password is required";
      const strongPass =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
      if (!strongPass.test(value))
        return "Min 8 chars, uppercase, lowercase, number, symbol";
      return "";
    },
    confirmPassword: (value, form) => {
      if (!value) return "Please re-enter password";
      if (value !== form.password) return "Passwords do not match";
      return "";
    },
    city: (value) => (!value.trim() ? "City is required" : ""),
    specialty: (value) =>
      !value.trim() ? "Specialty is required" : "",
    hospital: (value) =>
      !value.trim() ? "Hospital/Clinic is required" : "",
    username: (value) =>
      !value.trim() ? "Username is required" : "",
  };

  // HANDLE INPUT CHANGE ---------------------------
  const handleChange = (e) => {
    const { id, value } = e.target;

    setForm((prev) => ({ ...prev, [id]: value }));

    // Validate live
    if (validators[id]) {
      const error = validators[id](value, form);
      setErrors((prev) => ({ ...prev, [id]: error }));
    }
  };

  // FINAL SUBMIT VALIDATION -----------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(validators).forEach((field) => {
      const error = validators[field](form[field], form);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Doctor Account Created Successfully ✓");
    }
  };

  // UI --------------------------------------------
  return (
    <>
                      <Navbar  />
    <div className="container">

      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <h1>
          <span className="logo-icon">C</span>uraBook
        </h1>
      </div>

      <h2>Welcome Dr.!</h2>
      <p className="subtitle">Let's create your medical profile.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* LEFT SIDE INPUTS  */}
          <div className="form-left">
            {/* FULL NAME */}
            <div>
              <input
                id="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
              />
              {errors.fullName && (
                <p className="error">{errors.fullName}</p>
              )}
            </div>

            {/* AGE */}
            <div>
              <input
                id="age"
                type="number"
                value={form.age}
                onChange={handleChange}
                placeholder="Age"
              />
              {errors.age && <p className="error">{errors.age}</p>}
            </div>

            {/* PHONE */}
            <div>
              <input
                id="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            {/* CITY */}
            <div>
              <input
                id="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
              />
              {errors.city && <p className="error">{errors.city}</p>}
            </div>

            {/* SPECIALTY */}
            <div>
              <input
                id="specialty"
                value={form.specialty}
                onChange={handleChange}
                placeholder="Medical Specialty"
              />
              {errors.specialty && (
                <p className="error">{errors.specialty}</p>
              )}
            </div>
          </div>

          {/* RIGHT SIDE INPUTS */}
          <div className="form-right">
            {/* HOSPITAL */}
            <div>
              <input
                id="hospital"
                value={form.hospital}
                onChange={handleChange}
                placeholder="Hospital / Clinic"
              />
              {errors.hospital && (
                <p className="error">{errors.hospital}</p>
              )}
            </div>

            {/* USERNAME */}
            <div>
              <input
                id="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
              />
              {errors.username && (
                <p className="error">{errors.username}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
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
