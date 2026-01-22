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
    username: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const doctorInitials = "DMA";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Profile Settings:", formData);
    navigate('/doctor-dashboard');
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
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group with-icon">
                <input
                  type="text"
                  name="clinicLocation"
                  placeholder="clinic location"
                  value={formData.clinicLocation}
                  onChange={handleChange}
                />
                <span className="input-icon">📍</span>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="city"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={handleChange}
                />
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
                />
                <span className="input-icon">👤</span>
              </div>

              <div className="input-group with-icon">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <span className="input-icon">✉️</span>
              </div>

              <div className="input-group with-icon">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  name="currentPassword"
                  placeholder="Current Password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
                <span 
                  className="input-icon clickable"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  👁️
                </span>
              </div>

              <div className="input-group with-icon">
                <input
                  type={showNewPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="New password"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
                <span 
                  className="input-icon clickable"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  👁️
                </span>
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button type="submit" className="save-btn">
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
