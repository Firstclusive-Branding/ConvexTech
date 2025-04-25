import React from "react";
import { motion } from "framer-motion";
import "../styles/WhoWeAre.css";
import whoWeAreImage from "../assets/who we are assets/who-we-are-img.png";
import whoWeAreBg from "../assets/who we are assets/who-we-are-bg.png";
import bgPattern from "../assets/circle-dot-bg.png";

const WhoWeAre = () => {
  return (
    <section
      className="who-we-are-section"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <motion.div
        className="who-we-are-left"
        initial={{ x: -100, scale: 0.5, opacity: 0 }}
        whileInView={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="who-we-are-left-image-wrapper">
          <img
            src={whoWeAreBg}
            alt="background"
            className="who-we-are-left-bg-shape"
          />
          <img
            src={whoWeAreImage}
            alt="who we are"
            className="who-we-are-left-main-image"
          />
        </div>
      </motion.div>

      <motion.div
        className="who-we-are-right"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="who-we-are-section-title">
          <span className="who-we-are-section-title-tag"></span>
          <span>WHO WE ARE</span>
        </p>
        <h2 className="who-we-are-quote">
          “When digital transformation is done right, it’s like a caterpillar
          turning into a
          <span className="who-we-are-highlight"> butterfly”</span>
        </h2>
        <button className="who-we-are-read-more-btn">Read more</button>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
