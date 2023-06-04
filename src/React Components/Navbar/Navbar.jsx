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
            <li className="nav-item mg">
              <a className="nav-link" aria-current="page" href="/Mentor">
                Mentor
              </a>
            </li>
            <li className="nav-item mg">
              <a className="nav-link" aria-current="page" href="/Mentee">
                Mentee
              </a>
            </li>
            <li className="nav-item mg">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
          <button type="button" className="btn btn-warning bttn">
            login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
