import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./PatientRecordDetails.css";

export default function PatientRecordDetails() {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    patientName: "Asmaa Salah",
    medicalId: "12345",
    age: "25",
    gender: "Female",
    phone: "01204678923",
    email: "asmaa@email.com",
    treatmentOrders: "",
    chiefComplaint: ""
  });

  const [errors, setErrors] = useState({});

  const validators = {
    patientName: (v) => (!v.trim() ? "Patient name is required" : ""),
    medicalId: (v) => (!v.trim() ? "Medical ID is required" : ""),
    age: (v) => {
      if (!v) return "Age is required";
      const n = Number(v);
      if (Number.isNaN(n) || n < 0 || n > 120) return "Enter a valid age";
      return "";
    },
    phone: (v) => {
      const clean = (v || "").replace(/\D/g, "");
      if (!clean) return "Phone number is required";
      if (!/^\d{8,15}$/.test(clean)) return "Enter a valid phone number";
      return "";
    },
    email: (v) => {
      if (!v.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Invalid email format";
      return "";
    }
  };

  const dateString = `Today Nov 24,2026`;
  const timeString = `Appointment 18.39 AM`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (validators[name]) {
      const err = validators[name](value, formData);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(validators).forEach((f) => {
      const err = validators[f](formData[f] || "");
      if (err) newErrors[f] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Updated Patient Record:", formData);
      setIsEditing(false);
    }
  };

  return (
    <div className="patient-details-container">
      <header className="record-header">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img" />
          <span className="logo-text">CuraBook</span>
        </div>
        <h1 className="page-title">PATIENT RECORD DETAILS</h1>
        <div className="date-info">
          <p>{dateString}</p>
          <p>{timeString}</p>
        </div>
      </header>

      <div className="edit-record-container">
        <button
          className="edit-record-btn"
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit Record
        </button>
      </div>

      <form onSubmit={handleSave} className="patient-form">
        <div className="form-grid">
          {/* Col 1: Treatment/Orders */}
          <div className="form-section">
            <div className="note-box note-box-large">
              <label className="note-label">Treatment/Orders</label>
              <textarea
                name="treatmentOrders"
                value={formData.treatmentOrders}
                onChange={handleChange}
                className="note-textarea large-area"
                readOnly={!isEditing}
              />
            </div>
          </div>

          {/* Col 2: Chief Complaint */}
          <div className="form-section">
            <div className="note-box note-box-large">
              <label className="note-label">Chief Complaint</label>
              <textarea
                name="chiefComplaint"
                value={formData.chiefComplaint}
                onChange={handleChange}
                className="note-textarea large-area"
                readOnly={!isEditing}
              />
            </div>
          </div>

          {/* Col 3: Demographics */}
          <div className="form-section right-col">

            <div className="demographics-fields no-border">
              <input
                type="text"
                name="patientName"
                placeholder="Patient Name"
                value={formData.patientName}
                onChange={handleChange}
                className="demo-input"
                readOnly={!isEditing}
              />
              {errors.patientName && isEditing && <p className="error">{errors.patientName}</p>}

              <input
                type="text"
                name="medicalId"
                placeholder="Medical ID /File Number"
                value={formData.medicalId}
                onChange={handleChange}
                className="demo-input"
                readOnly={!isEditing}
              />
              {errors.medicalId && isEditing && <p className="error">{errors.medicalId}</p>}

              <input
                type="text"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="demo-input"
                readOnly={!isEditing}
              />
              {errors.age && isEditing && <p className="error">{errors.age}</p>}

              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                className="demo-input"
                readOnly={!isEditing}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="demo-input"
                readOnly={!isEditing}
              />
              {errors.phone && isEditing && <p className="error">{errors.phone}</p>}
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
