// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { jobList } from "./CareersList";
// import "../styles/JobDetails.css";
// import { motion } from "framer-motion";
// import { FaArrowLeftLong } from "react-icons/fa6";

// const JobDetails = () => {
//   const { id } = useParams();
//   const job = jobList.find((job) => job.id === parseInt(id));

//   if (!job) return <p>Job not found.</p>;

//   const formattedTitle = job.title.toLowerCase().replace(/\s+/g, "-");

//   useEffect(() => {
//     document.title = `${job.title} - Convex Tech`;
//   }, []);

//   return (
//     <div className="job-details">
//       <Link to="/find-jobs" className="back-button">
//         <FaArrowLeftLong />
//         Back to Careers
//       </Link>
//       <motion.div
//         className="job-details-wrapper"
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: 50 }}
//         transition={{ duration: 1 }}
//       >
//         <h1>{job.title}</h1>
//         <p>
//           <strong>Location:</strong> {job.location}
//         </p>
//         <p>
//           <strong>Category:</strong> {job.category}
//         </p>
//         <p>{job.description}</p>
//         <p>{job.company}</p>

//         <h3>Role</h3>
//         <p>{job.role}</p>

//         <h4>Qualifications</h4>
//         <ul>
//           {job.qualifications.map((q, i) => (
//             <li key={i}>{q}</li>
//           ))}
//         </ul>

//         <h4>Bonus Skills</h4>
//         <ul>
//           {job.bonus.map((b, i) => (
//             <li key={i}>{b}</li>
//           ))}
//         </ul>

//         <Link
//           to={`/job/${formattedTitle}/${job.id}/apply`}
//           className="job-apply-link"
//         >
//           Apply Now
//         </Link>
//       </motion.div>
//     </div>
//   );
// };

// export default JobDetails;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/JobDetails.css";
import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Job Details - Convex Tech`;
    fetchJobById();
  }, []);

  const fetchJobById = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/user/jobs/getall`);
      if (res.data && res.data.error === false) {
        const found = res.data.data.find((j) => j._id === id);
        if (found) {
          setJob(found);
          document.title = `${found.jobtitle} - Convex Tech`;
        }
      }
    } catch (err) {
      console.error("Error fetching job:", err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!job) return <p>Job not found.</p>;

  const formattedTitle = job.jobtitle.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="job-details">
      <Link to="/find-jobs" className="back-button">
        <FaArrowLeftLong /> Back to Careers
      </Link>

      <motion.div
        className="job-details-wrapper"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <h1>{job.jobtitle}</h1>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Experience:</strong> {job.experience}
        </p>
        <p>
          <strong>Salary:</strong> ${job.salary}
        </p>

        <div>
          <strong>Description:</strong>
          <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
            {job.jobdescription}
          </pre>
        </div>

        <Link
          to={`/job/${formattedTitle}/${job._id}/apply`}
          className="job-apply-link"
        >
          Apply Now
        </Link>
      </motion.div>
    </div>
  );
};

export default JobDetails;
