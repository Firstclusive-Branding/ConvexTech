import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";
import contactUs from "../assets/Contact Us Assets/contact-us.png";

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
      <div className="contact-form-container">
        <h1>Get In Touch</h1>
        <div className="contact-form-content">
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <form className="contact-form">
              <p className="disclaimer-text">
                By submitting this form, you agree to our{" "}
                <a href="#">Terms and Conditions</a>. Please review them for
                details on acceptable use and data handling.
              </p>

              <input type="text" placeholder="Your Name" required />
              <input type="text" placeholder="Organization Name" required />
              <input type="tel" placeholder="Phone No." required />
              <input type="email" placeholder="Your Email Address" required />
              <textarea rows="4" placeholder="Your Message" required></textarea>

              <label className="checkbox-wrapper">
                <input type="checkbox" required />
                <span>
                  By opting in for text messages, you agree to receive messages
                  from ConvexTech, Inc at the number provided. Message frequency
                  varies. Msg & data rates may apply. Reply STOP to opt out. For
                  more information reply 'HELP' or view our Privacy Policy.
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
          <div className="contact-us-img-container">
            <img src={contactUs} alt="contact-us" />
          </div>
        </div>
      </div>

      <section className="contact-locations">
        <h2>Our Locations</h2>
        <div className="locations-container">
          {[
            {
              city: "Texas, USA",
              phone: "+1 346 367 1777",
              email: "info@convextech.com",
              address: "11200 Broadway Suite 2743 Pearland, TX 77584",
              mapLink:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867.6852654614622!2d-95.39388671342707!3d29.5530342385126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xacf5e7a8ea7bb83d%3A0xe0dd4bec75e5106a!2sConvexTech!5e0!3m2!1sen!2sin!4v1745057170880!5m2!1sen!2sin",
            },
            {
              city: "Hyderabad, India",
              phone: "+91 9032 997 177",
              email: "info@convextech.com",
              address:
                "115A, First Floor, Downtown Mall, Beside Lotus Hospital, Lakdikapul, Hyderabad 500-004",
              mapLink:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1455851921028!2d78.45833787580331!3d17.404799602301978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97e9cc98d797%3A0xa4b816327930becb!2sConvexTech%20INC!5e0!3m2!1sen!2sin!4v1745056848344!5m2!1sen!2sin",
            },
            {
              city: "Noida, India",
              phone: "+91 9032 997 177",
              email: "info@convextech.com",
              address: "Jav Tower H17 2nd Floor S-01 Sector 63 Noida 201301",
              mapLink:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d309.5342295427579!2d77.37835853912243!3d28.630360208053997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce518ee0f9179%3A0x3598043c7b88e93e!2sJAV%20Tower!5e0!3m2!1sen!2sin!4v1745057102627!5m2!1sen!2sin",
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
                <p>
                  <a href={`tel:${loc.phone.replace(/\s+/g, "")}`}>
                    {loc.phone}
                  </a>
                </p>
              </div>
              <div className="location-icon-text">
                <FaEnvelope />
                <p>
                  <a href={`mailto:${loc.email}`}>{loc.email}</a>
                </p>
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
