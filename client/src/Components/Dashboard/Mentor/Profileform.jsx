import React from "react";
import { Grid, Box, MenuItem } from "@mui/material";
import { TextField } from "@mui/material";
import FAQ from "./FAQ";
import "./Dashboard.css";
import Alert from "../../Alert/Alert";

const Profileform = () => {
  function showPopup(msg, type) {
    var popup = document.getElementById("popup");
    popup.children[1].children[0].innerText = msg;
    popup.children[1].children[1].style.backgroundColor = type;

    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  }
  const UpdateUser = async () => {
    try {
      const email = document.getElementById("email").value;
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const organisationname =
        document.getElementById("organisationname").value;
      const jobposiion = document.getElementById("jobposiion").value;
      const totalyrsofexp = document.getElementById("totalyrsofexp").value;
      const industryexpertise =
        document.getElementById("industryexpertise").value;
      const areasofspecialisation = document.getElementById(
        "areasofspecialisation"
      ).value;
      const prefcommmethod = document.getElementById("prefcommmethod").value;
      const availofmentorship =
        document.getElementById("availofmentorship").value;
      const mentorshipareas = document.getElementById("mentorshipareas").value;
      const highestqualification = document.getElementById(
        "highestqualification"
      ).value;
      const degreecertification = document.getElementById(
        "degreecertification"
      ).value;
      const uniinstitute = document.getElementById("uniinstitute").value;
      const linkedinprofileurl =
        document.getElementById("linkedinprofileurl").value;
      const briefintro = document.getElementById("briefintro").value;
      const anyprvsmentoring =
        document.getElementById("anyprvsmentoring").value;
      const localData = localStorage.getItem("ConnectDot");
      if (!localData) {
        window.location.href = "/login";
      }
      const token = JSON.parse(localData).userId;
      if (
        !email ||
        !name ||
        !phone ||
        !organisationname ||
        !jobposiion ||
        !totalyrsofexp ||
        !industryexpertise ||
        !areasofspecialisation ||
        !prefcommmethod ||
        !availofmentorship ||
        !mentorshipareas ||
        !highestqualification ||
        !degreecertification ||
        !uniinstitute ||
        !briefintro ||
        !anyprvsmentoring
      ) {
        showPopup("Please enter all details.", "red");
      } else {
        var data = {
          token: token,
          email: email,
          name: name,
          phone: phone,
          organisationname: organisationname,
          jobposiion: jobposiion,
          totalyrsofexp: totalyrsofexp,
          industryexpertise: industryexpertise,
          areasofspecialisation: areasofspecialisation,
          prefcommmethod: prefcommmethod,
          availofmentorship: availofmentorship,
          mentorshipareas: mentorshipareas,
          highestqualification: highestqualification,
          degreecertification: degreecertification,
          uniinstitute: uniinstitute,
          briefintro: briefintro,
          anyprvsmentoring: anyprvsmentoring,
          linkedinprofileurl: linkedinprofileurl,
        };
        const response = await fetch(
          "https://backend-connectdot.vmplay.ml/mentor-updates",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const result = await response.json();
        if (result.isSuccess) {
          document.getElementById("email").value = "";
          document.getElementById("name").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("organisationname").value = "";
          document.getElementById("jobposiion").value = "";
          document.getElementById("totalyrsofexp").value = "";
          document.getElementById("industryexpertise").value = "";
          document.getElementById("areasofspecialisation").value = "";
          document.getElementById("prefcommmethod").value = "";
          document.getElementById("availofmentorship").value = "";
          document.getElementById("mentorshipareas").value = "";
          document.getElementById("highestqualification").value = "";
          document.getElementById("degreecertification").value = "";
          document.getElementById("uniinstitute").value = "";
          document.getElementById("linkedinprofileurl").value = "";
          document.getElementById("briefintro").value = "";
          document.getElementById("anyprvsmentoring").value = "";
        }
        showPopup(result.msg, result.color);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid my-profile-cont">
      <Alert />
      <h1 className="profile-heading" style={{ margin: "0px" }}>
        Profile
      </h1>
      <Box sx={{ maxWidth: 800, margin: "0px", marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              label="Email Address"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="name" label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="phone" label="Phone" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="organisationname"
              label="Organisation Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="jobposiion"
              label="Job Position"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <p>Personal Experience</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="totalyrsofexp"
              label="Total Years of Experience"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="industryexpertise"
              label="Industry Expertise"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="areasofspecialisation"
              label="Areas of Specialisation"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <p>Mentorship Preference</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="prefcommmethod"
              label="Preferred Communication Method"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="availofmentorship"
              label="Avilability of Mentorship"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="mentorshipareas"
              label="Mentorship Areas"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <p>Educational Background</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="highestqualification"
              label="Highest Qualification"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="degreecertification"
              label="Degree/ Certification"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="uniinstitute"
              label="University or Institute"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <p>Additional Information</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="linkedinprofileurl"
              label="LinkedIn Profile URL"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="briefintro"
              label="Brief Introduction/Summary"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="anyprvsmentoring"
              label="Any Previous Mentoring"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
      <div className="update-btn-container">
        <div className="btn" onClick={UpdateUser}>
          Update
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Profileform;
