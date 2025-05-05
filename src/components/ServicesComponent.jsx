import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCode, AiOutlineMobile } from "react-icons/ai";
import { BsWindow } from "react-icons/bs";
import { FiLayout } from "react-icons/fi";
import "../styles/ServicesComponent.css";

const services = [
  {
    titleMain: "Software",
    titleHighlight: "Development",
    icon: <AiOutlineCode className="services-icon" />,
    image: "https://picsum.photos/seed/softwaredev/800/400",
    paragraphs: [
      "In the digital world, website development or web development plays a key role in showcasing the product or service information to the prospective audience, and having to get into the best of UI/UX design persona.",
      "The website development would involve a series of tasks for the development company to engage with, which includes coding and programming and equally management of content and database handling, in case of a website which accommodates data handling and data transaction & storage.",
      "The website design and development also involves the process of creating, building and further maintaining the websites. The development could also involve creating web applications and maintaining the same over the internet. These days, the maintenance is happening through the cloud interface.",
    ],
  },
  {
    titleMain: "Front-End &",
    titleHighlight: "Back-End Development",
    icon: <FiLayout className="services-icon" />,
    image: "https://picsum.photos/seed/frontendbackend/800/400",
    paragraphs: [
      "Convextech is one of the web design and development company in United States, which primarily focuses on two major components:",
      "<ul><li>The Front-End Development (UI/UX)</li><li>The Back-End Development (which is handling the server side)</li></ul>",
      "We also have a team of web development professionals on-board who have their expertise in handling both these systems and they often have an equal flair on both these mediums.",
    ],
  },
  {
    titleMain: "Web Application",
    titleHighlight: "Development",
    icon: <BsWindow className="services-icon" />,
    image: "https://picsum.photos/seed/webapp/800/400",
    paragraphs: [
      "The web application development is one of the integral components for a designing company, as this would involve conceiving, creating, and development of web applications or the software applications which are mostly accessible over the internet or cloud, or run through the web-server. The interface of which is made available through a web browser.",
      "Convextech is one of the web application development companies in United States, which works on various web application platforms, and makes a way to run an application through browser and also on various other devices concurrently.",
    ],
  },
  {
    titleMain: "Mobile Application",
    titleHighlight: "Development",
    icon: <AiOutlineMobile className="services-icon" />,
    image: "https://picsum.photos/seed/mobileapp/800/400",
    paragraphs: [
      "Similar to web application development, mobile application development is the one which involves conceiving, designing and development of an application which could primarily run through hand-held devices, smartphones and tablets. Sometimes, these can be a range of mobile apps, with a different kind of operating system, which are particularly suited for Android and iOS platforms.",
      "We are instrumental in designing mobile apps, which are completely customised as per the customer's mandates.",
    ],
  },
];

const ServicesComponent = () => {
  return (
    <div className="services-container">
      {services.map((section, index) => {
        const isReversed = index % 2 !== 0;
        return (
          <motion.section
            key={index}
            className={`services-section ${isReversed ? "reverse" : ""}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="services-image-wrapper">
              <img
                src={section.image}
                alt={section.title}
                className="services-image"
              />
            </div>
            <div className="services-content">
              {/* <h2>
                {section.icon} {section.title}
              </h2> */}
              <h2>
                {section.icon} {section.titleMain}{" "}
                <span className="highlighted-word">
                  {section.titleHighlight}
                </span>
              </h2>

              {section.paragraphs.map((text, i) =>
                text.includes("<ul>") ? (
                  <div key={i} dangerouslySetInnerHTML={{ __html: text }} />
                ) : (
                  <p key={i}>{text}</p>
                )
              )}
            </div>
          </motion.section>
        );
      })}
    </div>
  );
};

export default ServicesComponent;
