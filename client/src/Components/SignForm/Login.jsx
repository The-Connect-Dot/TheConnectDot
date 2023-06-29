import React from "react";
import "./Login.css";
import "./Register.css";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useCookies } from "react-cookie";
import Onload from "../Onload/Onload";
import Alert from "../Alert/Alert";

const firebaseConfig = {
  apiKey: "AIzaSyASU8t9V4Hs8sCN23KfF68fW2hY2GMBtGg",
  authDomain: "dotconnect-73256.firebaseapp.com",
  projectId: "dotconnect-73256",
  storageBucket: "dotconnect-73256.appspot.com",
  messagingSenderId: "646124587166",
  appId: "1:646124587166:web:564999fbd49b978f01938f",
  measurementId: "G-C2ZJPY1FR6",
};

initializeApp(firebaseConfig);

export default function UserInteraction({ prop }) {
  function showPopup(msg, type) {
    var popup = document.getElementById("popup");
    popup.children[1].children[0].innerText = msg;
    popup.children[1].children[1].style.backgroundColor = type;

    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  }

  const [loader, setLoader] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["connectDot"]);
  const [storedata, setStoredata] = useState([]);

  useEffect(() => {
    localStorage.setItem("ConnectDot", JSON.stringify(storedata));
  }, [storedata]);

  useEffect(() => {
    setLoader(true);
    if (cookies.connectDot) {
      verifyLogin(cookies.connectDot);
    }
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const [formtype, setFormtype] = useState(prop);
  const [person, setPerson] = useState("Mentor");
  const auth = getAuth();
  const [user, setUser] = useState(null);

  const loginManually = async (event) => {
    const type = event.target.parentElement.parentElement[0].value;
    const mail = event.target.parentElement.parentElement[1].value;
    const pass = event.target.parentElement.parentElement[2].value;
    const data = { email: mail, password: pass };
    if (!mail || !pass) {
      showPopup("Please enter all details.", "red");
      return;
    }
    try {
      const response = await fetch(
        "https://backend-connectdot.vmplay.ml/" + type + "-login",
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
  };
  const loginWithGoogle = async (event) => {
    const type = event.target.parentElement.parentElement[0].value;
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const email = userCredential.user.email;
      try {
        const response = await fetch(
          "https://backend-connectdot.vmplay.ml/verify-login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, type: type }),
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
        } else {
          removeCookie("connectDot");
        }
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.log("Google login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log("Sign out failed:", error);
    }
  };
  const verifyLogin = async (connectDot) => {
    try {
      const response = await fetch(
        "https://backend-connectdot.vmplay.ml/verify-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: connectDot[0], type: connectDot[1] }),
        }
      );
      const result = await response.json();
      showPopup(result.msg, result.color);
      if (result.isSuccess) {
        window.location.href =
          "/auth/user?type=" + connectDot[1] + "&page=dashboard";
      } else {
        removeCookie("connectDot");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleRoleChange = (event) => {
    setPerson(event.target.value); // Update the selected role when the dropdown value changes
  };

  const handleFormChange = (event) => {
    const name = event.target.children[0].name;
    const strings = name.split("-");
    setFormtype(strings[1]);
    setPerson(strings[0]);
  };

  const signupManually = async (event) => {
    const type = event.target.parentElement.parentElement[0].value;
    if (type === "mentee") {
      const google = false;
      const mail = event.target.parentElement.parentElement[1].value;
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
          "https://backend-connectdot.vmplay.ml/mentee-register",
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
          setCookie("connectDot", [result.userId, "mentee"], {
            path: "/",
            maxAge: 2 * 24 * 60 * 60,
          });
          setStoredata({ userId: result.userId, type: "mentee" });
          window.location.href = "/auth/user?type=" + type + "&page=dashboard";
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      const mail = event.target.parentElement.parentElement[1].value;
      const pass = event.target.parentElement.parentElement[2].value;
      const data = { email: mail, password: pass, isgoogle: false };
      if (!mail || !pass) {
        showPopup("Please enter all details.", "red");
        return;
      }
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
        if (cookies) {
          cookies.split(",").forEach(function (cookie) {
            document.cookie = cookie;
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const SignupWithGoogle = async (event) => {
    const type = event.target.parentElement.parentElement[0].value;
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const email = userCredential.user.email;
      window.location.href = "/gsingup?email=" + email + "&type=" + type;
    } catch (error) {
      console.log("Google login failed:", error);
    }
  };

  return loader ? (
    <Onload />
  ) : (
    <div className="user-interaction-page">
      <Alert />
      {formtype === "login" && (
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
              <h2>Mentor Login Form</h2>
              <form>
                <input name="mentor" type="hidden" value={"mentor"} />
                <div className="user-box">
                  <input type="text" name="email" required="" />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input type="password" name="password" required="" />
                  <label>Password</label>
                </div>
                <div className="btns-container">
                  <a
                    onClick={(e) => {
                      loginManually(e);
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                  </a>
                  <a
                    className="google-sign-in"
                    onClick={(e) => {
                      loginWithGoogle(e);
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login with Google
                  </a>
                </div>
              </form>
              <div className="sign-up-text">
                Don't Have Account?
                <span onClick={handleFormChange}>
                  <input name="Mentor-register" type="hidden" />
                  Sign Up Here
                </span>
              </div>
              <div className="forget-text">
                Forget Password?
                <span
                  onClick={() => {
                    window.location.href = "/forgetpass";
                  }}
                >
                  Click Here
                </span>
              </div>
            </>
          )}
          {person === "Mentee" && (
            <>
              <h2>Mentee Login Form</h2>
              <form>
                <input name="mentee" type="hidden" value={"mentee"} />
                <div className="user-box">
                  <input type="text" name="email" required="" />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input type="password" name="password" required="" />
                  <label>Password</label>
                </div>
                <div className="btns-container">
                  <a
                    onClick={(e) => {
                      loginManually(e);
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                  </a>
                  <a
                    className="google-sign-in"
                    onClick={(e) => {
                      loginWithGoogle(e);
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login with Google
                  </a>
                </div>
              </form>
              <div className="sign-up-text">
                Don't Have Account?
                <span onClick={handleFormChange}>
                  <input name="Mentee-register" type="hidden" />
                  Sign Up Here
                </span>
              </div>
              <div className="forget-text">
                Forget Password?
                <span
                  onClick={() => {
                    window.location.href = "/forgetpass";
                  }}
                >
                  Click Here
                </span>
              </div>
            </>
          )}
        </div>
      )}
      {formtype === "register" && (
        <div className="register-box">
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
              <h2>Mentor Signup Form</h2>
              <form>
                <input name="mentor" type="hidden" value={"mentor"} />
                <div className="user-box">
                  <input type="text" name="email" required="" />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input type="password" name="password" required="" />
                  <label>Password</label>
                </div>
                <div className="btns-container">
                  <a
                    onClick={(e) => {
                      signupManually(e);
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Signup
                  </a>
                  <a
                    className="google-sign-up"
                    onClick={(e) => {
                      SignupWithGoogle(e);
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Signup with Google
                  </a>
                </div>
              </form>
              <div className="sign-up-text">
                Already Have Account?
                <span onClick={handleFormChange}>
                  <input name="Mentor-login" type="hidden" />
                  Login Here
                </span>
              </div>
            </>
          )}
          {person === "Mentee" && (
            <>
              <h2>Mentee Signup Form</h2>
              <form>
                <input name="mentee" type="hidden" value={"mentee"} />
                <div className="user-box">
                  <input type="text" name="email" required="" />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input type="text" name="name" required="" />
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
                    onClick={(e) => {
                      signupManually(e);
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Signup
                  </a>
                  <a
                    className="google-sign-up"
                    onClick={(e) => {
                      SignupWithGoogle(e);
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Signup with Google
                  </a>
                </div>
              </form>
              <div className="sign-up-text">
                Already Have Account?
                <span onClick={handleFormChange}>
                  <input name="Mentee-login" type="hidden" />
                  Login Here
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
