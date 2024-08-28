import React from "react";
import "./About.css"; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <section className="aboutus-container">
      <div className="aboutus-content">
        <h2 className="aboutus-title">About Us</h2>
        <p className="aboutus-text">
          Shukla College of Professional Education, Sitamarhi aims at setting
          out very high education standards and holds long record of academic
          excellence. The pedagogical aspects have been formulated to suit not
          only the needs of the contemporary industrial requirements but also to
          develop human potential to its fullest extent in a range of
          professions. Extra curricular activities are planned through games and
          sports, cultural programmes, and NSS activities. Cultural activities
          provide a platform to know about the culture of various states and
          regions of the country and an opportunity for national integration.
        </p>
        <button className="aboutus-btn">Read More</button>
      </div>
      <div className="aboutus-image-container">
        <img
          src="/College-1.jpg"
          alt="Principal or Students"
          className="aboutus-image"
        />
      </div>
    </section>
  );
};

export default AboutUs;
