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
          Hire the Right People. Without the Guesswork.
        </h2>
        <h4 className="staffing-sub-heading">
          Finding the right talent should not slow you down.
        </h4>

        <p className="staffing-text">
          At ConvexTech, we help you scale with professionals who fit your
          technical needs, company culture and business goals. Whether it is
          contract hiring, full-time staffing or project-based roles, we move
          fast, stay precise and deliver people you can count on; across every
          major industry.
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
            Seamless Process
          </motion.div>
          <motion.div className="highlight-box" variants={boxVariants}>
            Reliable Talent
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
