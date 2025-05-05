import React, { useEffect } from "react";
import "../styles/PrivacyPage.css";

const PrivacyPage = () => {
  useEffect(() => {
    document.title = `Privacy Policy - Convex Tech`;
  }, []);

  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p className="updated-date">Last Updated: 02/05/2025</p>

      <h2>1. Introduction</h2>
      <p>
        At ConvexTech, we are committed to respecting and protecting your
        privacy. This Privacy Policy outlines how we collect, use, and protect
        your personal information, particularly concerning our messaging and
        email communications.
      </p>

      <h2>2. Information Collection</h2>
      <p>
        We may collect personal information, such as names, phone numbers, and
        email addresses, to deliver important updates, notifications, and
        relevant service communications.
      </p>

      <h2>3. Use of Information</h2>
      <p>
        Collected information is used exclusively to provide communication
        services, ensuring you receive timely updates on our products, services,
        and notifications.
        <br />
        <br />
        Mobile information will not be shared with third parties/affiliates for
        marketing/promotional purposes. All the above categories exclude text
        messaging originator opt-in data and consent; this information will not
        be shared with any third parties.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement industry-standard security measures to safeguard your
        information from unauthorized access, use, or disclosure. Our systems
        and practices are designed to protect data integrity and prevent misuse.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        Your data is retained only as long as necessary for communication
        purposes or as legally required and securely disposed of when no longer
        needed.
      </p>

      <h2>6. User Rights</h2>
      <p>
        You have the right to access, correct, or request the deletion of your
        personal data. For inquiries, please contact us at info@convextech.com.
      </p>

      <h2>7. Updates to this Policy</h2>
      <p>
        This Privacy Policy may be periodically updated to reflect changes in
        practices or regulatory requirements. We encourage you to review this
        page occasionally.
      </p>

      <h2>8. Contact Information</h2>
      <p>
        For questions about our privacy practices or to exercise your rights,
        please contact us at info@convextech.com.
      </p>

      <p style={{ marginTop: "30px" }}>
        <em>
          * All the above categories exclude text messaging originator opt-in
          data and consent; this information will not be shared with any third
          parties. We will not share your opt-in to an SMS campaign with any
          third party for purposes unrelated to providing you with the services
          of that campaign. We may share your Personal Data, including your SMS
          opt-in or consent status, with third parties that help us provide our
          messaging services, including but not limited to platform providers,
          phone companies, and any other vendors who assist us in the delivery
          of text messages.
        </em>
      </p>
    </div>
  );
};

export default PrivacyPage;
