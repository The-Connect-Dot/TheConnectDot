import React from "react";
import "./Login.css";
import "./Register.css";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useCookies } from "react-cookie";
import Onload from "../AuthComponents/Onload/Onload";
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
  const [loader, setLoader] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["connectDot"]);
  const [storedata, setStoredata] = useState([]);

  useEffect(() => {
    localStorage.setItem("ConnectDot", JSON.stringify(storedata));
  }, [storedata]);

  useEffect(() => {
    setLoader(true);
    if (cookies.connectDot) {
      // console.log(cookies.connectDot, cookies.connectDot[0]);
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
    try {
      const response = await fetch("http://localhost:5100/" + type + "-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.isSucess) {
        setCookie("connectDot", [result.userId, type], {
          path: "/",
          maxAge: 2 * 24 * 60 * 60,
        });
        setStoredata({ userId: result.userId, type: type });
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
    } catch (error) {
      console.log("Google login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      console.log("Sign out successful");
    } catch (error) {
      console.log("Sign out failed:", error);
    }
  };
  const verifyLogin = async (connectDot) => {
    try {
      const response = await fetch("http://localhost:5100/verify-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: connectDot[0], type: connectDot[1] }),
      });
      const result = await response.json();
      if (result.isSucess) {
        window.location.href = "/auth/dashboard";
      } else {
        removeCookie(connectDot);
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
    console.log(event.target.value);
    setPerson(event.target.value); // Update the selected role when the dropdown value changes
  };

  const handleFormChange = (event) => {
    console.log(event.target.children[0].name);
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
          "http://localhost:5100/" + type + "-register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const result = await response.json();
        if (result.isSucess) {
          setCookie("connectDot", [result.userId, type], {
            path: "/",
            maxAge: 2 * 24 * 60 * 60,
          });
          setStoredata({ userId: result.userId, type: type });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      const mail = event.target.parentElement.parentElement[1].value;
      const pass = event.target.parentElement.parentElement[2].value;
      const data = { email: mail, password: pass };
      try {
        const response = await fetch(
          "http://localhost:5100/" + type + "-register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const result = await response.json();
        if (result.isSucess) {
          setCookie("connectDot", [result.userId, type], {
            path: "/",
            maxAge: 2 * 24 * 60 * 60,
          });
          setStoredata({ userId: result.userId, type: type });
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
      console.log("uid:", userCredential.user.uid);
      console.log("email:", userCredential.user.email);
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
