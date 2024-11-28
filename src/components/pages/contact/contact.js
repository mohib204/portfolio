import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me via the following channels:</p>
        <div className="contact-details">
          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <h2>WhatsApp</h2>
            <p>
              <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer">
                +92 3362230775
              </a>
            </p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <h2>Email</h2>
            <p>
              <a href="imranmohib387@gmail.com">imranmohib387@gmail.com</a>
            </p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <h2>Phone</h2>
            <p>+92 3362230775</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
