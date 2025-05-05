import React from "react";
import "../styles/ProjectEnquiry.css";
import enquiryImage from "../assets/Project Enquiry Assets/project-enquiry.png";
import { motion } from "framer-motion";

const ProjectEnquiry = () => {
  return (
    <div>
      <div className="project-enquiry-container">
        <div className="project-enquiry-content">
          <motion.div
            className="project-enquiry-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="project-enquiry-subtitle">Start Your Project</h3>
            <h1 className="project-enquiry-title">
              Let’s Build Something Great
            </h1>
            <p className="project-enquiry-description">
              Tell us what you're building. We’ll review your request and get
              back with a plan that suits your goals and budget.
            </p>
            <div className="project-enquiry-image">
              <img src={enquiryImage} alt="Project Enquiry" />
            </div>
          </motion.div>

          <motion.div
            className="project-enquiry-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form className="project-enquiry-form">
              <input
                type="text"
                name="Full_Name"
                placeholder="Enter your full name"
                required
              />
              <input
                type="text"
                name="Company_Name"
                placeholder="Enter company name (if any)"
              />
              <input
                type="email"
                name="Email"
                placeholder="Enter your email"
                required
              />
              <input
                type="text"
                name="Project_Type"
                placeholder="What type of project?"
                required
              />
              <input
                type="text"
                name="Budget"
                placeholder="Estimated budget (optional)"
              />
              <textarea
                name="Message"
                placeholder="Tell us more about the project"
                required
              ></textarea>

              <button type="submit">Send Enquiry</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEnquiry;
