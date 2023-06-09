import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Mentor from "./Pages/Mentor/Mentor";
import Mentee from "./Pages/Mentee/Mentee";
import Navbar from "./React Components/Navbar/Navbar";
import SignupPage from "./Pages/SignupPage/SignupPage";
import Login from "./React Components/SignForm/Login";
import Registerpage  from "./Pages/Register/Registerpage";



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
          <Route path="/register" element={<Registerpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;