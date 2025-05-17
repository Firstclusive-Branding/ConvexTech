import React from "react";
import { motion } from "framer-motion";
import "../../styles/WhyChooseUs.css";
import WhyChooseUsImg1 from "../../assets/Why Choose Us Assets/why-choose-us-1.png";
import WhyChooseUsImg2 from "../../assets/Why Choose Us Assets/why-choose-us-2.png";

const WhyChooseUs = () => {
  return (
    <section className="whychooseus-section">
      <motion.div
        className="whychooseus-image"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={WhyChooseUsImg1}
          alt="Why Choose Us"
          className="whychooseus-img1"
        />
        <motion.img
          src={WhyChooseUsImg2}
          alt="Why Choose Us"
          className="whychooseus-img2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      <motion.div
        className="whychooseus-content"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="whychooseus-label">
          <span></span>Why Choose Us
        </p>
        <h2 className="whychooseus-heading">
          Clarity in <span>Execution.</span> Consistency in{" "}
          <span>Delivery.</span> Confidence in <span>Results.</span>
        </h2>

        <p className="whychooseus-text">
          At ConvexTech, we help businesses move forward by aligning the right
          talent, technology and strategy.
        </p>
        <p className="whychooseus-text">
          Our work spans Staffing, SAP Consulting, Artificial Intelligence, Data
          Science, Full-Stack Development, Branding and Marketing delivered with
          purpose, precision and accountability.
        </p>
        <p className="whychooseus-text">
          We do not just build platforms and scale operations; we create jobs,
          shape careers and support businesses that are ready to grow.
        </p>

        <button
          className="whychooseus-button"
          onClick={() => (window.location.href = "/about-us")}
        >
          Learn More About Us
        </button>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
