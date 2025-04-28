import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import contactusimg from "../assets/Contact Us Assets/contact-us.png";

const Contact = () => {
  return (
    <section className="contact-section">
      <motion.div className="contact-container">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="contact-heading">
            <span></span>
            Contact Us
          </div>
          <p className="contact-subtext">
            By submitting this form, you agree to our
            <a href="#" className="contact-link">
              Terms and Conditions
            </a>
            . Please review them for details on acceptable use and data
            handling.
          </p>
          <form className="contact-form">
            <div className="contact-form-row">
              <input
                type="text"
                placeholder="Your Name *"
                className="contact-input"
              />
              <input
                type="text"
                placeholder="Organization Name *"
                className="contact-input"
              />
            </div>
            <div className="contact-form-row">
              <input
                type="email"
                placeholder="Your E-Mail *"
                className="contact-input"
              />
              <input
                type="text"
                placeholder="Phone *"
                className="contact-input"
              />
            </div>
            <textarea
              placeholder="Message"
              className="contact-textarea"
            ></textarea>
            <button type="submit" className="contact-button">
              Send Now
            </button>
          </form>
        </motion.div>
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={contactusimg}
            alt="Team Discussion"
            className="contact-image"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
