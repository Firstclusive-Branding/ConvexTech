import React from "react";
import { motion } from "framer-motion";
import "../styles/Presence.css";
import presencebg from "../assets/Presence Assets/presence-bg.png";

const Presence = () => {
  return (
    <section className="presence-section">
      <img src={presencebg} alt="presence bg" className="presence-bg" />
      <div className="presence-images-wrapper">
        <div className="presence-img-container presence-img1-bg">
          <img
            src="https://picsum.photos/id/1011/300/450"
            alt="team"
            className="presence-img1"
          />
        </div>
        <div className="presence-img-container presence-img2-bg">
          <img
            src="https://picsum.photos/id/1025/300/450"
            alt="businessman"
            className="presence-img2"
          />
        </div>
      </div>

      <motion.div
        className="presence-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
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
