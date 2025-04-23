import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import heroimage from "../assets/Hero Assets/hero-image.png";
import heroslash from "../assets/Hero Assets/hero-slash.png";
import springcircle from "../assets/Hero Assets/spring-circle.png";

const Hero = () => {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="slash-mask"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <img src={heroslash} alt="hero-slash" className="hero-slash" />
      </motion.div>

      <motion.div
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <img src={springcircle} alt="spring-circle" className="spring-circle" />
        <p className="tagline">BEST IT SOLUTION PROVIDER</p>
        <h1>
          Empower <span className="highlight"> Businesses</span> with Smart Tech
        </h1>
        <p className="subtext">Providing Businesses with Next-Gen Solutions.</p>
        <button className="hero-button">Get Started</button>
      </motion.div>

      <div className="hero-right">
        <div className="image-container">
          <img
            src={heroimage}
            alt="Smart Tech Presentation"
            className="hero-image"
          />
          <motion.div
            className="image-overlay"
            initial={{ x: "0%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
