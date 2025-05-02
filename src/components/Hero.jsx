import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import heroimage from "../assets/Hero Assets/hero-image.png";
import heroimageMobile from "../assets/Hero Assets/hero-image.jpg";
import heroslash from "../assets/Hero Assets/hero-slash.png";
import springcircle from "../assets/Hero Assets/spring-circle.png";
// import SplitText from "./SplitText";

const Hero = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const words = ["Empower", "Businesses", "with", "Smart", "Tech"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 1 + i * 0.2 },
    }),
  };

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <img src={springcircle} alt="spring-circle" className="spring-circle" />

        <p className="tagline">BEST IT SOLUTION PROVIDER</p>

        {/* <SplitText
          as="h1"
          delay={60}
          start={startAnimation}
          className="hero-heading"
        >
          {"Empower "}
          <span className="highlight">Businesses</span>
          {" with Smart Tech"}
        </SplitText> */}

        <motion.h1 className="hero-heading">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className={`hero-word ${
                word === "Businesses" ? "highlight" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.3 }}
            >
              {word}
              {index < words.length - 1 && " "}
            </motion.span>
          ))}
        </motion.h1>

        <p className="subtext">Providing Businesses with Next-Gen Solutions.</p>
        <button className="hero-button" onClick={handleScrollToServices}>
          Get Started
        </button>
      </motion.div>

      <div className="hero-right">
        <img
          src={heroimage}
          alt="Smart Tech Presentation"
          className="hero-image"
        />
        <img
          src={heroimageMobile}
          alt="Smart Tech Presentation"
          className="hero-image-mobile"
        />
        <motion.div
          className="image-overlay"
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
