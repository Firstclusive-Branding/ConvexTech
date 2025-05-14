import React from "react";
import "../styles/CareerSolutions.css";
import careerBg from "../assets/Career Solutions Assets/career-solutions.jpg";
import { motion } from "framer-motion";

const CareerSolutions = () => {
  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="career-solutions-section"
      style={{ backgroundImage: `url(${careerBg})` }}
    >
      <motion.div
        className="career-solutions-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="career-solutions-label">
          <span></span>Career Solutions
        </p>
        <h2 className="career-solutions-heading">
          Find the Right Job. Without the Runaround.
        </h2>
        <h4 className="career-solutions-sub-heading">
          Tired of applying and hearing nothing back? We get it.
        </h4>

        <p className="career-solutions-text">
          At ConvexTech, we connect you to roles that match your skills, goals
          and lifestyle – not just your resume. Looking for full-time, part-time
          or freelance work? Problem solved.
        </p>

        <motion.div
          className="career-solutions-highlights"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div className="career-solutions-box" variants={boxVariants}>
            Honest Guidance
          </motion.div>
          <motion.div className="career-solutions-box" variants={boxVariants}>
            Real Opportunities
          </motion.div>
          <motion.div className="career-solutions-box" variants={boxVariants}>
            Faster Offers
          </motion.div>
        </motion.div>

        <button
          className="career-solutions-button"
          onClick={() => (window.location.href = "/contact-us")}
        >
          Get in Touch
        </button>
      </motion.div>
    </section>
  );
};

export default CareerSolutions;
