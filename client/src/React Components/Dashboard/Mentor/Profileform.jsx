import React from "react";
import { TextField, Grid, Box, MenuItem } from '@mui/material';

const Profileform = () => {
  return (
    <div className="container-fluid xyz">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="profile-heading">Profile</h1>
        <Box sx={{ maxWidth: 800, margin: '0 auto', marginTop: '20px' }}>
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
                id="typeofmentor"
                label="Type of Mentor"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="groupmentoring"
                label="Can undertake group mentoring"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>

      </div>
    </div>
  </div>
  );
};

export default Profileform;