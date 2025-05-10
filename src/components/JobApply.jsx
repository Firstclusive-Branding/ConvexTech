import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/JobApply.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";

const baseURL = import.meta.env.VITE_API_URL;

const JobApply = () => {
  const { title, id: jobid } = useParams();

  const formattedTitle = title
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  useEffect(() => {
    document.title = `Apply for ${formattedTitle} - Convex Tech`;
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    yearofexperience: "",
    resume: null,
    termaccepted: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, resume: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      Swal.fire("Resume Required", "Please upload your CV.", "warning");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Create applicant
      const res = await axios.post(`${baseURL}/api/user/jobapplicants/create`, {
        jobid,
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        yearofexperience: formData.yearofexperience,
      });

      const applicantId = res?.data?.data?._id;

      if (!applicantId) throw new Error("Failed to get applicant ID");

      // Step 2: Upload resume
      const form = new FormData();
      form.append("resume", formData.resume);

      await axios.post(
        `${baseURL}/api/user/jobapplicants/upload/${applicantId}`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      Swal.fire("Success", "Application submitted successfully!", "success");

      // Reset
      setFormData({
        name: "",
        email: "",
        mobile: "",
        yearofexperience: "",
        resume: null,
        termaccepted: false,
      });
      document.getElementById("resumeUpload").value = null;
    } catch (err) {
      console.error(err);
      Swal.fire("Error", err.response?.data?.message || err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="jobapply-container">
      <Link to={`/job/${title}/${jobid}`} className="jobapply-back">
        <FaArrowLeftLong /> Back to Job Details
      </Link>

      <h2>Apply for This Job</h2>
      <p className="jobapply-subtitle">
        Fill in your details and upload your CV.
      </p>

      <form className="jobapply-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={formattedTitle}
          readOnly
          className="readonly-input"
        />

        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Experience (in years)"
          name="yearofexperience"
          value={formData.yearofexperience}
          onChange={handleChange}
          required
        />

        <label className="file-label">Upload Your CV (PDF Only)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          name="resume"
          id="resumeUpload"
          onChange={handleChange}
          required
        />

        <div className="find-talent-checkbox">
          <input
            type="checkbox"
            id="find-TermsCheckbox"
            name="termaccepted"
            checked={formData.termaccepted}
            onChange={handleChange}
          />
          <label
            htmlFor="find-TermsCheckbox"
            className="find-talent-checkbox-label"
          >
            By checking this box, I consent to receive text messages related to
            conversations and follow-ups from Cadila Global. You can reply
            ‘STOP’ at any time to opt out. Message and data rates may apply.
            Message frequency may vary; text HELP for assistance. For more
            information, please visit our{" "}
            <a href="/privacy-policy">Privacy Policy</a> and{" "}
            <a href="/terms-and-conditions">Terms and Conditions</a>.
          </label>
        </div>

        <button type="submit" disabled={loading}>
          <span style={{ visibility: loading ? "hidden" : "visible" }}>
            SUBMIT
          </span>
          {loading && <span className="job-apply-loader"></span>}
        </button>
      </form>
    </div>
  );
};

export default JobApply;
