import React from "react";
import "./Notifications.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Booking Confirmed",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: "✔",
      color: "#2ecc71"
    },
    {
      id: 2,
      title: "New Message",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: "+",
      color: "#16a085"
    },
    {
      id: 3,
      title: "Appointment Cancelled",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: "✖",
      color: "#e74c3c"
    },
    {
      id: 4,
      title: "Booking Confirmed",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: "✔",
      color: "#2ecc71"
    },
    {
      id: 5,
      title: "New Message",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: "+",
      color: "#16a085"
    },
    {
      id: 6,
      title: "Appointment Cancelled",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: "✖",
      color: "#e74c3c"
    },
  ];

  return (
    <>
    <Navbar/>
    
    <div className="noti-wrapper">
      <h1 className="noti-title">Notifications</h1>
      <p className="noti-sub">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>

      <div className="noti-grid">
        {notifications.map((item) => (
          <div key={item.id} className="noti-card">
            <div
              className="noti-icon"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <div className="noti-text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
