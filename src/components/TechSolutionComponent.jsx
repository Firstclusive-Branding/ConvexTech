import React from "react";
import "../styles/TechSolutionsComponents.css";
import techBg from "../assets/Tech Solutions Component Assets/tech-solutions.png"; // replace with actual background image
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TechSolutionComponent = () => {
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
      className="tech-section"
      style={{ backgroundImage: `url(${techBg})` }}
    >
      <motion.div
        className="tech-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="tech-label">
          <span></span>Tech Solutions
        </p>
        <h2 className="tech-heading">
          Launch Smarter. Scale Faster. Build with Confidence.
        </h2>
        <h4 className="tech-sub-heading">
          Need expert help with tech, branding or digital growth? We’ve got you.
        </h4>

        <p className="tech-text">
          At ConvexTech, we deliver end-to-end solutions across SAP Consulting,
          Artificial Intelligence, Data Science, Branding, Corporate Website
          Design, Custom and E-Commerce Web Development, and Digital Marketing —
          including SEO, Social Media Marketing and Performance Marketing.
        </p>

        <motion.div
          className="tech-highlights"
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
          <motion.div className="highlight-box" variants={boxVariants}>
            Smart Strategy
          </motion.div>
          <motion.div className="highlight-box" variants={boxVariants}>
            Strong Execution
          </motion.div>
          <motion.div className="highlight-box" variants={boxVariants}>
            Business Impact
          </motion.div>
        </motion.div>

        <Link className="tech-button" to="/tech-solutions">
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
};

export default TechSolutionComponent;
