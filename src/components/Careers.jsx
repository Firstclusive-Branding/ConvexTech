import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { jobList } from "./CareersList";
import "../styles/Careers.css";
import careersImage from "../assets/Careers Assets/careers-img.png";

const Careers = () => {
  return (
    <section className="careers-section">
      <div className="careers-section-wrapper">
        {jobList.map((job, index) => (
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            key={job.id}
            className="careers-card-wrapper"
          >
            <img src={careersImage} alt="Job" className="careers-card-img" />
            <div className="careers-card-content">
              <div className="careers-content-details">
                <h3>{job.title}</h3>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Business Area:</strong> {job.category}
                </p>
                <p>
                  <strong>Years of Experience: </strong> {job.min_experience}-
                  {job.max_experience}
                </p>
              </div>
              <div className="careers-card-buttons">
                <Link
                  to={`/job/${job.title}/${job.id}/apply`}
                  className="careers-btn apply-btn"
                >
                  Apply Now
                </Link>
                <Link
                  to={`/job/${job.title.replace(/\s+/g, "-").toLowerCase()}/${
                    job.id
                  }`}
                  className="careers-btn details-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Careers;
