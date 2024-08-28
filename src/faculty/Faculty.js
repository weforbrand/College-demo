import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import "./Faculty.css"; // Import the custom styles

const facultyData = [
  {
    name: "Dr. Alice Johnson",
    photo: "/faculty.jpg",
    title: "Head of Computer Science Department",
  },
  {
    name: "Prof. John Smith",
    photo: "/faculty.jpg",
    title: "Professor of Business Administration",
  },
  {
    name: "Dr. Emily Davis",
    photo: "/faculty.jpg",
    title: "Associate Professor of Economics",
  },
  // Add more faculty members as needed
];

const OurFaculty = () => {
  return (
    <section className="our-faculty">
      <h2>Our Faculty</h2>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {facultyData.map((faculty, index) => (
          <div key={index} className="faculty-slide">
            <img
              src={faculty.photo}
              alt={faculty.name}
              className="faculty-photo"
            />
            <div className="faculty-info">
              <h3 className="faculty-name">{faculty.name}</h3>
              <p className="faculty-title">{faculty.title}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <a href="/faculty" className="meet-all-button">
        Meet All Faculty
      </a>
    </section>
  );
};

export default OurFaculty;
