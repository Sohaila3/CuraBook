import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";
import "./PatientManagement.css";

export default function PatientManagement() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const [patients] = useState([
    { id: 1, name: "Asmaa Salah", phone: "01204678923", lastAppointment: "12-5-2025" },
    { id: 2, name: "Manar Ahmad", phone: "01034738925", lastAppointment: "17-6-2025" },
    { id: 3, name: "Rahma Maher", phone: "01587567382", lastAppointment: "3-7-2025" },
    { id: 4, name: "Amira Mahmoud", phone: "01123478949", lastAppointment: "12-5-2025" },
    { id: 5, name: "Asmaa Hosne", phone: "01034738927", lastAppointment: "12-5-2025" },
    { id: 6, name: "Soha Mostafa", phone: "01276547890", lastAppointment: "12-5-2025" },
  ]);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = () => {
    if (selectedPatient) {
      // Handle delete logic
      console.log("Delete patient:", selectedPatient);
    }
  };

  return (
    <>
      <header className="dashboard-navbar">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img" />
          <span className="logo-text">CuraBook</span>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/doctor-dashboard">Dashboard</Link>
          <Link to="/patient-management" className="active">Patient</Link>
          <Link to="/About-Us">About Us</Link>
          <Link to="/Contact-Us">Contact</Link>
        </nav>
      </header>

      <div className="patient-management-container">
        <h1 className="page-title">Patient Management</h1>

        <div className="controls-row">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by Name......"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className="add-patient-btn"
            onClick={() => navigate('/new-patient-record')}
          >
            +Add New Patient
          </button>
        </div>

        <div className="patients-table-container">
          <table className="patients-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Patient ID</th>
                <th>Phone Number</th>
                <th>Last Apprintment Date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr 
                  key={patient.id}
                  className={selectedPatient === patient.id ? 'selected' : ''}
                  onClick={() => setSelectedPatient(patient.id)}
                >
                  <td>
                    <div className="patient-info">
                      <span className="patient-avatar">👤</span>
                      <span className="patient-name">{patient.name}</span>
                    </div>
                  </td>
                  <td>{patient.id}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.lastAppointment}</td>
                  <td>
                    <button 
                      className="edit-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/patient-record-details/${patient.id}`);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <span className="pagination">Page 1 of 3</span>
            <button 
              className="delete-btn"
              onClick={handleDelete}
              disabled={!selectedPatient}
            >
              Delete
            </button>
          </div>
        </div>

        {/* Side Navigation Arrow */}
        <div className="side-nav-arrow" onClick={() => navigate('/doctor-dashboard')}>
          <span>❮</span>
        </div>
      </div>

      <Footer />
    </>
  );
}
