import React, { useState } from "react";
import "./Dashboard.css";
import Profileform from "./Profileform";
import Dashboardpage from "./Dashboardpage";

function Dashboard() {
  const [selectedField, setSelectedField] = useState("dashboard");

  const handleFieldClick = (field) => {
    setSelectedField(field);
  };

  const renderContent = () => {
    if (selectedField === "dashboard") {
      return (
        <div>
          <Dashboardpage/>
        </div>
      );
    } else if (selectedField === "profile") {
      return (
        <div>
          <Profileform/>
        </div>
      );
    }
  };

  return (
    <div id="wrapper">
      <button
        type="button"
        class="navbar-toggle collapsed"
        data-toggle="collapse"
        id="menu-toggle"
      >
        click me
      </button>
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav nav-pills nav-stacked" id="menu">
          <li class="sidebar tab-content">
            <a onClick={() => handleFieldClick("dashboard")}>Dashboard</a>
          </li>
          <li>
            <a onClick={() => handleFieldClick("profile")}>Profile</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
      <div id="page-content-wrapper">{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
