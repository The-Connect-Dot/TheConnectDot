import React from "react";
import "./ForgetPass.css";
import "../SignForm/Login.css";
import { useState } from "react";
import Alert from "../Alert/Alert";

export default function ForgetPass() {
  const [person, setPerson] = useState("Mentor");
  const [email, setEmail] = useState("");
  function showPopup(msg, type) {
    var popup = document.getElementById("popup");
    popup.children[1].children[0].innerText = msg;
    popup.children[1].children[1].style.backgroundColor = type;

    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  }
  const handleRoleChange = (event) => {
    setPerson(event.target.value);
  };
  const handleSubmit = async (type, e) => {
    if (!email) {
      showPopup("Please enter mail", "red");
      return;
    }
    const data = { email: email, type: type };
    const response = await fetch(
      "https://backend-connectdot.vmplay.ml/forgot-pass",
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
      setEmail("");
    }
  };

  return (
    <div className="forget-pass-body">
      <Alert />
      <div className="login-box">
        <div className="select-person">
          <label for="membership">Select Type:</label>
          <select
            name="persontype"
            id="persontype"
            onChange={handleRoleChange}
            defaultValue={person}
          >
            <option value="Mentor">Mentor</option>
            <option value="Mentee">Mentee</option>
          </select>
        </div>
        {person === "Mentor" && (
          <>
            <h2>Forgot Password Form</h2>
            <form>
              <input name="mentor" type="hidden" value={"mentor"} />
              <div className="user-box">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  //   id = "user-email"
                />
                <label>Email</label>
              </div>
              <div className="btns-container">
                <a
                  onClick={(e) => {
                    handleSubmit("mentor", e);
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
        )}
        {person === "Mentee" && (
          <>
            <h2>Forgot Password Form</h2>
            <form>
              <input name="mentee" type="hidden" value={"mentee"} />
              <div className="user-box">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
              </div>
              <div className="btns-container">
                <a
                  onClick={(e) => {
                    handleSubmit("mentee", e);
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
        )}
      </div>
    </div>
  );
}
