import React from "react";
import "./Contact.css";
// import logo from "../assets/logo.png";
import illustration from "../assets/contact.png"; // ضع الصورة هنا
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
    <Navbar/>
   
    <div className="contact-wrapper">

      {/* Header inside page (not navbar) */}
      <div className="contact-page-container">

        <div className="contact-box">

          {/* LEFT SIDE FORM */}
          <div className="contact-left">
            <h2 className="contact-title">How can we help you ?</h2>

            <form>
              <div className="input-group">
                <i className="bi bi-person"></i>
                <input type="text" placeholder="Name" />
              </div>

              <div className="input-group">
                <i className="bi bi-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>

              <div className="input-group textarea">
                <textarea placeholder="Message"></textarea>
              </div>

              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="contact-right">
            <img src={illustration} alt="contact illustration" />
          </div>

        </div>
      </div>

    </div>
    <Footer/>
     </>
  );
}
