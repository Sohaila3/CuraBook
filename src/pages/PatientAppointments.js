import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./PatientAppointments.css";

export default function PatientAppointments() {
  const [activeTab, setActiveTab] = useState("scheduled");
  const [dateFilter, setDateFilter] = useState("");
  const [query, setQuery] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedPatientDetails, setSelectedPatientDetails] = useState(null);

  const [appointments] = useState({
    scheduled: [
    { id: 1, patientName: "Asmaa salah", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 25, gender: "Female", phone: "123456789", email: "manarahmad@gmail.com" },
      { id: 2, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 30, gender: "Male" },
      { id: 3, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 28, gender: "Female" },
      { id: 4, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 35, gender: "Male" },
      { id: 5, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 22, gender: "Female" },
      { id: 6, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 40, gender: "Male" },
      { id: 7, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 33, gender: "Female" },
      { id: 8, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 27, gender: "Male" },
      { id: 9, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 45, gender: "Female" },
      { id: 10, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 29, gender: "Male" },
      { id: 11, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 31, gender: "Female" },
      { id: 12, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Scheduled", age: 26, gender: "Male" },
    ],
        confirmed: [
      { id: 1, patientName: "Asmaa salah", date: "12-12-2025", time: "3:00 PM", status: "Complete", age: 25, gender: "Female", phone: "123456789", email: "manarahmad@gmail.com" },
      { id: 2, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Complete", age: 30, gender: "Male" },
      { id: 3, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Complete", age: 28, gender: "Female" },
      { id: 4, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Complete", age: 35, gender: "Male" },
      { id: 5, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Complete", age: 22, gender: "Female" },
    ],
        cancelled: [
      { id: 1, patientName: "Asmaa salah", date: "12-12-2025", time: "3:00 PM", status: "Cancelled", age: 25, gender: "Female", phone: "123456789", email: "manarahmad@gmail.com" },
      { id: 2, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Cancelled", age: 30, gender: "Male" },
      { id: 3, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Cancelled", age: 28, gender: "Female" },
      { id: 4, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Cancelled", age: 35, gender: "Male" },
      { id: 5, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Cancelled", age: 22, gender: "Female" },
      { id: 6, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Cancelled", age: 40, gender: "Male" },
      { id: 7, patientName: "Patient Name", date: "12-12-2025", time: "3:00 PM", status: "Cancelled", age: 33, gender: "Female" },
    ]
  });

  const stats = {
    total: 12,
    confirmed: 5,
    cancelled: 7
  };

  const currentAppointments = appointments[activeTab] || [];

  const filteredAppointments = currentAppointments.filter((apt) => {
    const matchesQuery = !query.trim() || (apt.patientName || "").toLowerCase().includes(query.toLowerCase());
    const matchesDate = !dateFilter.trim() || (apt.date || "").includes(dateFilter);
    return matchesQuery && matchesDate;
  });

  const handleShowDetails = (patient) => {
    // ensure the row is selected and details are shown on first click
    setSelectedAppointment(patient.id);
    setSelectedPatientDetails(patient);
    setShowDetailsModal(true);
  };

  const handleDelete = () => {
    if (selectedAppointment) {
      console.log("Delete appointment:", selectedAppointment);
    }
  };

  return (
    <>
      <div className="appointments-page-container">
        {/* Back to Dashboard */}
        <Link to="/doctor-dashboard" className="back-link">
          <span className="back-icon">❮</span> Dashboard
        </Link>

        {/* Stats Cards */}
        <div className="stats-cards">
          <div 
            className={`stat-card total ${activeTab === 'scheduled' ? 'active' : ''}`}
            onClick={() => setActiveTab('scheduled')}
          >
            <h4>Total Appointment</h4>
            <span className="stat-number">{stats.total}</span>
          </div>
          <div 
            className={`stat-card confirmed ${activeTab === 'confirmed' ? 'active' : ''}`}
            onClick={() => setActiveTab('confirmed')}
          >
            <h4>Confirmed Appointments</h4>
            <span className="stat-number">{stats.confirmed}</span>
          </div>
          <div 
            className={`stat-card cancelled ${activeTab === 'cancelled' ? 'active' : ''}`}
            onClick={() => setActiveTab('cancelled')}
          >
            <h4>canceled / Archived</h4>
            <span className="stat-number">{stats.cancelled}</span>
          </div>
        </div>

        {/* Date Filter */}
        <div className="date-filter-section">
          <span className="filter-label">Date Fillter</span>
          <div className="filter-controls">
            <input
              type="text"
              placeholder="Day / Month / Year"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="date-input"
            />
            <button className="filter-btn" onClick={(e) => e.preventDefault()}>Fillter</button>
            <input
              type="text"
              placeholder="Search patient name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
              style={{ marginLeft: 12 }}
            />
          </div>
        </div>

        {/* Appointments Table */}
        <div className="appointments-table-section">
          <h2 className="table-title">Patient Appointment</h2>
          
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((apt) => (
                <tr 
                  key={apt.id}
                  className={selectedAppointment === apt.id ? 'selected' : ''}
                  onClick={() => setSelectedAppointment(apt.id)}
                >
                  <td className="patient-name">{apt.patientName}</td>
                  <td>{apt.date}</td>
                  <td>{apt.time}</td>
                  <td>{apt.status}</td>
                  <td className="actions-cell">
                    {activeTab === 'scheduled' && (
                      <>
                        <button className="reject-btn">Reject</button>
                        <button className="accept-btn">Accept</button>
                      </>
                    )}
                    {activeTab === 'confirmed' && (
                      <button className="confirmed-btn">Confirmed</button>
                    )}
                    {activeTab === 'cancelled' && (
                      <button className="cancelled-btn">Canceled</button>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="details-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShowDetails(apt);
                      }}
                    >
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <button 
              className="delete-btn"
              onClick={handleDelete}
              disabled={!selectedAppointment}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {/* Patient Details Modal */}
      {showDetailsModal && selectedPatientDetails && (
        <div className="modal-overlay" onClick={() => setShowDetailsModal(false)}>
          <div className="patient-details-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Patient Details</h2>
            <div className="modal-content">
              <p><strong>Name:</strong> {selectedPatientDetails.patientName}</p>
              <p><strong>Data:</strong> {selectedPatientDetails.date}</p>
              <p><strong>Time:</strong> {selectedPatientDetails.time}</p>
              <p><strong>Age:</strong> {selectedPatientDetails.age}</p>
              <p><strong>Contact:</strong> {selectedPatientDetails.gender}</p>
              <p><strong>Phone Number :</strong> {selectedPatientDetails.phone || ''}</p>
              <p><strong>Email :</strong> {selectedPatientDetails.email || ''}</p>
            </div>
            <button 
              className="close-modal-btn"
              onClick={() => setShowDetailsModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
