import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(prop) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark Navbar-main">
      <div className="container-fluid mx-2">
        <a className="navbar-brand nb" href="/">
          {/* <img src="./Media logos/SANKALP SHIKSHA ICON.png" alt="" srcset="" /> */}
          <div>
            The Connect <br />
            <p>Dot Corp.</p>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mg">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown mg">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li>
                  <a className="dropdown-item" href="/WhatWeDo">
                    What we do
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/Team">
                    Our Team
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="gallery">
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mg">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All Programmes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li>
                  <a className="dropdown-item" href="/">
                    #
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    #
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mg">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Impact{" "}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li>
                  <a className="dropdown-item" href="/">
                    Reach Out
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Stories Of Change
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Awards and Recognitions
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Blogs
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mg">
              <NavLink className="nav-link" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <button type="button" className="btn btn-warning bttn">
            Button
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
