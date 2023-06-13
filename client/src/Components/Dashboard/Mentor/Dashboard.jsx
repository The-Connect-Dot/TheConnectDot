import React, { useState } from "react";
import "./Dashboard.css";
import Profileform from "./Profileform";
import Dashboardpage from "./Dashboardpage";

function Dashboard({ page }) {
  console.log(page);
  const [selectedField, setSelectedField] = useState(page);

  const handleFieldClick = (field) => {
    setSelectedField(field);
  };

  const logfunc = async () => {
    try {
      const response = await fetch("http://localhost:5100/logout", { method: "POST" });
      if (response.ok) {
        const data = await response.json();
        if (data.isSuccess) {
          console.log(data.msg); // Output: Logged Out Successfully!
        } else {
          console.log("Logout failed"); // Handle logout failure
        }
      } else {
        console.log("Logout failed with status:", response.status); // Handle logout failure
      }
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle error while logging out
    }
  };
  
  

  const renderContent = () => {
    if (selectedField === "dashboard") {
      return (
        <div class="container-fluid xyz">
          <div class="row">
            <div class="col-lg-12">
              {/*               <h1>Dashboard</h1> */}
              <div>
                <Dashboardpage />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedField === "profile") {
      return (
        <div>
          <Profileform />
        </div>
      );
    }
    else if (selectedField === "logout") {
      logfunc(); // Call the logfunc to initiate the logout process
      return null; // Return null or any other UI component if needed
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
            <a onClick={() => logfunc()}>Logout</a>
          </li>
        </ul>
      </div>
      <div id="page-content-wrapper">{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
