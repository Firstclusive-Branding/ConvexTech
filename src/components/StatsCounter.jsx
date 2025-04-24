import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/StatsCounter.css";
import statsBgImage from "../assets/Stats Counter Assets/stats-counter-image.png";

const StatsCounter = () => {
  const statsData = [
    { target: 890, label: "Projects Completed", suffix: "+" },
    { target: 12, label: "Our Happy Clients", suffix: "M" },
    { target: 67, label: "All Time Active Users", suffix: "k+" },
    { target: 67, label: "Upcoming Projects", suffix: "k" },
  ];

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
    <motion.section
      className="sc-section"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="sc-container">
        <div className="sc-content" ref={statsRef}>
          {statsData.map((stat, index) => (
            <motion.div
              className="sc-stat-box"
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
            >
              <h2
                className="stat-value"
                style={{ opacity: counts[index] > 0 ? 1 : 0 }}
              >
                {Math.floor(counts[index]).toLocaleString()}
                {stat.suffix}
              </h2>

              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <img src={statsBgImage} alt="Team Working" className="sc-image" />
      </div>
    </motion.section>
  );
};

export default StatsCounter;
