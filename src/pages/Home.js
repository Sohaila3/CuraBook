import React from "react";
import "./Home.css";

// Images
// import stethoscope from "../assets/stethoscope.png";
import doctorImg from "../assets/Doctor.png";

import iconOpth from "../assets/icon-opth.png";
import iconPed from "../assets/icon-ped.png";
import iconCardio from "../assets/icon-cardio.png";
import iconGastro from "../assets/icon-gastro.png";
import iconDerm from "../assets/icon-derm.png";
import iconOrtho from "../assets/icon-ortho.png";
import iconEnt from "../assets/icon-ent.png";
import iconObgyn from "../assets/icon-obgyn.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const specialties = [
    { img: iconOpth, title: "Ophthalmology", desc: "Eye care & vision treatment" },
    { img: iconPed, title: "Pediatrics", desc: "Care & treatment of children" },
    { img: iconCardio, title: "Cardiology", desc: "Heart & blood vessels care" },
    { img: iconGastro, title: "Gastroenterology", desc: "Digestive system diseases" },
    { img: iconDerm, title: "Dermatology", desc: "Skin diseases & care" },
    { img: iconOrtho, title: "Orthopedics", desc: "Orthopedic medicine & surgery" },
    { img: iconEnt, title: "E.N.T", desc: "Ear, nose, & throat care" },
    { img: iconObgyn, title: "(OB/GYN)", desc: "Maternity, delivery & women's care" },
  ];

  return (<>
 
      <Navbar/>
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Book your doctor’s appointment <span className="icon">🩺</span> <br />
            easily and securely
          </h1>

          <div className="hero-buttons">
            <button className="btn-primary">Book Appointment</button>
            <button className="btn-outline">For Doctor Join Now</button>
          </div>
        </div>

        <div className="hero-img">
          <img src={doctorImg} alt="Doctor illustration" />
        </div>
      </section>

      {/* FEATURED SPECIALTIES */}
      <section className="specialties">
        <h2>Featured Medical Specialties</h2>

        <div className="specialties-grid">
          {specialties.map((item, index) => (
            <div key={index} className="specialty-card">
              <img src={item.img} className="spec-icon" alt={item.title} />

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div> 
    <Footer/>
    </>
  );
}
