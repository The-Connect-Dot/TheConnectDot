import React from "react";
import Alert from "../../../Alert/Alert";
import "./Blogs.css";
import { Grid, Box } from "@mui/material";
import { TextField } from "@mui/material";

const WriteBlog = () => {
  function showPopup(msg, type) {
    var popup = document.getElementById("popup");
    popup.children[1].children[0].innerText = msg;
    popup.children[1].children[1].style.backgroundColor = type;

    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  }
  const localData = localStorage.getItem("ConnectDot");
  if (!localData) {
    window.location.href = "/login";
  }
  const token = JSON.parse(localData).userId;
  const handleSubmit = async () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    if (!title || !content) {
      showPopup("Please complete blog", "red");
      return;
    } else {
      const data = { title: title, content: content, token: token };
      const response = await fetch(
        "https://backend-connectdot.vmplay.ml/mentor-blogs",
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
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
      }
      showPopup(result.msg, result.color);
    }
  };
  return (
    <div className="WriteBlogs">
      <Alert />
      <Box sx={{ margin: "0px", marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField id="title" label="Title" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <p>Your Thoughts...</p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="content"
              label="Your content..."
              variant="outlined"
              fullWidth
              multiline
              rows={15}
              InputProps={{
                style: { height: "auto" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <div className="btn-container">
        <div className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default WriteBlog;
