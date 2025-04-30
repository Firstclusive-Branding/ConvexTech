import React from "react";
import { useParams, Link } from "react-router-dom";
import { jobList } from "./CareersList";
import "../styles/JobDetails.css";
import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobList.find((job) => job.id === parseInt(id));

  if (!job) return <p>Job not found.</p>;

  const formattedTitle = job.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="job-details">
      <Link to="/careers" className="back-button">
        <FaArrowLeftLong />
        Back to Careers
      </Link>
      <motion.div
        className="job-details-wrapper"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <h1>{job.title}</h1>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Category:</strong> {job.category}
        </p>
        <p>{job.description}</p>
        <p>{job.company}</p>

        <h3>Role</h3>
        <p>{job.role}</p>

        <h4>Qualifications</h4>
        <ul>
          {job.qualifications.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>

        <h4>Bonus Skills</h4>
        <ul>
          {job.bonus.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <Link
          to={`/job/${formattedTitle}/${job.id}/apply`}
          className="job-apply-link"
        >
          Apply Now
        </Link>
      </motion.div>
    </div>
  );
};

export default JobDetails;
