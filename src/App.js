import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Navbar/navbar";
import HeroBanner from "../src/Hero-Banner/herobanner";
import About from "../src/about/About";
import Information from "../src/campus-information/Information";
import News from "../src/news/News";
import Courses from "../src/courses/Courses";
import Thought from "../src/thought/Thought";
import Faculty from "../src/faculty/Faculty";
import WhyUs from "../src/whyus/WhyUs";
import Footer from "../src/Footer/footer";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <HeroBanner />
        <About />
        <Information />
        <News />
        <Courses />
        <Thought />
        <Faculty />
        <WhyUs />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
