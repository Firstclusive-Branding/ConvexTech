import React from "react";
import { motion } from "framer-motion";
import "../styles/WhoWeAre.css";
import { FaQuoteLeft } from "react-icons/fa";
import whoWeAreImage from "../assets/who we are assets/who-we-are2.png";
import butterfly from "../assets/who we are assets/butterfly.gif";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <section className="who-wrapper">
      <div className="who-container">
        <div className="who-image">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={whoWeAreImage}
              alt="Who we are"
              className="who-we-are-img"
            />
          </motion.div>
          <img src={butterfly} alt="Who we are" className="butterfly-img" />
        </div>
        <motion.div
          className="who-text"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <FaQuoteLeft className="who-quote-icon" />
          <h2>Who We Are</h2>
          <p>
            “When digital transformation is done right, it’s like a caterpillar
            turning into a butterfly”
          </p>
          <Link to="/about-us" className="who-we-btn">
            Read More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
