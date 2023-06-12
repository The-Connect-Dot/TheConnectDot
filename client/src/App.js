import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Mentor from "./React Components/Dashboard/Mentor/Mentor";
import Mentee from "./React Components/Dashboard/Mentee/Mentee";
import Navbar from "./React Components/Navbar/Navbar";
import Login from "./React Components/SignForm/Login";

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
          <Route path="/login" element={<Login prop="login"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;