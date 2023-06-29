import React from "react";
import "./UserInfo.css";
import { useState, useEffect } from "react";
import Onload from "../../Onload/Onload";
import Alert from "../../Alert/Alert";

export default function UserInfo() {
  function showPopup(msg, type) {
    var popup = document.getElementById("popup");
    popup.children[1].children[0].innerText = msg;
    popup.children[1].children[1].style.backgroundColor = type;
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  }
  const [currpNumber, setcurrpNumber] = useState("");
  const [currDOB, setcurrDOB] = useState("");
  const [currGender, setcurrGender] = useState("");
  const [currLocation, setcurrLocation] = useState("");
  const [currName, setcurrName] = useState("");
  const handleNumberChange = (e) => {
    setcurrpNumber(e.target.value);
  };
  const handleDobChange = (e) => {
    setcurrDOB(e.target.value);
  };
  const handleGenderChange = (e) => {
    setcurrGender(e.target.value);
  };
  const handleLocationChange = (e) => {
    setcurrLocation(e.target.value);
  };
  const handleNameChange = (e) => {
    setcurrName(e.target.value);
  };

  const handlePencilClick = (e) => {
    e.target.parentElement.childNodes[1].disabled = false;
    const value = e.target.parentElement.childNodes[1].value;
    e.target.parentElement.childNodes[1].placeholder = value;
    e.target.parentElement.childNodes[1].value = "";
  };
  const localData = localStorage.getItem("ConnectDot");
  if (!localData) {
    window.location.href = "/login";
    showPopup("Invalid credentials", "red");
  }
  const user = JSON.parse(localData);
  const handleNewDetails = async () => {
    // console.log(currDOB,currGender)
    if (
      !currDOB.trim() ||
      !currGender.trim() ||
      !currpNumber ||
      !currLocation.trim() ||
      !currName.trim()
    ) {
      showPopup("Invalid Details", "red");
      return;
    }
    const sendData = {
      dob: currDOB.trim(),
      gender: currGender.trim(),
      pnumber: currpNumber,
      token: user.userId,
      type: user.type,
      location: currLocation.trim(),
      name: currName.trim(),
    };
    const response = await fetch(
      "https://backend-connectdot.vmplay.ml/update-info",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      }
    );

    const result = await response.json();
    showPopup(result.msg, result.color);
  };
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});
  const [image, setImage] = useState("");
  const imageUrl = "https://backend-connectdot.vmplay.ml/user-images/";

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const handleSaveImage = async () => {
    if (image.includes("https://backend-connectdot.vmplay.ml/user-images/")) {
      showPopup("Change Image First", "red");
      return;
    }
    const blob = dataURItoBlob(image);
    const formData = new FormData();
    formData.append("image", blob, user.userId + ".jpg");
    formData.append("token", user.userId);
    formData.append("type", user.type);
    const response = await fetch(
      "https://backend-connectdot.vmplay.ml/save-image",
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();
    // console.log(result);
    showPopup(result.msg, result.color);
  };

  useEffect(() => {
    setLoader(true);
    const UserData = async () => {
      const sdata = { token: user.userId, type: user.type };
      const response = await fetch(
        "https://backend-connectdot.vmplay.ml/get-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sdata),
        }
      );
      const result = await response.json();
      if (!result.isSuccess) {
        logfunc();
        window.location.href = "/login";
        return;
      }
      setData(result.data);
      setImage(imageUrl + result.data.image);
      setcurrpNumber(result.data.pnumber);
      setcurrDOB(result.data.dob);
      setcurrLocation(result.data.location);
      setcurrGender(result.data.gender);
      setcurrName(result.data.name);
    };
    UserData();
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

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
  return (
    <>
      {loader && <Onload />}
      {!loader && (
        <div className="user-profile">
          <Alert />
          <div
            className="tab-pane fade show value"
            id="navs-justified-home"
            role="tabpanel"
          >
            <div className="profilemenu">
              <div
                className="card shadow-lg mb-4"
                style={{
                  margin: "auto",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <div className="card-img-top">
                  <img
                    src={image}
                    alt=""
                    style={{
                      height: "160px",
                      width: "160px",
                      backgroundSize: "160px 160px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <form>
                  <label className="imglabel" style={{ marginTop: "10px" }}>
                    <i className="fa fa-2x fa-camera"></i>
                    <input
                      id="inputTag"
                      accept="image/*"
                      type="file"
                      required
                      onChange={handleImageChange}
                    />
                  </label>
                </form>
                <div
                  className="update-btn-container"
                  style={{ marginTop: "10px" }}
                >
                  <button
                    className="btn"
                    onClick={() => {
                      handleSaveImage();
                    }}
                    style={{}}
                  >
                    Submit
                  </button>
                </div>
                {/* <div
                  className="card-body"
                  style={{ padding: "0", paddingTop: "10px" }}
                >
                  <h5
                    className="card-title"
                    style={{ textTransform: "capitalize" }}
                  >
                    {data.name}{" "}
                  </h5>
                  <br />
                </div> */}
                <div
                  className=" card-header alert alert-primary p-0 p-2"
                  style={{ fontSize: "20px", marginTop: "20px" }}
                >
                  Profile Section
                </div>
                <div
                  className="card-body "
                  style={{ borderBottom: "1px solid #fbc02a" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title" style={{ fontSize: "18px" }}>
                      Name
                    </h5>
                  </div>
                  <input
                    className="card-text "
                    value={currName}
                    type="userDetail"
                    disabled
                    onChange={handleNameChange}
                  ></input>
                  <i
                    class="fa fa-pencil edit-pencil"
                    onClick={handlePencilClick}
                  ></i>
                </div>
                <div
                  className="card-body "
                  style={{ borderBottom: "1px solid #fbc02a" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title" style={{ fontSize: "18px" }}>
                      Email
                    </h5>
                  </div>
                  <p className="card-text ">{data.email}</p>
                </div>
                <div
                  className="card-body "
                  style={{ borderBottom: "1px solid #fbc02a" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title" style={{ fontSize: "18px" }}>
                      Phone Number
                    </h5>
                  </div>
                  <input
                    className="card-text "
                    value={currpNumber}
                    type="userDetail"
                    disabled
                    onChange={handleNumberChange}
                  ></input>
                  <i
                    class="fa fa-pencil edit-pencil"
                    onClick={handlePencilClick}
                  ></i>
                </div>
                <div
                  className="card-body "
                  style={{ borderBottom: "1px solid #fbc02a" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title" style={{ fontSize: "18px" }}>
                      Date of Birth
                    </h5>
                  </div>
                  <input
                    className="card-text "
                    value={currDOB}
                    type="date"
                    disabled
                    onChange={handleDobChange}
                  ></input>
                  <i
                    class="fa fa-pencil edit-pencil"
                    onClick={handlePencilClick}
                  ></i>
                </div>
                <div
                  className="card-body "
                  style={{ borderBottom: "1px solid #fbc02a" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title" style={{ fontSize: "18px" }}>
                      Gender
                    </h5>
                  </div>
                  <input
                    className="card-text "
                    value={currGender}
                    type="userDetail"
                    disabled
                    onChange={handleGenderChange}
                  ></input>
                  <i
                    class="fa fa-pencil edit-pencil"
                    onClick={handlePencilClick}
                  ></i>
                </div>
                <div
                  className="card-body "
                  style={{ borderBottom: "1px solid #fbc02a" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title" style={{ fontSize: "18px" }}>
                      Location
                    </h5>
                  </div>
                  <input
                    className="card-text "
                    value={currLocation}
                    type="userDetail"
                    disabled
                    onChange={handleLocationChange}
                  ></input>
                  <i
                    class="fa fa-pencil edit-pencil"
                    onClick={handlePencilClick}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button
              className="btn btn-primary button"
              onClick={handleNewDetails}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </>
  );
}
