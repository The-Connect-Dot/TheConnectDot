import React from "react";
import { Box, Grid, TextField, MenuItem } from "@mui/material";
import FAQ from "./FAQ";
import "./Dashboard.css";
import Alert from "../../Alert/Alert";
import { useState, useRef } from "react";

const Profileform = () => {
  const [file, setFile] = useState(null);
  const formRef = useRef(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const [selectedOption, setSelectedOption] = React.useState("a");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
    if (selectedOption === "a") {
      try {
        const localData = localStorage.getItem("ConnectDot");
        if (!localData) {
          window.location.href = "/login";
        }
        const token = JSON.parse(localData).userId;
        const email = document.getElementById("email").value;
        const recentQualification = document.getElementById(
          "recentQualification"
        ).value;
        const collegeName = document.getElementById("collegename").value;
        const areaOfStudy = document.getElementById("areaofstudy").value;
        const degree = document.getElementById("degree").value;
        const yearOfStudy = document.getElementById("yearofstudy").value;
        const startDate = document.getElementById("startdate").value;
        const preferredSlots = document.getElementById("preferredslots").value;
        const prevExperiences =
          document.getElementById("prevexperiences").value;
        const interestedSkills =
          document.getElementById("interestedskills").value;
        const specificNeeds = document.getElementById("specificneeds").value;

        if (
          !email ||
          !recentQualification ||
          !collegeName ||
          !areaOfStudy ||
          !degree ||
          !yearOfStudy ||
          !startDate ||
          !preferredSlots ||
          !prevExperiences ||
          !interestedSkills ||
          !specificNeeds ||
          !file
        ) {
          showPopup("Please enter all details.", "red");
        } else {
          const formData = new FormData();
          formData.append("token", token);
          formData.append("email", email);
          formData.append("specificNeeds", specificNeeds);
          formData.append("interestedSkills", interestedSkills);
          formData.append("prevExperiences", prevExperiences);
          formData.append("preferredSlots", preferredSlots);
          formData.append("yearOfStudy", yearOfStudy);
          formData.append("startDate", startDate);
          formData.append("degree", degree);
          formData.append("areaOfStudy", areaOfStudy);
          formData.append("collegeName", collegeName);
          formData.append("file", file);
          formData.append("recentQualification", recentQualification);
          formData.append("type", "skilldev");
          const response = await fetch(
            "https://backend-connectdot.vmplay.ml/mentee-updates",
            {
              method: "POST",
              body: formData,
            }
          );
          const result = await response.json();
          if (result.isSuccess) {
            document.getElementById("email").value = "";
            document.getElementById("recentQualification").value = "";
            document.getElementById("collegename").value = "";
            document.getElementById("areaofstudy").value = "";
            document.getElementById("degree").value = "";
            document.getElementById("yearofstudy").value = "";
            document.getElementById("startdate").value = "";
            document.getElementById("preferredslots").value = "";
            document.getElementById("prevexperiences").value = "";
            document.getElementById("interestedskills").value = "";
            document.getElementById("specificneeds").value = "";
            setFile(null);
            formRef.current.reset();
          }
          showPopup(result.msg, result.color);
        }
      } catch (err) {
        console.error(err);
      }
    } else if (selectedOption === "b") {
      try {
        const localData = localStorage.getItem("ConnectDot");
        if (!localData) {
          window.location.href = "/login";
        }
        const token = JSON.parse(localData).userId;
        const email = document.getElementById("email").value;
        const recentQualification = document.getElementById(
          "recentQualification"
        ).value;
        const collegeName = document.getElementById("collegename").value;
        const areaOfStudy = document.getElementById("areaofstudy").value;
        const degree = document.getElementById("degree").value;
        const prefinternshipposition = document.getElementById(
          "prefinternshipposition"
        ).value;
        const departmentorareaofinterest = document.getElementById(
          "departmentorareaofinterest"
        ).value;
        const availabilitytostartinternship = document.getElementById(
          "availabilitytostartinternship"
        ).value;
        const internshipduration =
          document.getElementById("internshipduration").value;
        const previnternshiporexperience = document.getElementById(
          "previnternshiporexperience"
        ).value;
        const hopetogainorachieve = document.getElementById(
          "hopetogainorachieve"
        ).value;
        const specificgoalsorareaoflearning = document.getElementById(
          "specificgoalsorareaoflearning"
        ).value;
        const modeofinternship =
          document.getElementById("modeofinternship").value;
        const requireaccomodation = document.getElementById(
          "requireaccomodation"
        ).value;

        if (
          !email ||
          !recentQualification ||
          !collegeName ||
          !areaOfStudy ||
          !degree ||
          !prefinternshipposition ||
          !departmentorareaofinterest ||
          !availabilitytostartinternship ||
          !internshipduration ||
          !previnternshiporexperience ||
          !hopetogainorachieve ||
          !specificgoalsorareaoflearning ||
          !modeofinternship ||
          !requireaccomodation ||
          !file
        ) {
          showPopup("Please enter all details.", "red");
        } else {
          const formData = new FormData();
          formData.append("token", token);
          formData.append("email", email);
          formData.append("recentQualification", recentQualification);
          formData.append("collegeName", collegeName);
          formData.append("areaOfStudy", areaOfStudy);
          formData.append("degree", degree);
          formData.append("prefinternshipposition", prefinternshipposition);
          formData.append(
            "departmentorareaofinterest",
            departmentorareaofinterest
          );
          formData.append(
            "availabilitytostartinternship",
            availabilitytostartinternship
          );
          formData.append("internshipduration", internshipduration);
          formData.append(
            "previnternshiporexperience",
            previnternshiporexperience
          );
          formData.append("hopetogainorachieve", hopetogainorachieve);
          formData.append(
            "specificgoalsorareaoflearning",
            specificgoalsorareaoflearning
          );
          formData.append("modeofinternship", modeofinternship);
          formData.append("requireaccomodation", requireaccomodation);
          formData.append("file", file);
          formData.append("type", "internship");

          const response = await fetch(
            "https://backend-connectdot.vmplay.ml/mentee-updates",
            {
              method: "POST",
              body: formData,
            }
          );
          const result = await response.json();
          if (result.isSuccess) {
            document.getElementById("email").value = "";
            document.getElementById("recentQualification").value = "";
            document.getElementById("collegename").value = "";
            document.getElementById("areaofstudy").value = "";
            document.getElementById("degree").value = "";
            document.getElementById("prefinternshipposition").value = "";
            document.getElementById("departmentorareaofinterest").value = "";
            document.getElementById("availabilitytostartinternship").value = "";
            document.getElementById("internshipduration").value = "";
            document.getElementById("previnternshiporexperience").value = "";
            document.getElementById("hopetogainorachieve").value = "";
            document.getElementById("specificgoalsorareaoflearning").value = "";
            document.getElementById("modeofinternship").value = "";
            document.getElementById("requireaccomodation").value = "";
            setFile(null);
            formRef.current.reset();
          }
          showPopup(result.msg, result.color);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const localData = localStorage.getItem("ConnectDot");
        if (!localData) {
          window.location.href = "/login";
        }
        const token = JSON.parse(localData).userId;
        const email = document.getElementById("email").value;
        const recentQualification = document.getElementById(
          "recentQualification"
        ).value;
        const collegeName = document.getElementById("collegename").value;
        const areaOfStudy = document.getElementById("areaofstudy").value;
        const degree = document.getElementById("degree").value;
        const yearOfStudy = document.getElementById("yearofstudy").value;
        const startDate = document.getElementById("startdate").value;
        const prevmentandrelatedexp = document.getElementById(
          "prevmentandrelatedexp"
        ).value;
        const anycoursesorcertification = document.getElementById(
          "anycoursesorcertification"
        ).value;
        const spectopicorskills =
          document.getElementById("spectopicorskills").value;
        const areaofinterest = document.getElementById("areaofinterest").value;
        const hopetoachieve = document.getElementById("hopetoachieve").value;
        const expectationfrommentor = document.getElementById(
          "expectationfrommentor"
        ).value;

        if (
          !email ||
          !recentQualification ||
          !collegeName ||
          !areaOfStudy ||
          !degree ||
          !yearOfStudy ||
          !startDate ||
          !prevmentandrelatedexp ||
          !anycoursesorcertification ||
          !spectopicorskills ||
          !areaofinterest ||
          !hopetoachieve ||
          !expectationfrommentor
        ) {
          showPopup("Please enter all details.", "red");
        } else {
          const formData = new FormData();
          formData.append("token", token);
          formData.append("email", email);
          formData.append("recentQualification", recentQualification);
          formData.append("collegeName", collegeName);
          formData.append("areaOfStudy", areaOfStudy);
          formData.append("degree", degree);
          formData.append("yearOfStudy", yearOfStudy);
          formData.append("startDate", startDate);
          formData.append("prevmentandrelatedexp", prevmentandrelatedexp);
          formData.append(
            "anycoursesorcertification",
            anycoursesorcertification
          );
          formData.append("spectopicorskills", spectopicorskills);
          formData.append("areaofinterest", areaofinterest);
          formData.append("hopetoachieve", hopetoachieve);
          formData.append("expectationfrommentor", expectationfrommentor);
          formData.append("type", "mentorship");

          const response = await fetch(
            "https://backend-connectdot.vmplay.ml/mentee-updates",
            {
              method: "POST",
              body: formData,
            }
          );
          const result = await response.json();
          if (result.isSuccess) {
            document.getElementById("email").value = "";
            document.getElementById("recentQualification").value = "";
            document.getElementById("collegename").value = "";
            document.getElementById("areaofstudy").value = "";
            document.getElementById("degree").value = "";
            document.getElementById("yearofstudy").value = "";
            document.getElementById("startdate").value = "";
            document.getElementById("prevmentandrelatedexp").value = "";
            document.getElementById("anycoursesorcertification").value = "";
            document.getElementById("spectopicorskills").value = "";
            document.getElementById("areaofinterest").value = "";
            document.getElementById("hopetoachieve").value = "";
            document.getElementById("expectationfrommentor").value = "";
          }
          showPopup(result.msg, result.color);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <div className="container-fluid my-profile-cont">
      <Alert />
      <div className="row">
        <div className="col-lg-12">
          <h1 className="profile-heading">Profile</h1>
          <Box sx={{ maxWidth: 800, margin: "0 auto", marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="dropdown"
                  select
                  label="Select Option"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value="a">
                    Skill Development/Apprentice Form
                  </MenuItem>
                  <MenuItem value="b">Internship Form</MenuItem>
                  <MenuItem value="c">Mentorship Form</MenuItem>
                </TextField>
              </Grid>
              {selectedOption === "a" && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="email"
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="recentQualification"
                      label="Recent Qualification"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="collegename"
                      label="College Name and University"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="areaofstudy"
                      label="Area of Study"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="degree"
                      label="Degree/Diploma/ITI"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="yearofstudy"
                      label="Year of Study"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Availability:</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="startdate"
                      label="Start Date"
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      type="date"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="preferredslots"
                      label="Preferred Slots"
                      variant="outlined"
                      fullWidth
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <p>Let us know more about you</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="prevexperiences"
                      label="Any prev experiences or knowledge in the chosen skill area."
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="interestedskills"
                      label="Interested skills or areas you want to focus on."
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Some Adds-on</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="specificneeds"
                      label="Do you have any specific needs or accommodations?"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <form ref={formRef}>
                      <input
                        accept=".pdf,.doc,.docx"
                        id="upload-cv"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </form>
                  </Grid>
                </>
              )}
              {selectedOption === "b" && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="email"
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="recentQualification"
                      label="Recent Qualification"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="collegename"
                      label="College Name and University"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="areaofstudy"
                      label="Area of Study"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="degree"
                      label="Degree/Diploma/ITI"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="yearofstudy"
                      label="Year of Study"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Internship Preferences</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="prefinternshipposition"
                      label="Preffered Internship Position"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="departmentorareaofinterest"
                      label="Department or Area of Interest"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="availabilitytostartinternship"
                      label="Availability to Start Internship"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="internshipduration"
                      label="Internship Duration"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Skills and Qualification</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="previnternshiporexperience"
                      label="Previous Internship or Work Experience"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Motivation and Expectations</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="hopetogainorachieve"
                      label="What do you hope to gain or achieve through this Internship?"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="specificgoalsorareaoflearning"
                      label="Any specific goals or Area of learning"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Additional Information</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="modeofinternship"
                      label="Mode of Internship"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="requireaccomodation"
                      label="Do you require any Accommodations or have any specific needs? "
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <form ref={formRef}>
                      <input
                        accept=".pdf,.doc,.docx"
                        id="upload-cv"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </form>
                  </Grid>
                </>
              )}
              {selectedOption === "c" && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="email"
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="recentQualification"
                      label="Recent Qualification"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="collegename"
                      label="College Name and University"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="areaofstudy"
                      label="Area of Study"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="degree"
                      label="Degree/Diploma/ITI"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="yearofstudy"
                      label="Year of Study"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Availability</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="startdate"
                      label="Start Date"
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      type="date"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="prevmentandrelatedexp"
                      label="Any pervious mentoring and related experience?"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="anycoursesorcertification"
                      label="Do you have any courses or Certification pursued earlier?"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Mentoring Preferences</p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="spectopicorskills"
                      label="Specific Topics or Skills Mentee Wants to Focus on"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="areaofinterest"
                      label="Area(s) of Interest"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="hopetoachieve"
                      label="What do you hope to achieve through this mentoring program?"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="expectationfrommentor"
                      label="What are your expectations from a mentor?"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </div>
      </div>
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
