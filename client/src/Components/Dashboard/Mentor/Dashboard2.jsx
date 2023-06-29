import React, { useState } from "react";
import "./Dashboard.css";
import Profileform from "./Profileform";
import Dashboardpage from "./Dashboardpage";

function Dashboard({ page }) {
  const [selectedField, setSelectedField] = useState(page);

  const handleFieldClick = (field) => {
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
    } else if (selectedField === "logout") {
      logfunc();
      return;
    }
  };

  return (
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
          <li className="">
            <a
              onClick={() => handleFieldClick("dashboard")}
              className="a-elements"
            >
              Dashboard
            </a>
          </li>
          <li className="">
            <a
              onClick={() => handleFieldClick("profile")}
              className="a-elements"
            >
              Profile
            </a>
          </li>
          <li className="">
            <a onClick={() => logfunc()} className="a-elements">
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div id="page-content-wrapper">{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
