import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Mentor from "./Pages/Mentor/Mentor";
import Mentee from "./Pages/Mentee/Mentee";
import Navbar from "./React Components/Navbar/Navbar";
// import Contact from "./Pages/Contact/Contact";
import "./App.css";
import Signup from "./React Components/Navbar/Signup";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mentor" element={<Mentor />} />
          <Route path="/Mentee" element={<Mentee />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="/signup" element={<Signup />
        } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
