import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import "../styles/ClientTestimonials.css";
import testimonialBg from "../assets/Client Testimonials Assets/testimonial-bg.png";

const testimonials = [
  {
    name: "Robb Norris",
    position: "Director of Recruitment",
    content:
      "Paradigms. Monotectonically extend open-source via competitive methods of empowerment dri revolutionize stand- business",
  },
  {
    name: "Robb Norris",
    position: "Director of Recruitment",
    content:
      "Paradigms. Monotectonically extend open-source via competitive methods of empowerment dri revolutionize stand- business",
  },
  {
    name: "Robb Norris",
    position: "Director of Recruitment",
    content:
      "Paradigms. Monotectonically extend open-source via competitive methods of empowerment dri revolutionize stand- business",
  },
];

const ClientTestimonials = () => {
  return (
    <section
      className="ct-section"
      style={{ backgroundImage: `url(${testimonialBg})` }}
    >
      <motion.div
        className="ct-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="ct-label">
          <span className="ct-label-tag"></span>
          Client Testimonials
        </div>
        <h2>
          See What <span className="ct-highlight">Our Clients</span> Are Saying
        </h2>
      </motion.div>

      <div className="ct-cards-wrapper">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="ct-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <BiSolidQuoteAltRight className="ct-quote-icon" />
            <p className="ct-content">{testimonial.content}</p>
            <hr />
            <div className="ct-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="ct-star" />
              ))}
            </div>
            <div className="ct-user-info">
              <strong>{testimonial.name}</strong>,{" "}
              <span>{testimonial.position}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
