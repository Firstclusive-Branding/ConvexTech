import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/JobApply.css";
import { FaArrowLeftLong } from "react-icons/fa6";

const JobApply = () => {
  const { title, id } = useParams();

  const formattedTitle = title
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="jobapply-container">
      <Link to={`/job/${title}/${id}`} className="jobapply-back">
        <FaArrowLeftLong />
        Back to Job Details
      </Link>

      <h2>Apply for This Job</h2>
      <p className="jobapply-subtitle">
        Fill in your details and upload your CV.
      </p>

      <form className="jobapply-form">
        <input
          type="text"
          value={formattedTitle}
          readOnly
          className="readonly-input"
        />

        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Phone Number" required />
        <input type="number" placeholder="Experience" required />

        <label className="file-label">Upload Your CV (PDF Only)</label>
        <input type="file" accept="application/pdf" required />

        <div className="find-talent-checkbox">
          <input type="checkbox" id="find-TermsCheckbox" />
          <label
            htmlFor="find-TermsCheckbox"
            className="find-talent-checkbox-label"
          >
            By checking this box, I consent to receive text messages related to
            conversations and follow-ups from Cadila Global. You can reply
            ‘STOP’ at any time to opt out. Message and data rates may apply.
            Message frequency may vary; text HELP for assistance. For more
            information, please visit our{" "}
            <a href="/privacy-policy">Privacy Policy</a> and SMS{" "}
            <a href="/terms-and-conditions">Terms and Conditions</a>.
          </label>
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default JobApply;
