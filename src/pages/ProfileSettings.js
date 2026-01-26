import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./ProfileSettings.css";

export default function ProfileSettings() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    phone: "",
    clinicLocation: "",
    city: "",
    yearsExperience: "",
    username: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const validators = {
    fullName: (v) => (!v.trim() ? "Full name is required" : ""),
    age: (v) => {
      if (!v) return "Age is required";
      const n = Number(v);
      if (Number.isNaN(n) || n < 1 || n > 120) return "Enter a valid age";
      return "";
    },
    phone: (v) => {
      const clean = (v || "").replace(/\D/g, "");
      if (!clean) return "Phone number is required";
      if (!/^\d{8,15}$/.test(clean)) return "Enter a valid phone number";
      return "";
    },
    city: (v) => (!v.trim() ? "City is required" : ""),
    clinicLocation: (v) => (!v.trim() ? "Clinic location is required" : ""),
    yearsExperience: (v) => {
      if (!v) return ""; // optional
      const n = Number(v);
      if (Number.isNaN(n) || n < 0 || n > 100) return "Enter a valid number";
      return "";
    },
    username: (v) => (!v.trim() ? "Username is required" : ""),
    email: (v) => {
      if (!v.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Invalid email format";
      return "";
    },
    newPassword: (v) => {
      if (!v) return ""; // optional
      const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
      if (!strong.test(v)) return "Min 8 chars, uppercase, lowercase, number, symbol";
      return "";
    },
    confirmPassword: (v, form) => {
      if (!form.newPassword) return "";
      if (!v) return "Please confirm password";
      if (v !== form.newPassword) return "Passwords do not match";
      return "";
    }
  };

  // require current password to save changes
  validators.currentPassword = (v) => (!v ? "Current password is required" : "");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const doctorInitials = "DMA";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (validators[name]) {
      const err = validators[name](value, { ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (validators[name]) {
      const err = validators[name](value, { ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(validators).forEach((f) => {
      const err = validators[f](formData[f] || "", formData);
      if (err) newErrors[f] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Profile Settings:", formData);
      navigate('/doctor-dashboard');
    }
  };

  const handleCancel = () => {
    navigate('/doctor-dashboard');
  };

  return (
    <div className="profile-settings-container">
      <header className="profile-header">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img" />
          <span className="logo-text">CuraBook</span>
        </div>
      </header>

      <div className="profile-content">
        <h1 className="page-title">Profile Settings</h1>

        {/* Avatar Section */}
        <div className="avatar-section">
          <div className="profile-avatar">
            <span>{doctorInitials}</span>
          </div>
          <button className="edit-picture-btn">Edit Picture</button>
        </div>

        {/* Settings Form */}
        <form onSubmit={handleSave} className="settings-form">
          <div className="form-columns">
            {/* Left Column */}
            <div className="form-column">
              <div className="input-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                  {errors.fullName && <p className="error">{errors.fullName}</p>}
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.age && <p className="error">{errors.age}</p>}
              </div>

              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>

              <div className="input-group with-icon">
                <input
                  type="text"
                  name="clinicLocation"
                  placeholder="clinic location"
                  value={formData.clinicLocation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.clinicLocation && <p className="error">{errors.clinicLocation}</p>}
                <span className="input-icon" aria-hidden>
                  <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="city"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.city && <p className="error">{errors.city}</p>}
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="yearsExperience"
                  placeholder="Years of Experience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.yearsExperience && <p className="error">{errors.yearsExperience}</p>}
              </div>
            </div>

            {/* Right Column */}
            <div className="form-column">
              <div className="input-group with-icon">
                <input
                  type="text"
                  name="username"
                  placeholder="User name"
                  value={formData.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && <p className="error">{errors.username}</p>}
                <span className="input-icon" aria-hidden>
                  <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
              </div>

              <div className="input-group with-icon">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <span className="input-icon" aria-hidden>
                  <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" />
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  </svg>
                </span>
              </div>

              <div className="input-group with-icon">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  name="currentPassword"
                  placeholder="Current Password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.currentPassword && <p className="error">{errors.currentPassword}</p>}
                <button
                  type="button"
                  className="input-icon clickable icon-button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  aria-label={showCurrentPassword ? 'Hide current password' : 'Show current password'}
                >
                  <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>

              <div className="input-group with-icon">
                <input
                  type={showNewPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="New password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.newPassword && <p className="error">{errors.newPassword}</p>}
                <button
                  type="button"
                  className="input-icon clickable icon-button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  aria-label={showNewPassword ? 'Hide new password' : 'Show new password'}
                >
                  <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              </div>

              <div className="input-group">
                <textarea
                  name="caption"
                  placeholder="Caption ( appears on the card )"
                  value={formData.caption || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button type="submit" className="save-btn" disabled={!Object.keys(validators).every(f => validators[f](formData[f] || "", formData) === "") }>
              Save Change
            </button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
