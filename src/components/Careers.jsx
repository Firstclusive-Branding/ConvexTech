import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUserTie, FaCheckCircle, FaStar } from "react-icons/fa";
import "../styles/Careers.css";

const jobList = [
  {
    id: 1,
    title: "Digital Marketing Specialist",
    location: "Austin, TX",
    category: "Non-IT",
    description:
      "Join our marketing team to help drive innovative digital marketing strategies for our clients across various industries.",
    company:
      "Firstclusive Branding is a leading provider of innovative IT solutions, serving over 800 clients worldwide since 2014.",
    role: "The Digital Marketing Specialist will be responsible for planning and executing digital marketing campaigns, including SEO/SEM, email marketing, social media, and PPC advertising.",
    qualifications: [
      "Strong experience in SEO, SEM, and social media marketing.",
      "Proficiency in Google Analytics, Google Ads, and Facebook Ads Manager.",
      "Ability to develop and execute content strategies.",
      "Knowledge of marketing automation tools.",
      "Strong analytical and problem-solving skills.",
    ],
    bonus: [
      "Experience in influencer marketing.",
      "Familiarity with A/B testing and conversion rate optimization.",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "San Francisco, CA",
    category: "IT",
    description:
      "Build dynamic and scalable interfaces using React and modern UI frameworks.",
    company:
      "Work with an agile team that values clean code, user-focused design, and cutting-edge performance.",
    role: "You’ll be involved in building reusable UI components and integrating with REST APIs.",
    qualifications: [
      "Expertise in React, HTML, CSS, JavaScript.",
      "Experience with Git and RESTful APIs.",
      "Understanding of responsive design.",
      "Familiarity with performance optimization.",
    ],
    bonus: ["Experience with Next.js", "Knowledge of Tailwind CSS"],
  },
  {
    id: 3,
    title: "Registered Nurse",
    location: "Chicago, IL",
    category: "Healthcare",
    description:
      "Deliver compassionate, high-quality care to patients in a leading healthcare facility.",
    company:
      "Join a hospital network known for its innovative care practices and strong patient outcomes.",
    role: "Work closely with physicians and care teams to ensure safe patient recovery and satisfaction.",
    qualifications: [
      "Current nursing license in IL.",
      "Strong communication and documentation skills.",
      "Knowledge of patient safety standards.",
    ],
    bonus: ["Experience in critical care units", "BLS and ACLS certification"],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    location: "New York, NY",
    category: "IT",
    description:
      "Work on scalable web applications and REST APIs using the MERN stack.",
    company:
      "We’re a fast-growing tech company delivering modern applications for digital-first businesses.",
    role: "You’ll contribute to backend architecture, frontend development, and database integration.",
    qualifications: [
      "Strong in Node.js, Express, MongoDB, and React.",
      "Experience with cloud platforms like AWS.",
      "Familiarity with CI/CD workflows.",
    ],
    bonus: ["Experience in GraphQL", "Docker/Kubernetes knowledge"],
  },
  {
    id: 5,
    title: "Administrative Assistant",
    location: "Phoenix, AZ",
    category: "Non-IT",
    description:
      "Support daily office operations and executive schedules in a professional setting.",
    company:
      "A stable, long-standing firm known for employee-first culture and career growth.",
    role: "Coordinate meetings, manage calendars, and handle communications.",
    qualifications: [
      "Excellent organizational skills.",
      "Strong written and verbal communication.",
      "Proficiency in MS Office and Google Workspace.",
    ],
    bonus: ["Event planning experience", "Basic accounting knowledge"],
  },
  {
    id: 6,
    title: "Medical Billing Specialist",
    location: "Houston, TX",
    category: "Healthcare",
    description:
      "Ensure accurate medical billing and claims processing for our patients and providers.",
    company:
      "A trusted multi-specialty healthcare network with cutting-edge technology systems.",
    role: "Verify patient data, code diagnoses, and communicate with insurance providers.",
    qualifications: [
      "Knowledge of ICD-10 and CPT codes.",
      "Experience with insurance claim platforms.",
      "Attention to detail and record-keeping.",
    ],
    bonus: [
      "Certification in medical coding",
      "Experience with eClinicalWorks",
    ],
  },
  {
    id: 7,
    title: "Cloud Solutions Architect",
    location: "Seattle, WA",
    category: "IT",
    description:
      "Design and implement cloud-native solutions for enterprise applications.",
    company:
      "Join a leader in digital transformation delivering scalable infrastructure solutions.",
    role: "Develop cloud roadmaps and align architectures with business goals.",
    qualifications: [
      "Expertise in AWS or Azure environments.",
      "Experience with DevOps practices.",
      "Understanding of microservices and containers.",
    ],
    bonus: [
      "Cloud certification (AWS/Azure)",
      "Terraform or Ansible experience",
    ],
  },
  {
    id: 8,
    title: "Human Resources Coordinator",
    location: "Denver, CO",
    category: "Non-IT",
    description:
      "Facilitate HR functions including recruitment, onboarding, and employee engagement.",
    company:
      "A people-first organization driven by diversity, ethics, and innovation.",
    role: "Support hiring managers and ensure HR documentation compliance.",
    qualifications: [
      "Bachelor’s degree in HR or related field.",
      "Understanding of HR software and laws.",
      "Strong interpersonal and problem-solving skills.",
    ],
    bonus: ["SHRM certification", "Experience with BambooHR"],
  },
  {
    id: 9,
    title: "Healthcare Project Manager",
    location: "Los Angeles, CA",
    category: "Healthcare",
    description:
      "Oversee cross-functional initiatives and improve hospital system efficiency.",
    company:
      "Partner with clinical leaders to improve care delivery through innovative projects.",
    role: "Manage timelines, budgets, and stakeholder communication for multiple initiatives.",
    qualifications: [
      "Strong project management background.",
      "Experience in hospital or clinical settings.",
      "Proficiency in MS Project or similar tools.",
    ],
    bonus: ["PMP certification", "Lean Six Sigma knowledge"],
  },
  {
    id: 10,
    title: "Data Analyst",
    location: "Miami, FL",
    category: "IT",
    description:
      "Turn raw data into actionable insights for marketing and operations teams.",
    company:
      "We're a data-driven company making smarter decisions through advanced analytics.",
    role: "Build dashboards, automate reports, and work with cross-functional teams.",
    qualifications: [
      "Proficient in SQL, Excel, and Power BI or Tableau.",
      "Strong statistical and data modeling skills.",
      "Excellent communication and data storytelling abilities.",
    ],
    bonus: ["Python/R experience", "ETL pipeline familiarity"],
  },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(jobList[0]);

  return (
    <section className="careers-wrapper">
      <motion.div
        className="careers-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="careers-column careers-list">
          {jobList.map((job) => (
            <div
              key={job.id}
              className={`careers-job-item ${
                selectedJob.id === job.id ? "active" : ""
              }`}
              onClick={() => setSelectedJob(job)}
            >
              <div>
                <h3>{job.title}</h3>
                <p>{job.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="careers-column careers-detail">
          <h2>{selectedJob.title}</h2>
          <p className="careers-location">{selectedJob.location}</p>
          <p className="careers-description">{selectedJob.description}</p>

          <h4>
            <FaBuilding style={{ marginRight: "8px" }} />
            Company Description
          </h4>
          <p>{selectedJob.company}</p>

          <h4>
            <FaUserTie style={{ marginRight: "8px" }} />
            Role Description
          </h4>
          <p>{selectedJob.role}</p>

          <h4>
            <FaCheckCircle style={{ marginRight: "8px" }} />
            Qualifications
          </h4>
          <ul>
            {selectedJob.qualifications.map((q, idx) => (
              <li key={idx}>{q}</li>
            ))}
          </ul>

          {selectedJob.bonus?.length > 0 && (
            <>
              <h4>
                <FaStar style={{ marginRight: "8px" }} />
                Bonus Skills
              </h4>
              <ul>
                {selectedJob.bonus.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Careers;
