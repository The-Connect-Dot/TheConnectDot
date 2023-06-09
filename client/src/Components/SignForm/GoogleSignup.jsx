import React from "react";
import "./Login.css";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import Alert from "../Alert/Alert";

export default function GoogleLogin() {
  function showPopup(msg, type) {
    var popup = document.getElementById("popup");
    popup.children[1].children[0].innerText = msg;
    popup.children[1].children[1].style.backgroundColor = type;

    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  }
  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);
  const params = window.location.href.split("?")[1];
  const email = params.split("&")[0].split("=")[1];
  const type = params.split("&")[1].split("=")[1];
  const [storedata, setStoredata] = useState([]);
  useEffect(() => {
    localStorage.setItem("ConnectDot", JSON.stringify(storedata));
  }, [storedata]);

  const RegisterUser = async (event) => {
    const type = event.target.parentElement.parentElement[0].value;

    if (type === "mentee") {
      const google = true;
      const mail = email;
      const name = event.target.parentElement.parentElement[2].value;
      const phone = event.target.parentElement.parentElement[3].value;
      const dob = event.target.parentElement.parentElement[4].value;
      const gender = event.target.parentElement.parentElement[5].value;
      const location = event.target.parentElement.parentElement[6].value;
      const pass = event.target.parentElement.parentElement[7].value;
      if (!mail || !pass || !name || !phone || !dob || !gender || !location) {
        showPopup("Please enter all details.", "red");
        return;
      }
      const data = {
        email: mail,
        password: pass,
        name: name,
        pnumber: phone,
        dob: dob,
        gender: gender,
        location: location,
        google: google,
      };
      try {
        const response = await fetch(
          "https://backend-connectdot.vmplay.ml/" + type + "-register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const result = await response.json();
        showPopup(result.msg, result.color);
        if (result.isSuccess) {
          setCookie("connectDot", [result.userId, type], {
            path: "/",
            maxAge: 2 * 24 * 60 * 60,
          });
          setStoredata({ userId: result.userId, type: type });
          window.location.href = "/auth/user?type=" + type + "&page=dashboard";
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      const mail = email;
      const pass = event.target.parentElement.parentElement[2].value;
      if (!mail || !pass) {
        showPopup("Please enter all details.", "red");
        return;
      }
      const data = { email: mail, password: pass, isgoogle: true };
      try {
        const response = await fetch(
          "https://backend-connectdot.vmplay.ml/" + type + "-register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const result = await response.json();
        showPopup(result.msg, result.color);
        if (result.isSuccess) {
          setCookie("connectDot", [result.userId, type], {
            path: "/",
            maxAge: 2 * 24 * 60 * 60,
          });
          setStoredata({ userId: result.userId, type: type });
          window.location.href = "/auth/user?type=" + type + "&page=dashboard";
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="user-interaction-page">
      <Alert />
      {type === "mentee" && (
        <div className="register-box">
          <h2>Mentee Signup Form</h2>
          <form>
            <input name="mentee" type="hidden" value={"mentee"} />
            <div className="user-box">
              <input
                type="text"
                name="email"
                required=""
                placeholder={email}
                disabled
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="text" name="name" required />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input type="text" name="number" required="" />
              <label>Phone Number</label>
            </div>
            <div className="user-box">
              <input type="date" name="dob" required="" id="date-input" />
              <label>Date of Birth</label>
            </div>
            <div className="user-box">
              <input type="text" name="gender" required="" />
              <label>Gender</label>
            </div>
            <div className="user-box">
              <input type="text" name="location" required="" />
              <label>Current Location</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                required=""
                minLength={8}
              />
              <label>Password</label>
            </div>
            <div className="btns-container">
              <a
                className="google-sign-up"
                onClick={(e) => {
                  RegisterUser(e);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Signup
              </a>
            </div>
          </form>
        </div>
      )}
      {type === "mentor" && (
        <div className="register-box">
          <h2>Mentor Signup Form</h2>
          <form>
            <input name="mentor" type="hidden" value={"mentor"} />
            <div className="user-box">
              <input
                type="text"
                name="email"
                required=""
                placeholder={email}
                disabled
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" name="password" required="" />
              <label>Password</label>
            </div>
            <div className="btns-container">
              <a
                className="google-sign-up"
                onClick={(e) => {
                  RegisterUser(e);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Signup
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
