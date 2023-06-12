import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/HomePage/HomePage";
import Mentor from "./Pages/Mentor/Mentor";
import Mentee from "./Pages/Mentee/Mentee";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/SignForm/Login";
import GoogleSignup from "./Components/SignForm/GoogleSignup";
// import Dashboard from "./React Components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mentor" element={<Mentor />} />
          <Route path="/Mentee" element={<Mentee />} />
          <Route path="/signup" element={<Login prop="register" />} />
          <Route path="/login" element={<Login prop="login" />} />
          <Route path='/gsingup' element={<GoogleSignup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
