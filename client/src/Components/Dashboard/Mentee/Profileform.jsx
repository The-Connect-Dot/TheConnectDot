import React from "react";
import { Grid, Box } from "@mui/material";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material";

const Profileform = () => {
  return (
    <div className="container-fluid xyz">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="profile-heading">Profile</h1>
          <Box sx={{ maxWidth: 800, margin: "0 auto", marginTop: "20px" }}>
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
                <input accept=".pdf,.doc,.docx" id="upload-cv" type="file" />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Profileform;
