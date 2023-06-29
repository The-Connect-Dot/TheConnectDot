import React, { useState } from "react";
import "./Dashboard.css";
import Profileform from "./Profileform";
import Dashboardpage from "./Dashboardpage";
import UserInfo from "./UserInfo";

function Dashboard({ page }) {
  const [selectedField, setSelectedField] = useState(page);

  const handleFieldClick = (field) => {
    var elements = document.querySelectorAll(".a-elements");
    if (field === "dashboard") {
      elements[0].classList.add("active");
      elements[1].classList.remove("active");
      elements[2].classList.remove("active");
    } else if (field === "userinfo") {
      elements[2].classList.add("active");
      elements[1].classList.remove("active");
      elements[0].classList.remove("active");
    } else {
      elements[1].classList.add("active");
      elements[0].classList.remove("active");
      elements[2].classList.remove("active");
    }
    setSelectedField(field);
  };
  function showmob() {
    document.querySelector(".contents-data").classList.toggle("visible");
    document.querySelector(".mobile-context-text").classList.toggle("active");
  }

  const logfunc = async () => {
    try {
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      localStorage.removeItem("ConnectDot");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const renderContent = () => {
    if (selectedField === "dashboard") {
      return <Dashboardpage />;
    } else if (selectedField === "profile") {
      return <Profileform />;
    } else if (selectedField === "userinfo") {
      return <UserInfo />;
    } else if (selectedField === "logout") {
      logfunc();
      return;
    }
  };

  return (
    <div className="main-page-container">
      <div className="contents">
        <div className="mobile-content" id="mobile-toc">
          <div
            className="mobile-context-text"
            onClick={() => {
              showmob();
            }}
          >
            Pages{" "}
            <img
              src="https://d33wubrfki0l68.cloudfront.net/assets/images/icons/840d74f7b1d04fbb08200337a9097c96d238f03b/top.png"
              alt=""
            />
          </div>
        </div>
        <div className="contents-data">
          <div className="content-text">Pages</div>
          <ul>
            <li className="dashboard-li">
              <a
                onClick={() => handleFieldClick("dashboard")}
                className="a-elements active"
              >
                Dashboard
              </a>
            </li>
            <li className="dashboard-li">
              <a
                onClick={() => handleFieldClick("profile")}
                className="a-elements"
              >
                Profile
              </a>
            </li>
            <li className="dashboard-li">
              <a
                onClick={() => handleFieldClick("userinfo")}
                className="a-elements"
              >
                User Info
              </a>
            </li>
            <li className="dashboard-li">
              <a onClick={() => logfunc()} className="a-elements">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="page-content-wrapper">{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
