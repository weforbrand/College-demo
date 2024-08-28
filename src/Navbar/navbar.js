import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-main">
      <nav className="navbar navbar-expand-lg  nav-bg-c">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            WeForBrands
          </Link> */}

          <Link className="navbar-brand" to="/">
            <img
              src="https://shuklacollege.org/img/logo/shukla-college-logo.png"
              alt="Logo"
              style={{ height: "50px", width: "auto" }} // Adjust the size as needed
            />
          </Link>

          <button
            className="navbar-toggler"
            style={{ backgroundColor: "yellow !important" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ backgroundColor: "yellow !important" }}
            ></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{ marginLeft: "300px" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Academics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Department
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/industries">
                  Online Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Gallery
                </Link>
              </li>
              <li className="nav-item contactus">
                <Link className="nav-link" to="/contact">
                  <button type="button" className="custom-btn">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
