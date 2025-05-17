import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/PrivacyPage.css";

const PrivacyPage = () => {
  const [policy, setPolicy] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Privacy Policy - Convex Tech`;

    const fetchPolicy = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user/privacypolicy`
        );
        const policyData = res.data?.data?.[0]?.privacypolicy || [];
        const updatedAt = res.data?.data?.[0]?.updatedAt || "";

        setPolicy(policyData);

        if (updatedAt) {
          const formatted = new Date(updatedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          setLastUpdated(formatted);
        }
      } catch (error) {
        console.error("Failed to fetch Privacy Policy:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicy();
  }, []);

  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      {loading ? (
        <div className="privacy-loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <p className="updated-date">Last Updated: {lastUpdated}</p>

          {policy.map((section) => (
            <div key={section._id}>
              <h2>{section.section}</h2>
              {section.items.length > 1 ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item._id}>{item.value}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.items[0]?.value}</p>
              )}
            </div>
          ))}

          <p style={{ marginTop: "30px" }}>
            <em>
              * All the above categories exclude text messaging originator
              opt-in data and consent; this information will not be shared with
              any third parties. We will not share your opt-in to an SMS
              campaign with any third party for purposes unrelated to providing
              you with the services of that campaign. We may share your Personal
              Data, including your SMS opt-in or consent status, with third
              parties that help us provide our messaging services, including but
              not limited to platform providers, phone companies, and any other
              vendors who assist us in the delivery of text messages.
            </em>
          </p>
        </>
      )}
    </div>
  );
};

export default PrivacyPage;
