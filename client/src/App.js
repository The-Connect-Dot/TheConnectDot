import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Mentor from "./Pages/Mentor/Mentor";
import Mentee from "./Pages/Mentee/Mentee";
import Navbar from "./React Components/Navbar/Navbar";
import SignupPage from "./Pages/SignupPage/SignupPage";
import Login from "./React Components/SignForm/Login";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyASU8t9V4Hs8sCN23KfF68fW2hY2GMBtGg",
//   authDomain: "dotconnect-73256.firebaseapp.com",
//   projectId: "dotconnect-73256",
//   storageBucket: "dotconnect-73256.appspot.com",
//   messagingSenderId: "646124587166",
//   appId: "1:646124587166:web:564999fbd49b978f01938f",
//   measurementId: "G-C2ZJPY1FR6"
// };

// firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mentor" element={<Mentor />} />
          <Route path="/Mentee" element={<Mentee />} />
          <Route path="/signup" element={<Login prop="register"/>} />
          <Route path="/login" element={<Login prop="login"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
