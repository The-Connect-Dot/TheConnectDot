import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { useCookies } from "react-cookie";
import Onload from "../Onload/Onload";
import { useState, useEffect } from "react";

function Navbar(prop) {
  const [navcomp, setNavcomp] = useState("new");
  const [cookies, setCookie, removeCookie] = useCookies(["connectDot"]);
  useEffect(() => {
    if (cookies.connectDot) {
      verifyLogin(cookies.connectDot);
    } else {
      setNavcomp("new");
    }
  }, []);
  function hide() {
    const element = document.querySelector(".navbar-collapse");
    try {
      element.classList.remove("show");
    } catch (error) {
      console.log(error);
    }
  }
  const verifyLogin = async (connectDot) => {
    try {
      const response = await fetch(
        "https://backend-connectdot.vmplay.ml/verify-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: connectDot[0], type: connectDot[1] }),
        }
      );
      const result = await response.json();
      if (result.isSuccess) {
        setNavcomp("dash");
      } else {
        setNavcomp("dash");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {navcomp === "new" && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark Navbar-main">
          <div className="container-fluid mx-2">
            <a className="navbar-brand nb" href="/">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mg">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/"
                    onClick={() => {
                      hide();
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mg">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/mentors"
                    onClick={() => {
                      hide();
                    }}
                  >
                    Mentor
                  </NavLink>
                </li>
                {/* <li className="nav-item mg">
              <a className="nav-link" aria-current="page" href="">
                Mentee
              </a>
            </li> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mentee
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        href="https://forms.gle/XS8EsPMFcRtWpVLc8"
                        onClick={() => {
                          hide();
                        }}
                      >
                        Mentorship
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfklrhqx5fDBs4R805we3U1tjkAyn36xoNYjjZcTuyxYYeZtw/viewform?usp=sf_link"
                        onClick={() => {
                          hide();
                        }}
                      >
                        Skill Development
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdbC0OZnMtjKy2fmFYY394HvAMWVTz7Ylm-5DjCkCV9M6G9Ig/viewform?usp=sf_link"
                      >
                        Internship
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mg">
                  <a
                    className="nav-link"
                    href="#Contact"
                    onClick={() => {
                      hide();
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <button type="button" className="btn btn-warning btn-primary">
                <a href="/signup">Login</a>
              </button>
            </div>
          </div>
        </nav>
      )}
      {navcomp === "dash" && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark Navbar-main">
          <div className="container-fluid mx-2">
            <a className="navbar-brand nb" href="/">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mg">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mg">
                  <a className="nav-link" aria-current="page" href="">
                    Mentor
                  </a>
                </li>
                {/* <li className="nav-item mg">
              <a className="nav-link" aria-current="page" href="">
                Mentee
              </a>
            </li> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mentee
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        href="https://forms.gle/XS8EsPMFcRtWpVLc8"
                      >
                        Mentorship
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfklrhqx5fDBs4R805we3U1tjkAyn36xoNYjjZcTuyxYYeZtw/viewform?usp=sf_link"
                      >
                        Skill Development
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdbC0OZnMtjKy2fmFYY394HvAMWVTz7Ylm-5DjCkCV9M6G9Ig/viewform?usp=sf_link"
                      >
                        Internship
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mg">
                  <a className="nav-link" href="#Contact">
                    Contact
                  </a>
                </li>
              </ul>
              <button type="button" className="btn btn-warning bttn">
                <a href="/auth/user">Dashboard</a>
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
