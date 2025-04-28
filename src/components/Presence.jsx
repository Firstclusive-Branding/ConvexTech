import React from "react";
import { motion } from "framer-motion";
import "../styles/Presence.css";
import presencebg from "../assets/circle-pattern-bg.png";
import presenceimg1 from "../assets/Presence Assets/presence-img1.png";
import presenceimg2 from "../assets/Presence Assets/presence-img2.png";

const Presence = () => {
  return (
    <section className="presence-section">
      <img src={presencebg} alt="presence bg" className="presence-bg" />

      <div className="presence-images-wrapper">
        <motion.div
          className="presence-img-container presence-img1-container"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        >
          <motion.span
            className="presend-bg-img1"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "right" }}
          ></motion.span>
          <img src={presenceimg1} alt="team" className="presence-img1" />
        </motion.div>
        <motion.div
          className="presence-img-container presence-img2-container"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "right" }}
        >
          <motion.span
            className="presend-bg-img2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          ></motion.span>
          <img src={presenceimg2} alt="businessman" className="presence-img2" />
        </motion.div>
      </div>

      <motion.div
        className="presence-content"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
      >
        <h2 className="presence-heading">
          We Elevate & Enhance Your <span>presence</span>
        </h2>
        <p className="presence-text">
          Through the strategic approach, we tailor the solutions which help the
          customers with their predefined goals and bring about a way for a
          digital footprint.
        </p>
        <button className="presence-button">Read More</button>
      </motion.div>
    </section>
  );
};

export default Presence;
