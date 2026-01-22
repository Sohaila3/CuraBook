import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./NewPatientRecord.css";

export default function NewPatientRecord() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    patientName: "",
    medicalId: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    patientsReport: "",
    physicalExam: "",
    provisionalDiagnosis: "",
    treatmentOrders: "",
    chiefComplaint: "",
    pastMedicalHistory: ""
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
    gender: (v) => (!v.trim() ? "Gender is required" : ""),
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
    },
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
      const err = validators[name](value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(validators).forEach((f) => {
      const err = validators[f](formData[f] || "");
      if (err) newErrors[f] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Patient Record:", formData);
      navigate('/patient-management');
    }
  };

  return (
    <div className="new-patient-container">
      <header className="record-header">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img" />
          <span className="logo-text">CuraBook</span>
        </div>
        <h1 className="page-title">NEW PATIENT RECORD</h1>
        <div className="date-info">
          <p>{dateString}</p>
          <p>{timeString}</p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="patient-form">
        <div className="form-grid">
          {/* Physician's Notes Section */}
          <div className="form-section">
            <h3 className="section-title">PHYSICIAN'S NOTES</h3>
            
            <div className="note-box">
              <label className="note-label">Patient's Report</label>
              <textarea
                name="patientsReport"
                value={formData.patientsReport}
                onChange={handleChange}
                className="note-textarea"
              />
            </div>

            <div className="note-box">
              <label className="note-label">physical Exam</label>
              <textarea
                name="physicalExam"
                value={formData.physicalExam}
                onChange={handleChange}
                className="note-textarea"
              />
            </div>

            <div className="note-box">
              <label className="note-label">Provisional Diadnosis</label>
              <textarea
                name="provisionalDiagnosis"
                value={formData.provisionalDiagnosis}
                onChange={handleChange}
                className="note-textarea"
              />
            </div>

            <div className="note-box">
              <label className="note-label">Treatment/Orders</label>
              <textarea
                name="treatmentOrders"
                value={formData.treatmentOrders}
                onChange={handleChange}
                className="note-textarea"
              />
            </div>
          </div>

          {/* Chief Complaint & History Section */}
          <div className="form-section">
            <h3 className="section-title">CHIEF COMPLAINT & HISTORY</h3>
            
            <div className="complaint-box">
              <label className="note-label">Chief Complaint</label>
              <textarea
                name="chiefComplaint"
                value={formData.chiefComplaint}
                onChange={handleChange}
                className="complaint-textarea"
              />
            </div>

            <div className="history-box">
              <label className="note-label">Past Medical History</label>
              <textarea
                name="pastMedicalHistory"
                value={formData.pastMedicalHistory}
                onChange={handleChange}
                className="history-textarea"
              />
            </div>
          </div>

          {/* Patient Demographics Section */}
          <div className="form-section">
            <h3 className="section-title">PATIENT DEMOGRAPHICS</h3>
            
            <div className="demographics-fields">
              <input
                type="text"
                name="patientName"
                placeholder="Patient Name"
                value={formData.patientName}
                onChange={handleChange}
                className="demo-input"
              />
              {errors.patientName && <p className="error">{errors.patientName}</p>}
              
              <input
                type="text"
                name="medicalId"
                placeholder="Medical ID /File Number"
                value={formData.medicalId}
                onChange={handleChange}
                className="demo-input"
              />
              {errors.medicalId && <p className="error">{errors.medicalId}</p>}
              
              <input
                type="text"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="demo-input"
              />
              {errors.age && <p className="error">{errors.age}</p>}
              
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                className="demo-input"
              />
              {errors.gender && <p className="error">{errors.gender}</p>}
              
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="demo-input"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
              
              <input
                type="email"
                name="email"
                placeholder="Emil Address"
                value={formData.email}
                onChange={handleChange}
                className="demo-input"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save Record
          </button>
        </div>
      </form>
    </div>
  );
}
