// MessageSection.js
import React from "react";
import "./Thought.css"; // Import the CSS file

const MessageSection = () => {
  return (
    <div className="container">
      <h2 className="heading">Message from Our Leaders</h2>
      <div className="message-wrapper">
        {/* Director's Message */}
        <div className="card">
          <img
            className="image"
            src="https://shuklacollege.org/img/about/director.png"
            alt="Director Photo"
          />
          <h3 className="message-title">Dr. Pratibha Shukla</h3>
          <p className="message-position">Director</p>
          <p className="message-text">
            Firstly, let me thank you for visiting our website. Our
            institutional punchline is, "The stamp of quality and
            professionalism." Each person in our institution ensures to deliver
            their best, making each of our students believe in hard work. We
            prioritize students' satisfaction in achieving educational success.
            We focus on growing our institutional infrastructure in people and
            technology, making us a strong institution. We ensure an honest
            commitment toward our students. Once again, thank you for visiting
            the website and taking the time to read my thoughts. Looking forward
            to a longer and stronger relationship.
          </p>
        </div>

        {/* Chairman's Message */}
        <div className="card">
          <img
            className="image"
            src="https://shuklacollege.org/img/about/chairperson.png"
            alt="Chairman Photo"
          />
          <h3 className="message-title">Dr. Shukla</h3>
          <p className="message-position">Chairman</p>
          <p className="message-text">
            It gives me immense pleasure to introduce Shukla College of
            Professional Education in the lush green surroundings of Dhodhani
            Madanpur village. It's a matter of pride, privilege, and pleasure
            for all of us to believe in the holistic development of human
            resources. We strive for making a small contribution to the society
            by spreading the message of universal education and creating
            employment opportunities for young people. Competence, as a sum of
            knowledge and skill, helps in capacity building, offering
            innumerable chances for advancement and development. Welcome to
            share knowledge and experience in the warm, cordial environment of
            our college.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
