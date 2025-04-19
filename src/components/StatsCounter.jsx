import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { LuClipboardCheck } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaBriefcase, FaHandshake } from "react-icons/fa";
import "../styles/StatsCounter.css";

const statsData = [
  { icon: <FaHandshake />, target: 550, label: "Happy Clients" },
  { icon: <LuClipboardCheck />, target: 500, label: "Projects Done" },
  { icon: <HiOutlineUserGroup />, target: 150, label: "Professionals" },
  { icon: <FaBriefcase />, target: 13, label: "Years Experience" },
];

const StatsCounter = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500;
    const frameRate = 10;
    const totalSteps = duration / frameRate;
    const increments = statsData.map((stat) => stat.target / totalSteps);

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          const next = count + increments[i];
          return next >= statsData[i].target ? statsData[i].target : next;
        })
      );
    }, frameRate);

    setTimeout(() => clearInterval(interval), duration + 100);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="stats-section" ref={statsRef}>
      <motion.h2
        className="stats-heading"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Impact in Numbers
      </motion.h2>

      <div className="stats-container">
        {statsData.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <h3 className="stat-value">{Math.floor(counts[index])}+</h3>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
