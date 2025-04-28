import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TbUserStar, TbListCheck } from "react-icons/tb";
import { LiaUserClockSolid } from "react-icons/lia";
import { LuBriefcaseBusiness } from "react-icons/lu";
import aboutusheroimg1 from "../assets/About Us Assets/About Us Hero Assets/about-us-hero1.png";
import aboutusheroimg2 from "../assets/About Us Assets/About Us Hero Assets/about-us-hero2.png";

import "../styles/AboutUsHero.css";

const AboutUsHero = () => {
  const statsData = [
    { icon: <TbUserStar />, target: 550, label: "Happy Clients" },
    { icon: <TbListCheck />, target: 500, label: "Projects Done" },
    { icon: <LiaUserClockSolid />, target: 150, label: "Professionals" },
    { icon: <LuBriefcaseBusiness />, target: 13, label: "Years Experience" },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 100;
    const intervalTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setCounts(
        statsData.map((stat) =>
          Math.min(Math.floor(stat.target * (currentStep / steps)), stat.target)
        )
      );

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="aboutus-hero">
      <div className="aboutus-hero-content">
        <motion.div
          className="aboutus-hero-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="aboutus-hero-label">
            <span></span>About Us
          </div>
          <h2 className="aboutus-hero-quote">
            “When an enterprise embarks on a technical and transformational
            journey, it must scale with both speed and accuracy.{" "}
            <span>That balance is where real impact begins.</span>”
          </h2>
          <p className="aboutus-hero-description">
            With 13 years of experience in technology, we’ve built solutions
            that not only meet end-to-end requirements but also empower our
            clients to improve workflow and add real value through digital
            innovation.
          </p>
          <button className="aboutus-hero-button">Read More</button>
        </motion.div>

        <div className="aboutus-hero-images">
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={aboutusheroimg1}
            alt="Team working"
            className="aboutus-hero-img1"
          />
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={aboutusheroimg2}
            alt="Presentation"
            className="aboutus-hero-img2"
          />
        </div>
      </div>

      <motion.div className="aboutus-hero-stats" ref={statsRef}>
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="aboutus-hero-stat-card"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aboutus-hero-icon">{stat.icon}</div>
            <div className="aboutus-hero-number">{counts[index]}+</div>
            <div className="aboutus-hero-label-text">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutUsHero;
