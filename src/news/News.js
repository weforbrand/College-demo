import React from "react";
import "./News.css"; // Import the CSS file

// Sample data
const newsEvents = [
  {
    id: 1,
    type: "news",
    title: "New Program Launch",
    description:
      "We are excited to announce the launch of our new program for the upcoming semester.",
    date: "August 20, 2024",
    image: "path/to/image1.jpg",
  },
  {
    id: 2,
    type: "event",
    title: "Annual College Fair",
    description:
      "Join us for our annual college fair to meet with representatives and explore opportunities.",
    date: "September 15, 2024",
    image: "path/to/image2.jpg",
  },
  // Add more items as needed
];

const NewsEventsSection = () => {
  return (
    <section className="news-events-section">
      <div className="container">
        <h2 className="section-title">Latest News and Upcoming Events</h2>
        <div className="cards-container">
          {newsEvents.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <p className="card-date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <a href="/events" className="view-all-button">
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
