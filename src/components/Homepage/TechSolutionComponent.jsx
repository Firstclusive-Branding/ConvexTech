import React from "react";
import "../../styles/TechSolutionsComponents.css";
import techBg from "../../assets/Tech Solutions Component Assets/tech-solutions.png"; // replace with actual background image
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
          Purpose-Built Technology. Delivered With Precision.
        </h2>
        {/* <h4 className="tech-sub-heading">
          Need expert help with tech, branding or digital growth? We’ve got you.
        </h4> */}

        <p className="tech-text">
          At ConvexTech, we help businesses turn ideas into digital platforms
          that perform and scale. From SAP Consulting, Artificial Intelligence
          and Data Science to Branding, Web Development and Digital Marketing,
          our solutions are built to move fast, stay reliable and create
          long-term impact.
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
            Enterprise Logic
          </motion.div>
          <motion.div className="highlight-box" variants={boxVariants}>
            Modern Design
          </motion.div>
          <motion.div className="highlight-box" variants={boxVariants}>
            Real-World Results
          </motion.div>
        </motion.div>

        <Link className="tech-button" to="/project-enquiry">
          Talk to Us
        </Link>
      </motion.div>
    </section>
  );
};

export default TechSolutionComponent;
