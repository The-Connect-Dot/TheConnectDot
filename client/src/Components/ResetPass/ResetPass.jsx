import React from "react";
import "./ResetPass.css";
import "../SignForm/Login.css";
import { useState } from "react";
import Alert from "../Alert/Alert";
import { useParams } from "react-router-dom";

export default function ResetPass() {
  const [npass, setNpass] = useState("");
  const [cpass, setCpass] = useState("");
  const { type, token, link } = useParams();

  function showPopup(msg, type) {
    var popup = document.getElementById("popup");
    popup.children[1].children[0].innerText = msg;
    popup.children[1].children[1].style.backgroundColor = type;

    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  }
  const handleSubmit = async (e) => {
    if (!npass || !cpass) {
      showPopup("Enter both fields", "red");
      return;
    }
    if (npass !== cpass) {
      showPopup("Both fields are not same!", "red");
      return;
    }

    const data = {
      token: token,
      link: link,
      password: npass,
      type: type,
    };
    const response = await fetch(
      "https://backend-connectdot.vmplay.ml/reset-pass",
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
      window.location.href = "/login";
    }
    showPopup(result.msg, result.color);
  };
  return (
    <div className="reset-pass-body">
      <Alert />
      <div className="login-box">
        <>
          <h2>Reset Password Form</h2>
          <form>
            <div className="user-box">
              <input
                type="password"
                placeholder="New Password"
                onChange={(e) => setNpass(e.target.value)}
                minLength={8}
              />
              <label>New Password</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setCpass(e.target.value)}
                minLength={8}
              />
              <label>Confirm Password</label>
            </div>
            <div className="btns-container">
              <a
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </div>
          </form>
        </>
      </div>
    </div>
  );
}
