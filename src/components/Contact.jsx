import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [captcha, setCaptcha] = useState({ question: "", answer: null });

  useEffect(() => {
    document.title = "Contact - ConvexTech";
    const newCaptcha = generateMathCaptcha();
    setCaptcha(newCaptcha);
  }, []);

  function generateMathCaptcha() {
    const operations = ["+", "-", "*"];
    let num1, num2, operator, result;

    while (true) {
      operator = operations[Math.floor(Math.random() * operations.length)];

      if (operator === "+") {
        num1 = Math.floor(Math.random() * 11);
        num2 = Math.floor(Math.random() * 11);
        result = num1 + num2;
        if (result <= 20) break;
      } else if (operator === "-") {
        num1 = Math.floor(Math.random() * 21);
        num2 = Math.floor(Math.random() * 21);
        result = num1 - num2;
        if (result !== 10) break;
      } else if (operator === "*") {
        num1 = Math.floor(Math.random() * 8);
        num2 = Math.floor(Math.random() * 8);
        result = num1 * num2;
        if (result <= 50) break;
      }
    }

    return {
      question: `${num1} ${operator} ${num2}`,
      answer: result,
    };
  }

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <img
          src="https://picsum.photos/seed/contactbanner/1200/300"
          alt="Contact"
        />
      </div>

      {/* Contact Form */}
      <motion.div
        className="contact-form-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Get In Touch</h2>
        <form className="contact-form">
          <p className="disclaimer-text">
            By submitting this form, you agree to our{" "}
            <a href="#">Terms and Conditions</a>. Please review them for details
            on acceptable use and data handling.
          </p>

          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Organization Name" required />
          <input type="tel" placeholder="Phone No." required />
          <input type="email" placeholder="Your Email Address" required />
          <textarea rows="4" placeholder="Your Message" required></textarea>

          <label className="checkbox-wrapper">
            <input type="checkbox" required />
            <span>
              By opting in for text messages, you agree to receive messages from
              ConvexTech, Inc at the number provided. Message frequency varies.
              Msg & data rates may apply. Reply STOP to opt out. For more
              information reply 'HELP' or view our Privacy Policy.
            </span>
          </label>

          <div className="captcha-box">
            <div className="captcha-text">{captcha.question} =</div>

            <input type="number" placeholder="Enter the result" required />
          </div>

          <button type="submit" className="submit-btn">
            Submit Request
          </button>
        </form>
      </motion.div>

      {/* Locations */}
      <section className="contact-locations">
        <h2>Our Locations</h2>
        <div className="locations-container">
          {[
            {
              city: "Texas, USA",
              phone: "+1 346 367 1777",
              email: "info@convextech.com",
              address: "11200 Broadway St Suite 2743",
              mapLink:
                "https://maps.google.com/maps?q=texas&t=&z=13&ie=UTF8&iwloc=&output=embed",
            },
            {
              city: "Hyderabad, India",
              phone: "+91 9032 997 177",
              email: "info@convextech.com",
              address: "115/A, Downtown Mall, Lakdikapul",
              mapLink:
                "https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed",
            },
            {
              city: "Noida, India",
              phone: "+91 9032 997 177",
              email: "info@convextech.com",
              address: "Jaip Tower, 2nd Floor, Sector 63",
              mapLink:
                "https://maps.google.com/maps?q=noida&t=&z=13&ie=UTF8&iwloc=&output=embed",
            },
          ].map((loc, index) => (
            <motion.div
              key={index}
              className="location-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{loc.city}</h3>
              <div className="location-icon-text">
                <FaPhoneAlt />
                <p>{loc.phone}</p>
              </div>
              <div className="location-icon-text">
                <FaEnvelope />
                <p>{loc.email}</p>
              </div>
              <div className="location-icon-text">
                <FaMapMarkerAlt />
                <p>{loc.address}</p>
              </div>
              <iframe
                title={`${loc.city} Map`}
                src={loc.mapLink}
                loading="lazy"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Contact;
