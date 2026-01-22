import React from "react";
import "./AboutUs.css";
import aboutImg from "../assets/About.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <div className=" about-container">

        {/* ABOUT SECTION */}
        <section className="about-section">

          <div className="about-text">
            <h1>About CuraBook</h1>

            <p>
              Welcome to Curabook, a smart healthcare platform designed to connect
              patients, doctors, and hospitals in one convenient place.
              Our goal is to simplify and improve the healthcare experience — from
              searching for the right doctor to booking appointments, managing
              records, and ensuring seamless communication between all parties involved.
            </p>

            <p>
              Curabook empowers patients to easily find trusted doctors, explore
              their detailed profiles, check available times, and book appointments instantly.
              Each doctor has a personalized page that highlights their specialization,
              qualifications, and available schedules, allowing patients to choose with confidence.
            </p>

            <p>
              In Curabook, we also provide the ability to include hospitals within our system.
              Each hospital has its own dedicated page that represents it within the
              platform — showcasing its departments, available doctors, and overall services.
            </p>

            <p>
              Through this page, patients can browse all doctors working at that hospital,
              review their specialties and ratings, and directly book an appointment with
              the most suitable one.
              This feature creates an organized structure where hospitals can effectively
              manage their doctors, monitor appointments, and provide a smoother experience
              for patients seeking care through institutional facilities.
            </p>

            <p>
              It is not just a booking tool — it’s a complete digital hub that brings
              hospitals closer to patients while maintaining efficiency, transparency,
              and comfort.
            </p>
          </div>

          <div className="about-img-box">
            <img src={aboutImg} alt="Healthcare illustration" />
          </div>

        </section>

        {/* MISSION */}
        <section className="mission-section">
          <h2>Our Mission</h2>

          <p>
            Our mission is to build a comprehensive ecosystem that supports every
            aspect of the healthcare process.
            We aim to save time, enhance coordination, and elevate the quality of
            care for everyone involved.
          </p>

          <p>
            Through Curabook, patients can find and connect with the right doctor,
            doctors can manage their appointments and patient interactions more
            effectively, and hospitals can organize their medical teams, monitor
            performance, and deliver services with greater accuracy and ease.
          </p>

          <p>
            We believe in the power of technology to transform healthcare into a
            smoother, smarter, and more connected experience for all.
          </p>
        </section>

        {/* VISION */}
        <section className="vision-section">
          <h2>Our Vision</h2>

          <p>
            To revolutionize access to medical services by creating a smart,
            integrated, and user-friendly platform that unites patients, doctors,
            and hospitals.
          </p>

          <p>
            We envision a healthcare system that is connected, transparent, and efficient,
            where technology bridges the gap between care providers and patients,
            ensuring that medical support is always just a few clicks away.
          </p>
        </section>

        <h2 className="final-tagline">
          Curabook — where healthcare meets innovation.
        </h2>

      </div>

      <Footer />
    </>
  );
}
