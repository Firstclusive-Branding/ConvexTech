import React from "react";
import "../../styles/CareerSolutions.css";
import careerBg from "../../assets/Career Solutions Assets/career-solutions.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          Move Forward. On Your Terms.
        </h2>
        {/* <h4 className="career-solutions-sub-heading">
          Tired of applying and hearing nothing back? We get it.
        </h4> */}

        <p className="career-solutions-text">
          We connect skilled professionals with roles that align with their
          strengths, goals and career path; not just their resume. Whether you
          are looking for a full-time position, project-based work or a flexible
          opportunity, we help you find what fits; with clarity, speed and
          purpose.
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
            Meaningful Roles
          </motion.div>
          <motion.div className="career-solutions-box" variants={boxVariants}>
            Clear Process
          </motion.div>
          <motion.div className="career-solutions-box" variants={boxVariants}>
            Faster Offers
          </motion.div>
        </motion.div>

        <Link className="career-solutions-button" to={"/find-jobs"}>
          Know More
        </Link>
      </motion.div>
    </section>
  );
};

export default CareerSolutions;
