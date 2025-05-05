import React, { useEffect } from "react";
import AboutUsHero from "./AboutUsHero";
import AboutUsWhoWeAre from "./AboutUsWhoWeAre";
import AboutusCarousel from "./AboutusCarousel";

function AboutUs() {
  useEffect(() => {
    document.title = `About Us - Convex Tech`;
  }, []);
  return (
    <div>
      <AboutUsHero />
      <AboutUsWhoWeAre />
      <AboutusCarousel />
    </div>
  );
}

export default AboutUs;
