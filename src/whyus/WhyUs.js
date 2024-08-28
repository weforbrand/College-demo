import React from "react";
import "./WhyUs.css";

const About = () => {
  return (
    <section id="why-us">
      <h2 className="wcu">Why Choose Us?</h2>
      <div className="why-us-grid">
        <div className="why-us-item">
          <h3>Industry-Aligned Curriculum</h3>
          <p>
            We regularly update our curriculum to meet the evolving demands of
            the business and tech sectors, ensuring that our students are
            well-prepared.
          </p>
        </div>
        <div className="why-us-item">
          <h3>Expert Faculty</h3>
          <p>
            Our faculty consists of experienced professionals who bring
            real-world knowledge and expertise into the classroom.
          </p>
        </div>
        <div className="why-us-item">
          <h3>Cutting-Edge Infrastructure</h3>
          <p>
            We provide a modern campus equipped with state-of-the-art classrooms
            and labs, offering an immersive learning environment.
          </p>
        </div>
        <div className="why-us-item">
          <h3>Internships and Industry Exposure</h3>
          <p>
            Get hands-on experience with top-tier internships and industry
            partnerships to be industry-ready before graduating.
          </p>
        </div>
        {/* Add more sections as needed */}
      </div>
    </section>
  );
};

export default About;
