import React from "react";
import { motion } from "framer-motion";
import "../styles/AboutUsWhoWeAre.css";

import presencebg from "../assets/circle-pattern-bg.png";
import aboutuswhoweareimg1 from "../assets/About Us Assets/Aboutus Whoweare Assets/aboutus-whoweare-img1.png";
import aboutuswhoweareimg2 from "../assets/About Us Assets/Aboutus Whoweare Assets/aboutus-whoweare-img2.png";

const AboutUsWhoWeAre = () => {
  return (
    <section className="aboutus-whoweare">
      <img src={presencebg} alt="bg" className="aboutus-whoweare-bg" />
      <div className="aboutus-whoweare-content">
        <div className="aboutus-whoweare-images">
          <motion.div
            className="aboutus-whoweare-img-wrapper img1-wrapper"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <span className="aboutus-whoweare-img1-bg"></span>
            <img
              src={aboutuswhoweareimg1}
              alt="Team Office"
              className="aboutus-whoweare-img1"
            />
          </motion.div>

          <motion.div
            className="aboutus-whoweare-img-wrapper img2-wrapper"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <span className="aboutus-whoweare-img2-bg"></span>

            <img
              src={aboutuswhoweareimg2}
              alt="Team Meeting"
              className="aboutus-whoweare-img2"
            />
          </motion.div>
        </div>

        <motion.div
          className="aboutus-whoweare-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="aboutus-whoweare-label">
            <span></span>Who We Are
          </div>
          <h2 className="aboutus-whoweare-heading">
            Get access to the finest end-to-end solutions that
            <span> make a real difference.</span>
          </h2>
          <p className="aboutus-whoweare-description">
            Convextech, we always look forward to constant innovation towards
            building end-to-end solutions and, over time, delivering results
            through cutting-edge technology.
          </p>
          <p className="aboutus-whoweare-description">
            The expert team brings years of experience and expertise dealing
            with multiple technologies pertaining to providing solutions.
          </p>
          <button className="aboutus-whoweare-button">Read More</button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsWhoWeAre;
