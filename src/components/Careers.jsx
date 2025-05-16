import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Careers.css";
import careersImage from "../assets/Careers Assets/careers-img.png";
import axios from "axios";
import CareerSolutions from "./CareerSolutions";

const baseURL = import.meta.env.VITE_API_URL;

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Find Jobs - Convex Tech`;
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseURL}/api/user/jobs/getall`);
      if (res.data && res.data.error === false) {
        setJobs(res.data.data);
      } else {
        console.error("Failed to fetch jobs:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="careers-section-container">
      <div>
        <CareerSolutions />
      </div>
      <div className="careers-section">
        {loading ? (
          <div className="careers-loader-container">
            <div className="spinner" />
          </div>
        ) : (
          <div className="careers-section-wrapper">
            {jobs.map((job, index) => (
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                key={job._id}
                className="careers-card-wrapper"
              >
                <img
                  src={careersImage}
                  alt="Job"
                  className="careers-card-img"
                />
                <div className="careers-card-content">
                  <div className="careers-content-details">
                    <h3>{job.jobtitle}</h3>
                    <p>
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p>
                      <strong>Years of Experience:</strong> {job.experience}
                    </p>
                  </div>
                  <div className="careers-card-buttons">
                    <Link
                      to={`/job/${job.jobtitle
                        .replace(/\s+/g, "-")
                        .toLowerCase()}/${job._id}/apply`}
                      className="careers-btn apply-btn"
                    >
                      Apply Now
                    </Link>
                    <Link
                      to={`/job/${job.jobtitle
                        .replace(/\s+/g, "-")
                        .toLowerCase()}/${job._id}`}
                      className="careers-btn details-btn"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Careers;
