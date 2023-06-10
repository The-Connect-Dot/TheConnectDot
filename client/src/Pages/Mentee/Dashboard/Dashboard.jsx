import React, { useState } from "react";
import "./Dashboard.css";
import { TextField, Grid, Box } from '@mui/material';

function Dashboard() {
  const [selectedField, setSelectedField] = useState("dashboard");

  const handleFieldClick = (field) => {
    setSelectedField(field);
  };

  const renderContent = () => {
    if (selectedField === "dashboard") {
      return (
        <div class="container-fluid xyz">
          <div class="row">
            <div class="col-lg-12">
              <h1>Dashboard</h1>
              <p>Dashboard content goes here</p>
            </div>
          </div>
        </div>
      );
    } else if (selectedField === "profile") {
      return (
         <div className="container-fluid xyz">
           <div className="row">
             <div className="col-lg-12">
               <h1 className="profile-heading">Profile</h1>
               <Box sx={{ maxWidth: 400 }}>
                  <Grid container spacing={2}>
                     <Grid item xs={12}>
                        <TextField
                        id="email" label="Email Address" variant="outlined" fullWidth/>
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                        id="recentQualification" label="Recent Qualification" variant="outlined" fullWidth/>
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                        id="collegename" label="College Name and Unniversity" variant="outlined" fullWidth/>
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                        id="areaofstudy" label="Area of Study" variant="outlined" fullWidth/>
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                        id="degree" label="Degree/Diploma/ITI" variant="outlined" fullWidth/>
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                        id="yearofstudy" label="Year of Study" variant="outlined" fullWidth/>
                     </Grid>
                  </Grid>
               </Box>
             </div>
           </div>
         </div>
       );
    } else if (selectedField === "logout") {
      return (
        <div class="container-fluid xyz">
          <div class="row">
            <div class="col-lg-12">
              <h1>Logout</h1>
            </div>
          </div>
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
            <a onClick={() => handleFieldClick("logout")}>Log Out</a>
          </li>
        </ul>
      </div>
      <div id="page-content-wrapper">{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
