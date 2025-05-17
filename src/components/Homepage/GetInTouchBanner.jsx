import React from "react";
import "../../styles/GetInTouchBanner.css";
import { FaQuoteLeft, FaQuoteRight, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GetInTouchBanner = () => {
  return (
    <section className="getintouch-section">
      <div className="getintouch-content">
        <motion.div
          className="getintouch-quote-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="getintouch-text">
            <FaQuoteLeft className="getintouch-quote-icon" />
            The best connections in business do not start with a pitch. They
            start with a conversation.
            <FaQuoteRight className="getintouch-quote-icon" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Link to="/contact-us" className="getintouch-button">
            Get in Touch
            <span className="phone-icon-wrapper">
              <FaPhoneAlt className="phone-icon" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouchBanner;
