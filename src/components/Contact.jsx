import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import contactusimg from "../assets/Contact Us Assets/contact-us.png";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaEnvelope, FaMapPin } from "react-icons/fa6";

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

      <section className="contact-location-section">
        <motion.div
          className="contact-location-top"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="contact-location-label">
            <span></span>UNITED STATES, Texas
          </span>
          <div className="contact-location-details">
            <div className="contact-location-item">
              <a href="tel:+13463641777">
                <FaPhoneSquareAlt />
                +1 346 367 1777
              </a>
            </div>
            <div className="contact-location-item">
              <a href="mailto:info@convextech.com">
                <FaEnvelope />
                info@convextech.com
              </a>
            </div>
            <div className="contact-location-item">
              <span>
                <FaMapPin />
                11200 Broadway Suite 2743 Pearland, TX 77584
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-location-map-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            title="ConvexTech Location"
            className="contact-location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.7420557741943!2d-95.3933916!3d29.5530053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xacf5e7a8ea7bb83d%3A0xe0dd4bec75e5106a!2sConvexTech!5e0!3m2!1sen!2sin!4v1745989061478!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>

      <section className="contact-location-section">
        <motion.div
          className="contact-location-top"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="contact-location-label">
            <span></span>INDIA, Hyderabad
          </span>
          <div className="contact-location-details">
            <div className="contact-location-item">
              <a href="tel:+910402994717">
                <FaPhoneSquareAlt />
                +91 (040) 2999 4717
              </a>
            </div>
            <div className="contact-location-item">
              <a href="mailto:info@convextech.com">
                <FaEnvelope />
                info@convextech.com
              </a>
            </div>
            <div className="contact-location-item">
              <span>
                <FaMapPin />
                115A, First Floor, Downtown Mall, Beside Lotus Hospital,
                Lakdikapul, Hyderabad 500-004
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-location-map-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            title="ConvexTech Location"
            className="contact-location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1455851921028!2d78.45833787580332!3d17.404799602301978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97e9cc98d797%3A0xa4b816327930becb!2sConvexTech%20INC!5e0!3m2!1sen!2sin!4v1745989111920!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>

      <section className="contact-location-section">
        <motion.div
          className="contact-location-top"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="contact-location-label">
            <span></span>INDIA, Noida
          </span>
          <div className="contact-location-details">
            <div className="contact-location-item">
              <a href="tel:+910402994717">
                <FaPhoneSquareAlt />
                +91 (040) 2999 4717
              </a>
            </div>
            <div className="contact-location-item">
              <a href="mailto:info@convextech.com">
                <FaEnvelope />
                info@convextech.com
              </a>
            </div>
            <div className="contact-location-item">
              <span>
                <FaMapPin />
                Jav Tower H17 2nd Floor, S-01 Sector 63 Noida 201301
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-location-map-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            title="ConvexTech Location"
            className="contact-location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9814192768526!2d77.37579207550073!3d28.630318975665972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce518ee0f9179%3A0x3598043c7b88e93e!2sJAV%20Tower!5e0!3m2!1sen!2sin!4v1745989279754!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>
    </section>
  );
};

export default Contact;
