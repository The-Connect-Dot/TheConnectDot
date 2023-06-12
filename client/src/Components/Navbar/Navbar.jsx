import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { useCookies } from 'react-cookie';
import Onload from "../Onload/Onload";
import { useState, useEffect } from "react";



function Navbar(prop) {
  const [navcomp, setNavcomp] = useState("new")
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);
  useEffect(() => {
    if (cookies.userId) {
      verifyLogin(cookies.userId);
    }
    else {
      setNavcomp("new");
    }
  }, []);

  const verifyLogin = async (userId) => {
    try {
      const response = await fetch('http://localhost:5100/verify-login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({'userId':userId}),
      });
      const result = await response.json()
      if (result.isSucess) {
        setNavcomp("dash");
      } else {
        setNavcomp("dash");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const checkurl = () => {
    var pathName = window.location.pathname;
    console.log(pathName);
  }
  return (
    <>
      {navcomp === "new" && (<nav className="navbar navbar-expand-lg navbar-dark bg-dark Navbar-main">
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
                <a className="nav-link" aria-current="page" href="">
                  Mentor
                </a>
              </li>
              {/* <li className="nav-item mg">
              <a className="nav-link" aria-current="page" href="">
                Mentee
              </a>
            </li> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mentee
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="https://forms.gle/XS8EsPMFcRtWpVLc8"
                    >
                      Mentorship
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfklrhqx5fDBs4R805we3U1tjkAyn36xoNYjjZcTuyxYYeZtw/viewform?usp=sf_link"
                    >
                      Apprenticeship
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
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
              <a href="/Signup">Login</a>
            </button>
          </div>
        </div>
      </nav>)}
      {navcomp === "dash" && (<nav className="navbar navbar-expand-lg navbar-dark bg-dark Navbar-main">
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
                <a className="nav-link" aria-current="page" href="">
                  Mentor
                </a>
              </li>
              {/* <li className="nav-item mg">
              <a className="nav-link" aria-current="page" href="">
                Mentee
              </a>
            </li> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mentee
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="https://forms.gle/XS8EsPMFcRtWpVLc8"
                    >
                      Mentorship
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfklrhqx5fDBs4R805we3U1tjkAyn36xoNYjjZcTuyxYYeZtw/viewform?usp=sf_link"
                    >
                      Apprenticeship
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
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
            <button type="button" className="btn btn-warning bttn" onClick={() => { checkurl() }}>
              {/* <a >Dashboard</a> */}
              Dashboard
            </button>
          </div>
        </div>
      </nav>)}
    </>
  );
}

export default Navbar;