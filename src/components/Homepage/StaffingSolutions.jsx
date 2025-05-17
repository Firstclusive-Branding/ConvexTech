import React from "react";
import "../../styles/StaffingSolutions.css";
import staffingBg from "../../assets/Staffing Solutions Assets/staffing-solutions.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StaffingSolutions = () => {
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
          Hire the Right People. Without the Headache
        </h2>
        <h4 className="staffing-sub-heading">
          Struggling to fill key roles? We make it easy
        </h4>

        <p className="staffing-text">
          At ConvexTech, we help you scale fast with skilled professionals who
          match your technical, cultural and business needs. Whether it’s
          contract hiring, permanent staffing or project-based roles, we bring
          the right people to your table — quickly, efficiently and reliably.
        </p>

        <motion.div
          className="staffing-highlights"
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
            Swift Hiring
          </motion.div>
          <motion.div className="highlight-box" variants={boxVariants}>
            Smooth Process
          </motion.div>
          <motion.div className="highlight-box" variants={boxVariants}>
            Skilled Candidates
          </motion.div>
        </motion.div>

        <Link className="staffing-button" to="/staffing-solutions">
          Know More
        </Link>
      </motion.div>
    </section>
  );
};

export default StaffingSolutions;
