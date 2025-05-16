import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "../styles/StatsCounter.css";
import statsBgImage from "../assets/Stats Counter Assets/stats-counter-image.png";

const StatsCounter = () => {
  const statsData = [
    { target: 390, label: "Projects Delivered", suffix: "+" },
    { target: 120, label: "Happy Clients", suffix: "+" },
    { target: 18000, label: "Professionals Placed", suffix: "+" },
    { target: 600, label: "Open Opportunities", suffix: "+" },
  ];

  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setCounts(statsData.map((stat) => stat.target));
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <section className="sc-section">
      <motion.div
        className="sc-container"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="sc-content" ref={statsRef}>
          {statsData.map((stat, index) => (
            <motion.div
              className="sc-stat-box"
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
            >
              <h2 className="stat-value">
                <Odometer
                  value={counts[index]}
                  format="d,ddd"
                  duration={2000}
                />
                {stat.suffix}
              </h2>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <img src={statsBgImage} alt="Team Working" className="sc-image" />
      </motion.div>
    </section>
  );
};

export default StatsCounter;
