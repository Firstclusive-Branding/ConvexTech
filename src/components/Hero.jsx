import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";
import heroAvatar from "../assets/Hero Assets/hero-avatar.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Smart Solutions. Real Impact.
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At ConvexTech, we don’t just build technology — we build what your
          business needs to scale, adapt and lead in a digital-first world.
        </motion.p>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="hero-btn-primary">Explore Our Services</button>
        </motion.div>
      </div>
      <img src={heroAvatar} alt="hero-avatar" className="hero-avatar" />
    </section>
  );
};

export default HeroSection;
