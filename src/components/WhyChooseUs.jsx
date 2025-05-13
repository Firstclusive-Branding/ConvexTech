import React from "react";
import { motion } from "framer-motion";
import "../styles/WhyChooseUs.css";
import WhyChooseUsImg1 from "../assets/Why Choose Us Assets/why-choose-us-1.png";
import WhyChooseUsImg2 from "../assets/Why Choose Us Assets/why-choose-us-2.png";

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
          People <span>First</span>. Tech That <span>Works</span>. Growth That{" "}
          <span>Lasts</span>
        </h2>

        <p className="whychooseus-text">
          At ConvexTech, we help you build strong teams first. From hiring top
          talent to running complex SAP projects to building websites and
          running digital campaigns; everything we do is built around your
          business goals.
        </p>
        <p className="whychooseus-text">
          We keep it simple. We focus on results. We stay with you for the long
          run!
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
