import React, { useEffect } from "react";
import "../styles/Homepage.css";
import HeroSection from "./Homepage/Hero";
import WhyChooseUs from "./Homepage/WhyChooseUs";
import StaffingSolutions from "./Homepage/StaffingSolutions";
import Industries from "./Homepage/Industries";
import CareerSolutions from "./Homepage/CareerSolutions";
import Vacancies from "./Homepage/Vacancies";
import TechSolutionComponent from "./Homepage/TechSolutionComponent";
import TechSolutions from "./Homepage/TechSolutions";
import StatsCounter from "./Homepage/StatsCounter";
import EmployerTestimonials from "./Homepage/EmployerTestimonials";
import CandidateTestimonials from "./Homepage/CandidateTestimonials";
import ClientTestimonials from "./Homepage/ClientTestimonials";
import GetInTouchBanner from "./Homepage/GetInTouchBanner";

// --------------------------------------------------------
// import Services from "./Services";
// import WhoWeAre from "./WhoWeAre";
// import ServicesCarousel from "./ServicesCarousel";
// import Presence from "./Presence";

function Homepage() {
  useEffect(() => {
    window.document.title =
      "ConvexTech | Powering Businesses with Next-Gen Solutions";
  }, []);

  return (
    <div className="homepage-container">
      <HeroSection />
      <WhyChooseUs />
      <StaffingSolutions />
      <Industries />
      <CareerSolutions />
      <Vacancies />
      <TechSolutionComponent />
      <TechSolutions />
      <StatsCounter />
      <EmployerTestimonials />
      <CandidateTestimonials />
      <ClientTestimonials />
      <GetInTouchBanner />
      {/* <Services /> */}
      {/* <WhoWeAre /> */}
      {/* <ServicesCarousel /> */}
      {/* <Presence /> */}
    </div>
  );
}

export default Homepage;
