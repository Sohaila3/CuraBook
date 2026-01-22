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
    patientsReport: "",
    physicalExam: "",
    provisionalDiagnosis: "",
    treatmentOrders: "",
    chiefComplaint: "",
    pastMedicalHistory: "",
    followUpNotes: ""
  });

  const dateString = `Today Nov 24,2026`;
  const timeString = `Appointment 18.39 AM`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Updated Patient Record:", formData);
    setIsEditing(false);
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
                readOnly={!isEditing}
              />
            </div>

            <div className="note-box">
              <label className="note-label">physical Exam</label>
              <textarea
                name="physicalExam"
                value={formData.physicalExam}
                onChange={handleChange}
                className="note-textarea"
                readOnly={!isEditing}
              />
            </div>

            <div className="note-box">
              <label className="note-label">Provisional Diadnosis</label>
              <textarea
                name="provisionalDiagnosis"
                value={formData.provisionalDiagnosis}
                onChange={handleChange}
                className="note-textarea"
                readOnly={!isEditing}
              />
            </div>

            <div className="note-box">
              <label className="note-label">Treatment/Orders</label>
              <textarea
                name="treatmentOrders"
                value={formData.treatmentOrders}
                onChange={handleChange}
                className="note-textarea"
                readOnly={!isEditing}
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
                readOnly={!isEditing}
              />
            </div>

            <div className="history-box">
              <label className="note-label">Past Medical History</label>
              <textarea
                name="pastMedicalHistory"
                value={formData.pastMedicalHistory}
                onChange={handleChange}
                className="history-textarea"
                readOnly={!isEditing}
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
                readOnly={!isEditing}
              />
              
              <input
                type="text"
                name="medicalId"
                placeholder="Medical ID /File Number"
                value={formData.medicalId}
                onChange={handleChange}
                className="demo-input"
                readOnly={!isEditing}
              />
              
              <input
                type="text"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="demo-input"
                readOnly={!isEditing}
              />
              
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
              
              <input
                type="email"
                name="email"
                placeholder="Emil Address"
                value={formData.email}
                onChange={handleChange}
                className="demo-input"
                readOnly={!isEditing}
              />
            </div>
          </div>
        </div>

        {/* Follow-Up Notes Section */}
        <div className="followup-section">
          <div className="followup-box">
            <label className="note-label">Follow-Up Notes</label>
            <textarea
              name="followUpNotes"
              value={formData.followUpNotes}
              onChange={handleChange}
              className="followup-textarea"
              readOnly={!isEditing}
            />
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
