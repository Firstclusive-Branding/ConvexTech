import React from "react";
import "../styles/StaffingSolutions.css";
import staffingBg from "../assets/Staffing Solutions Assets/staffing-solutions.jpg";
import { motion } from "framer-motion";

const StaffingSolutions = () => {
  return (
    <section
      className="staffing-section"
      style={{ backgroundImage: `url(${staffingBg})` }}
    >
      <motion.div
        className="staffing-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="staffing-label">
          <span></span>Staffing Solutions
        </p>
        <h2 className="staffing-heading">
          Find the Right Talent. Build Stronger Teams.
        </h2>
        <p className="staffing-text">
          At ConvexTech, we help you scale fast with skilled professionals who
          match your technical, cultural and business needs. Whether it’s
          contract hiring, permanent staffing or project-based roles, we bring
          the right people to your table — quickly, efficiently and reliably.
        </p>
        <button
          className="staffing-button"
          onClick={() => (window.location.href = "/contact-us")}
        >
          Get in Touch
        </button>
      </motion.div>
    </section>
  );
};

export default StaffingSolutions;
