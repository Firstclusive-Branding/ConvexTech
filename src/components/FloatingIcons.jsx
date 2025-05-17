import React, { useEffect } from "react";
import { FaWhatsapp, FaComments } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../styles/FloatingIcons.css";

const FloatingIcons = () => {
  const location = useLocation();

  useEffect(() => {
    // Prevent auto-open
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = function () {
      window.Tawk_API.minimize(); // Ensures it stays minimized
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/682833bb3aaa97190d8790e0/1iregk5ro";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    } else {
      console.error("Tawk.to API not loaded yet");
    }
  };

  if (location.pathname === "/notfound") return null;

  return (
    <div className="floating-icons-container">
      <a
        href="https://wa.me/+13463671777"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="icon-size" />
      </a>

      <button
        onClick={openChat}
        className="floating-icon tawkto"
        aria-label="Live Chat"
      >
        <FaComments className="icon-size" />
      </button>
    </div>
  );
};

export default FloatingIcons;
