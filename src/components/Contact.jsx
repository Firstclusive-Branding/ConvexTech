import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import contactusimg from "../assets/Contact Us Assets/contact-us.png";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaEnvelope, FaMapPin } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";

const baseURL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    message: "",
    termaccepted: false,
  });

  useEffect(() => {
    document.title = `Contact Us - Convex Tech`;
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      termaccepted: formData.termaccepted || false,
    };

    try {
      const res = await axios.post(
        `${baseURL}/api/user/contactus/create`,
        payload
      );
      if (res.data && res.data.error === false) {
        Swal.fire("Success", "Message sent successfully!", "success");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          message: "",
          termaccepted: false,
        });
      } else {
        Swal.fire("Error", res.data.message || "Something went wrong", "error");
      }
    } catch (err) {
      Swal.fire("Error", err.message || "Submission failed", "error");
    } finally {
      setLoading(false);
    }
  };

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
            By submitting this form, you agree to our{" "}
            <a href="/terms-and-conditions" className="contact-link">
              Terms and Conditions
            </a>
            .
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <input
                type="text"
                placeholder="Your Name *"
                name="firstname"
                className="contact-input"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Last Name *"
                name="lastname"
                className="contact-input"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-row">
              <input
                type="email"
                placeholder="Your E-Mail *"
                name="email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Phone *"
                name="mobile"
                className="contact-input"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              placeholder="Message"
              name="message"
              className="contact-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="find-talent-checkbox">
              <input
                type="checkbox"
                id="contact-TermsCheckbox"
                name="termaccepted"
                checked={formData.termaccepted}
                onChange={handleChange}
              />
              <label
                htmlFor="contact-TermsCheckbox"
                className="find-talent-checkbox-label"
              >
                By checking this box, I consent to receive text messages related
                to conversations and follow-ups from ConvexTech. You can reply
                ‘STOP’ at any time to opt out. Message and data rates may apply.
                Message frequency may vary; text HELP for assistance. For more
                information, please visit our{" "}
                <a href="/privacy-policy">Privacy Policy</a> and{" "}
                <a href="/terms-and-conditions">Terms and Conditions</a>.
              </label>
            </div>

            <button type="submit" className="contact-button" disabled={loading}>
              <span style={{ visibility: loading ? "hidden" : "visible" }}>
                Send Now
              </span>
              {loading && <span className="contact-button-loader"></span>}
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

      {/* United States Location */}
      <LocationBlock
        label="UNITED STATES, Texas"
        phone="+1 346 367 1777"
        email="info@convextech.com"
        address="11200 Broadway Suite 2743 Pearland, TX 77584"
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.7420557741943!2d-95.3933916!3d29.5530053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xacf5e7a8ea7bb83d%3A0xe0dd4bec75e5106a!2sConvexTech!5e0!3m2!1sen!2sin!4v1745989061478!5m2!1sen!2sin"
      />

      {/* India Location - Hyderabad */}
      <LocationBlock
        label="INDIA, Hyderabad"
        phone="+91 (040) 2999 4717"
        email="info@convextech.com"
        address="115A, First Floor, Downtown Mall, Beside Lotus Hospital, Lakdikapul, Hyderabad 500-004"
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1455851921028!2d78.45833787580332!3d17.404799602301978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97e9cc98d797%3A0xa4b816327930becb!2sConvexTech%20INC!5e0!3m2!1sen!2sin!4v1745989111920!5m2!1sen!2sin"
      />

      {/* India Location - Noida */}
      <LocationBlock
        label="INDIA, Noida"
        phone="+91 (040) 2999 4717"
        email="info@convextech.com"
        address="Jav Tower H17 2nd Floor, S-01 Sector 63 Noida 201301"
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9814192768526!2d77.37579207550073!3d28.630318975665972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce518ee0f9179%3A0x3598043c7b88e93e!2sJAV%20Tower!5e0!3m2!1sen!2sin!4v1745989279754!5m2!1sen!2sin"
      />
    </section>
  );
};

// Reusable location block component
const LocationBlock = ({ label, phone, email, address, mapSrc }) => (
  <section className="contact-location-section">
    <motion.div
      className="contact-location-top"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <span className="contact-location-label">
        <span></span>
        {label}
      </span>
      <div className="contact-location-details">
        <div className="contact-location-item">
          <a href={`tel:${phone}`}>
            <FaPhoneSquareAlt /> {phone}
          </a>
        </div>
        <div className="contact-location-item">
          <a href={`mailto:${email}`}>
            <FaEnvelope /> {email}
          </a>
        </div>
        <div className="contact-location-item">
          <a href={mapSrc} target="_blank" rel="noopener noreferrer">
            <FaMapPin /> {address}
          </a>
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
        title={`${label} Map`}
        className="contact-location-map"
        src={mapSrc}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </motion.div>
  </section>
);

export default Contact;
