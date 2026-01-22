import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import logo from "../assets/logo.png";
import doctorsTeam from "../assets/doctors-team.png";
import stethoscope from "../assets/stethoscope.png";
import Footer from "../components/Footer";
import "./DoctorDashboard.css";

export default function DoctorDashboard() {
  const navigate = useNavigate();
  
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "Asmaa salah",
      date: "12-12-2025",
      time: "3:00 PM",
      status: "Scheduled"
    },
    {
      id: 2,
      patientName: "Manar Ahmad",
      date: "15-12-2025",
      time: "4:30 PM",
      status: "Scheduled"
    }
  ]);

  const chartData = [
    { name: "Scheduled", value: 100, color: "#4db6ac" },
  ];

  const handleAccept = (id) => {
    alert(`Accepted ${id}`);
  };

  const handleReject = (id) => {
    setAppointments(prev => prev.filter(app => app.id !== id));
  };

  const doctorInfo = {
    initials: "DMA",
    name: "Dr. Mahmoud Abd-elaziz",
    specialty: "(OB/GYN)",
    email: "mahmoudabdelaziz@gmail.com",
    fullName: "mahaoud Abdelaziz",
    phone: "012xxxxxxxx",
    location: "Minya- xxxxx - xxxxx"
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
          <Link to="/doctor-dashboard" className="active">Dashboard</Link>
          <Link to="/patient-management">Patient</Link>
          <Link to="/About-Us">About Us</Link>
          <Link to="/Contact-Us">Contact</Link>
        </nav>
      </header>

      <div className="dashboard-container">
        {/* Row 1: Doctor Profile + Welcome Info + Doctors Image */}
        <div className="row-one">
          <div className="doctor-profile">
            <h2 className="dashboard-title">Doctor Dashboard</h2>
            <div className="avatar-wrapper">
              <div className="doctor-avatar">
                <span>{doctorInfo.initials}</span>
              </div>
            </div>
            <h3 className="doctor-name">{doctorInfo.name}</h3>
            <div className="doctor-specialty">
              <span className="dots">···</span>
              <span className="stethoscope">🩺</span>
              <span className="dots">···</span>
              <span className="specialty-name">{doctorInfo.specialty}</span>
            </div>
          </div>

          <div className="welcome-section">
            <h1 className="hello-text">Hello Dr. Mahmoud <span>👋</span></h1>
            <div className="doctor-info">
              <p><strong>Email:</strong> {doctorInfo.email}</p>
              <p><strong>Name:</strong> {doctorInfo.fullName}</p>
              <p><strong>Phone:</strong> {doctorInfo.phone}</p>
              <p><strong>Location:</strong> {doctorInfo.location}</p>
            </div>
            <button 
              className="profile-btn"
              onClick={() => navigate('/profile-settings')}
            >
              Profile Settings
            </button>
          </div>

          <div className="team-image">
            <img src={doctorsTeam} alt="Medical Team" />
          </div>
        </div>

        {/* Row 2: Appointment Chart + Appointments Table */}
        <div className="bottom-section">
          {/* TITLES ROW */}
          <div className="titles-row">
            <h3 className="section-title chart-title">Appointment Status (June 2025)</h3>
            <div className="appt-header">
              <h3 className="section-title" style={{ marginBottom: 0 }}>Your Patient Appointment</h3>
              <button 
                className="arrow-circle"
                onClick={() => navigate('/patient-appointments')}
              >
                <i className="bi bi-arrow-right-circle-fill"></i>
              </button>
            </div>
          </div>

          {/* CONTENT ROW */}
          <div className="content-row">
            {/* CHART */}
            <div className="chart-wrapper">
              <div className="dash-card chart-box">
                <div className="chart-area">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={0}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                        stroke="none"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  {/* 0 Line Label simulated */}
                  <div className="chart-overlay-line">
                    <div className="line-segment"></div>
                    <span className="zero-text">0</span>
                  </div>
                </div>

                <div className="chart-legend">
                  <div className="legend-item"><span className="dot bg-sched"></span> scheduled</div>
                  <div className="legend-item grey"><span className="dot bg-can"></span> Cancelled</div>
                  <div className="legend-item dark"><span className="dot bg-comp"></span> Completed</div>
                </div>
              </div>
            </div>

            {/* APPOINTMENTS TABLE */}
            <div className="table-box">
              <table className="custom-table">
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
                  {appointments.map(app => (
                    <tr key={app.id}>
                      <td className="text-teal">{app.patientName}</td>
                      <td>{app.date}</td>
                      <td>{app.time}</td>
                      <td className="text-sched">{app.status}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-accept" onClick={() => handleAccept(app.id)}>Accept</button>
                          <button className="btn-reject" onClick={() => handleReject(app.id)}>Reject</button>
                        </div>
                      </td>
                      <td>
                        <i className="bi bi-three-dots-vertical dots-menu"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
