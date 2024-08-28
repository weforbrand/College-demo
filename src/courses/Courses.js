import React from "react";
import "./Courses.css"; // Importing the CSS styles

const Programs = () => {
  return (
    <section className="programs-section">
      <h2 className="section-title">Our Programs</h2>
      <div className="programs-grid">
        <div className="program-card">
          <div className="program-icon">🎓</div>
          <h3 className="program-title">BBA</h3>
          <p className="program-description">
            Bachelor of Business Administration - Learn management, leadership,
            and business fundamentals.
          </p>
        </div>

        <div className="program-card">
          <div className="program-icon">💻</div>
          <h3 className="program-title">BCA</h3>
          <p className="program-description">
            Bachelor of Computer Applications - Master the essentials of
            computer science and IT.
          </p>
        </div>
      </div>
      <div className="explore-button-container">
        <a href="/academics" className="explore-button">
          Explore Programs
        </a>
      </div>
    </section>
  );
};

export default Programs;
