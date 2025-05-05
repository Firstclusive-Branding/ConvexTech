import React, { useEffect } from "react";
import "../styles/TermsAndCondition.css";

const TermsAndCondition = () => {
  useEffect(() => {
    document.title = `Terms and Conditions - Convex Tech`;
  }, []);

  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p className="updated-date">Last Updated: 02/05/2025</p>

      <p>
        Welcome to ConvexTech.com (“Site”). Please read these Terms and
        Conditions (“Terms”) carefully before using our website and services. By
        accessing or using this Site, you agree to be bound by these Terms. If
        you do not agree with any part of the Terms, you must not access or use
        the Site.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using this Site, you represent that you are at least 18
        years old and legally capable of entering into binding agreements. You
        agree to comply with all applicable laws and regulations.
      </p>

      <h2>2. Use of the Site</h2>
      <p>
        ConvexTech Inc. grants you a limited, non-exclusive, non-transferable,
        and revocable license to access and use this Site solely for
        informational and lawful purposes related to exploring our services.
      </p>
      <ul>
        <li>
          Use the Site in any way that violates applicable laws or regulations.
        </li>
        <li>Use the Site for any unauthorized or fraudulent purpose.</li>
        <li>
          Attempt to gain unauthorized access to any part of the Site, other
          user accounts, or computer systems.
        </li>
        <li>
          Interfere with or disrupt the Site’s operation, security, or
          functionality.
        </li>
        <li>Transmit any viruses, malware, or other harmful code.</li>
        <li>
          Reproduce, duplicate, copy, sell, or exploit any portion of the Site
          without express written permission.
        </li>
        <li>
          Post or transmit content that is harmful, abusive, defamatory,
          obscene, or otherwise objectionable.
        </li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <p>
        All content on this Site—including but not limited to text, graphics,
        logos, images, software, and design—is the property of ConvexTech Inc.
        or its licensors and is protected by intellectual property laws. You may
        not use, copy, or distribute any content without our prior written
        consent.
      </p>

      <h2>4. User Content</h2>
      <p>
        If you submit or post any content (such as feedback, inquiries, or
        data), you grant ConvexTech Inc. a non-exclusive, royalty-free,
        perpetual, and worldwide license to use, modify, reproduce, and
        distribute such content for the purpose of operating and improving the
        Site and our services.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        This Site may contain links to third-party websites. These links are
        provided for convenience only. ConvexTech Inc. does not endorse,
        monitor, or control these sites and is not responsible for their
        content, accuracy, or practices.
      </p>

      <h2>6. Disclaimer of Warranties</h2>
      <p>
        This Site and all content and services are provided “as is” and “as
        available” without warranties of any kind, either express or implied.
        ConvexTech Inc. does not guarantee the accuracy, completeness, or
        reliability of any content on the Site.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, ConvexTech Inc. shall not be
        liable for any direct, indirect, incidental, special, or consequential
        damages arising out of or related to your use of, or inability to use,
        the Site or its services—even if advised of the possibility of such
        damages.
      </p>

      <h2>8. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless ConvexTech Inc., its
        affiliates, employees, and agents from any claims, liabilities, damages,
        losses, or expenses arising out of your violation of these Terms or
        misuse of the Site.
      </p>

      <h2>9. Consent to Receive Text Messages</h2>
      <p>
        By providing your phone number, you agree to receive a text message from
        ConvexTech Inc. Message and Data rates may apply. Message frequency
        varies. To stop receiving messages, reply ‘STOP’ at any time. For more
        information, reply ‘HELP’.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        ConvexTech Inc. reserves the right to modify these Terms at any time.
        Any changes will be effective immediately upon posting on the Site.
        Continued use of the Site after changes constitutes acceptance of the
        updated Terms.
      </p>

      <h2>11. Privacy Policy</h2>
      <p>
        Your use of the Site is also governed by our Privacy Policy, which
        outlines how we collect, use, and protect your personal information.
        Please review it carefully. By using this Site, you consent to the
        practices described in our Privacy Policy.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of the State of Texas, United States, without regard to conflict of
        law principles.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at:
        <br />
        <strong>Email:</strong> info@convextech.com <br />
        <strong>Address:</strong> ConvexTech Inc., Pearland, Texas, USA
      </p>
    </div>
  );
};

export default TermsAndCondition;
